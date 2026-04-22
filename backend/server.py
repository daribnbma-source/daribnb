from fastapi import FastAPI, APIRouter, HTTPException
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
from pathlib import Path
from pydantic import BaseModel, Field, EmailStr
from typing import List, Optional
import uuid
from datetime import datetime, timezone

ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

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
    return contact


@api_router.get("/contacts", response_model=List[Contact])
async def list_contacts():
    items = await db.contacts.find({}, {"_id": 0}).sort("created_at", -1).to_list(500)
    for it in items:
        if isinstance(it.get('created_at'), str):
            it['created_at'] = datetime.fromisoformat(it['created_at'])
    return items


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
