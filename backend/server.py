from fastapi import FastAPI, APIRouter, HTTPException
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
import asyncio
from pathlib import Path
from pydantic import BaseModel, Field, EmailStr
from typing import List, Optional
import uuid
from datetime import datetime, timezone
import resend
from fastapi.responses import Response
from blog_seed import POSTS as BLOG_SEED

ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

RESEND_API_KEY = os.environ.get('RESEND_API_KEY')
SENDER_EMAIL = os.environ.get('SENDER_EMAIL', 'onboarding@resend.dev')
NOTIFY_EMAIL = os.environ.get('NOTIFY_EMAIL', 'daribnb.ma@gmail.com')
if RESEND_API_KEY:
    resend.api_key = RESEND_API_KEY

app = FastAPI(title="Daribnb API")
api_router = APIRouter(prefix="/api")


# ============ Models ============
class ContactCreate(BaseModel):
    name: str
    email: EmailStr
    phone: str
    city: Optional[str] = None
    service: Optional[str] = None  # "conciergerie" | "loyer_fixe"
    message: Optional[str] = None


class Contact(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str
    email: str
    phone: str
    city: Optional[str] = None
    service: Optional[str] = None
    message: Optional[str] = None
    created_at: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))


class SimulateInput(BaseModel):
    city: str
    property_type: str  # "studio" | "appartement" | "riad" | "villa"
    bedrooms: int = Field(ge=0, le=20)


class SimulateResult(BaseModel):
    monthly_min: int
    monthly_max: int
    monthly_avg: int
    fixed_rent: int
    occupancy: int
    nightly_rate: int
    currency: str = "MAD"


# ============ Pricing matrix (MAD / nuit) ============
CITY_MULTIPLIER = {
    "marrakech": 1.20,
    "casablanca": 1.00,
    "rabat": 0.95,
    "tanger": 1.05,
    "agadir": 1.10,
    "fes": 0.90,
    "essaouira": 1.15,
    "chefchaouen": 1.00,
    "autre": 0.90,
}

TYPE_BASE = {
    "studio": 450,
    "appartement": 700,
    "riad": 1400,
    "villa": 1800,
}

CITY_OCCUPANCY = {
    "marrakech": 78,
    "casablanca": 70,
    "rabat": 68,
    "tanger": 72,
    "agadir": 75,
    "fes": 65,
    "essaouira": 73,
    "chefchaouen": 70,
    "autre": 65,
}


# ============ Routes ============
@api_router.get("/")
async def root():
    return {"message": "Daribnb API — Conciergerie Airbnb & Loyer Fixe au Maroc"}


@api_router.post("/simulate", response_model=SimulateResult)
async def simulate(input: SimulateInput):
    city = input.city.lower().strip()
    ptype = input.property_type.lower().strip()

    mult = CITY_MULTIPLIER.get(city, CITY_MULTIPLIER["autre"])
    base = TYPE_BASE.get(ptype, TYPE_BASE["appartement"])
    occ = CITY_OCCUPANCY.get(city, CITY_OCCUPANCY["autre"])

    # extra per bedroom above 1
    extra = max(0, input.bedrooms - 1) * 180

    nightly = int((base + extra) * mult)
    monthly_avg = int(nightly * 30 * (occ / 100))
    monthly_min = int(monthly_avg * 0.85)
    monthly_max = int(monthly_avg * 1.15)
    # Fixed rent offer = ~70% of average monthly, net for owner, guaranteed
    fixed_rent = int(monthly_avg * 0.70)

    return SimulateResult(
        monthly_min=monthly_min,
        monthly_max=monthly_max,
        monthly_avg=monthly_avg,
        fixed_rent=fixed_rent,
        occupancy=occ,
        nightly_rate=nightly,
    )


@api_router.post("/contact", response_model=Contact)
async def create_contact(payload: ContactCreate):
    contact = Contact(**payload.model_dump())
    doc = contact.model_dump()
    doc['created_at'] = doc['created_at'].isoformat()
    await db.contacts.insert_one(doc)

    # Send notification email (non-blocking, degrades gracefully)
    if RESEND_API_KEY:
        try:
            service_label = {
                "conciergerie": "Conciergerie Airbnb",
                "super_daribnb": "Super Daribnb (optimisation)",
                "loyer_fixe": "Loyer fixe garanti",
                "les_deux": "À conseiller",
            }.get(contact.service or "", contact.service or "Non précisé")

            html = f"""
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #FAF9F6; padding: 24px;">
              <div style="background: #FF5A5F; color: white; padding: 24px; border-radius: 16px 16px 0 0;">
                <h1 style="margin:0; font-size: 22px;">Nouvelle demande Daribnb</h1>
                <p style="margin: 6px 0 0; opacity: 0.9; font-size: 14px;">Reçue le {contact.created_at.strftime('%d/%m/%Y à %H:%M')}</p>
              </div>
              <div style="background: white; padding: 24px; border-radius: 0 0 16px 16px; border: 1px solid #E5E5E5; border-top: none;">
                <table style="width: 100%; border-collapse: collapse;">
                  <tr><td style="padding: 8px 0; color: #4B5563; font-size: 13px;">Nom</td><td style="padding: 8px 0; font-weight: bold; color: #1A1A1A;">{contact.name}</td></tr>
                  <tr><td style="padding: 8px 0; color: #4B5563; font-size: 13px;">Email</td><td style="padding: 8px 0; color: #1A1A1A;"><a href="mailto:{contact.email}" style="color:#FF5A5F; text-decoration:none;">{contact.email}</a></td></tr>
                  <tr><td style="padding: 8px 0; color: #4B5563; font-size: 13px;">Téléphone</td><td style="padding: 8px 0; color: #1A1A1A;"><a href="tel:{contact.phone}" style="color:#FF5A5F; text-decoration:none;">{contact.phone}</a></td></tr>
                  <tr><td style="padding: 8px 0; color: #4B5563; font-size: 13px;">Ville</td><td style="padding: 8px 0; color: #1A1A1A;">{contact.city or '—'}</td></tr>
                  <tr><td style="padding: 8px 0; color: #4B5563; font-size: 13px;">Service</td><td style="padding: 8px 0; color: #1A1A1A;">{service_label}</td></tr>
                </table>
                <div style="margin-top: 16px; padding-top: 16px; border-top: 1px solid #E5E5E5;">
                  <p style="margin: 0; color: #4B5563; font-size: 13px;">Message</p>
                  <p style="margin: 8px 0 0; color: #1A1A1A; white-space: pre-wrap;">{contact.message or '(aucun message)'}</p>
                </div>
                <div style="margin-top: 24px; text-align: center;">
                  <a href="https://wa.me/{contact.phone.replace('+','').replace(' ','')}" style="display:inline-block; background:#25D366; color:white; padding: 12px 24px; border-radius: 999px; text-decoration:none; font-weight:bold;">Répondre sur WhatsApp</a>
                </div>
              </div>
              <p style="text-align:center; color:#9CA3AF; font-size:12px; margin-top: 16px;">Daribnb — Conciergerie Airbnb & Loyer Fixe au Maroc</p>
            </div>
            """

            params = {
                "from": f"Daribnb <{SENDER_EMAIL}>",
                "to": [NOTIFY_EMAIL],
                "reply_to": contact.email,
                "subject": f"Nouvelle demande : {contact.name} — {service_label}",
                "html": html,
            }
            await asyncio.to_thread(resend.Emails.send, params)
        except Exception as e:
            logger.error(f"Resend email failed (non-blocking): {e}")

    return contact


@api_router.get("/contacts", response_model=List[Contact])
async def list_contacts():
    items = await db.contacts.find({}, {"_id": 0}).sort("created_at", -1).to_list(500)
    for it in items:
        if isinstance(it.get('created_at'), str):
            it['created_at'] = datetime.fromisoformat(it['created_at'])
    return items


# ============ Blog ============
class BlogPost(BaseModel):
    slug: str
    title: str
    excerpt: str
    meta_description: str
    keywords: str
    city: str
    cover: str
    published_at: datetime
    read_time: int
    content: str


class BlogPostSummary(BaseModel):
    slug: str
    title: str
    excerpt: str
    city: str
    cover: str
    published_at: datetime
    read_time: int


@api_router.get("/blog", response_model=List[BlogPostSummary])
async def list_posts():
    items = await db.blog_posts.find(
        {}, {"_id": 0, "content": 0, "meta_description": 0, "keywords": 0}
    ).sort("published_at", -1).to_list(100)
    for it in items:
        if isinstance(it.get('published_at'), str):
            it['published_at'] = datetime.fromisoformat(it['published_at'].replace('Z', '+00:00'))
    return items


@api_router.get("/blog/{slug}", response_model=BlogPost)
async def get_post(slug: str):
    post = await db.blog_posts.find_one({"slug": slug}, {"_id": 0})
    if not post:
        raise HTTPException(status_code=404, detail="Article introuvable")
    if isinstance(post.get('published_at'), str):
        post['published_at'] = datetime.fromisoformat(post['published_at'].replace('Z', '+00:00'))
    return post


@app.get("/sitemap.xml")
async def sitemap():
    base = os.environ.get("SITE_URL", "https://daribnb.ma")
    posts = await db.blog_posts.find({}, {"_id": 0, "slug": 1, "published_at": 1}).to_list(500)
    urls = [
        (base + "/", "1.0"),
        (base + "/blog", "0.9"),
        (base + "/mentions-legales", "0.3"),
        (base + "/confidentialite", "0.3"),
        (base + "/cgv", "0.3"),
    ]
    xml = ['<?xml version="1.0" encoding="UTF-8"?>',
           '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">']
    for url, priority in urls:
        xml.append(f'<url><loc>{url}</loc><priority>{priority}</priority></url>')
    for p in posts:
        xml.append(f'<url><loc>{base}/blog/{p["slug"]}</loc><lastmod>{p["published_at"][:10] if isinstance(p["published_at"], str) else p["published_at"].strftime("%Y-%m-%d")}</lastmod><priority>0.8</priority></url>')
    xml.append('</urlset>')
    return Response(content="\n".join(xml), media_type="application/xml")


@app.get("/robots.txt")
async def robots():
    base = os.environ.get("SITE_URL", "https://daribnb.ma")
    content = f"User-agent: *\nAllow: /\nSitemap: {base}/sitemap.xml\n"
    return Response(content=content, media_type="text/plain")


@app.on_event("startup")
async def seed_blog():
    for post in BLOG_SEED:
        await db.blog_posts.update_one(
            {"slug": post["slug"]},
            {"$set": post},
            upsert=True,
        )
    logger.info(f"Blog seeded: {len(BLOG_SEED)} posts")


app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)


@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()
