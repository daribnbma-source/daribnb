"""Daribnb admin auth + admin CRUD tests (iteration 2)."""
import os
import time
import pytest
import requests
from pymongo import MongoClient

BASE_URL = os.environ.get('REACT_APP_BACKEND_URL', 'https://host-management-pro-1.preview.emergentagent.com').rstrip('/')
# Fallback to internal if env not present
MONGO_URL = os.environ.get('MONGO_URL', 'mongodb://localhost:27017')
DB_NAME = os.environ.get('DB_NAME', 'test_database')

_mc = MongoClient(MONGO_URL)
_db = _mc[DB_NAME]


def _ensure_session(user_id, email, name="Test"):
    _db.users.delete_many({"email": email})
    _db.user_sessions.delete_many({"user_id": user_id})
    token = f"pytest_{user_id}_{int(time.time()*1000)}"
    _db.users.insert_one({
        "user_id": user_id, "email": email, "name": name,
        "picture": "", "created_at": "2026-01-01T00:00:00+00:00",
    })
    _db.user_sessions.insert_one({
        "user_id": user_id,
        "session_token": token,
        "expires_at": "2099-01-01T00:00:00+00:00",
        "created_at": "2026-01-01T00:00:00+00:00",
    })
    return token


@pytest.fixture(scope="module")
def admin_token():
    t = _ensure_session("admin-test", "daribnb.ma@gmail.com", "Marwan")
    yield t
    _db.user_sessions.delete_many({"session_token": t})


@pytest.fixture(scope="module")
def non_admin_token():
    t = _ensure_session("non-admin-test", "nonadmin@example.com", "NonAdmin")
    yield t
    _db.user_sessions.delete_many({"session_token": t})
    _db.users.delete_many({"email": "nonadmin@example.com"})


def _h(token):
    return {"Authorization": f"Bearer {token}"}


# ---------- public regression ----------
class TestPublicRegression:
    def test_root(self):
        r = requests.get(f"{BASE_URL}/api/")
        assert r.status_code == 200
        assert "Daribnb" in r.json()["message"]

    def test_simulate(self):
        r = requests.post(f"{BASE_URL}/api/simulate",
                          json={"city": "marrakech", "property_type": "appartement", "bedrooms": 2})
        assert r.status_code == 200
        d = r.json()
        assert d["currency"] == "MAD" and d["monthly_avg"] > 0

    def test_contact(self):
        r = requests.post(f"{BASE_URL}/api/contact",
                          json={"name": "TEST_user", "email": "test@example.com",
                                "phone": "+212600000000", "city": "Rabat",
                                "service": "conciergerie", "message": "hi"})
        assert r.status_code == 200
        assert r.json()["email"] == "test@example.com"

    def test_blog_list(self):
        r = requests.get(f"{BASE_URL}/api/blog")
        assert r.status_code == 200
        assert isinstance(r.json(), list) and len(r.json()) >= 1

    def test_blog_detail_seeded(self):
        r = requests.get(f"{BASE_URL}/api/blog/host-management-pro-1")
        # may 404 if slug not seeded; try first post from list
        if r.status_code == 404:
            lst = requests.get(f"{BASE_URL}/api/blog").json()
            slug = lst[0]["slug"]
            r = requests.get(f"{BASE_URL}/api/blog/{slug}")
        assert r.status_code == 200
        assert "content" in r.json()

    def test_sitemap(self):
        # /sitemap.xml and /robots.txt are not under /api/* so external ingress routes
        # them to the frontend. Test backend directly via localhost to validate logic.
        r = requests.get("http://localhost:8001/sitemap.xml")
        assert r.status_code == 200 and "<urlset" in r.text

    def test_robots(self):
        r = requests.get("http://localhost:8001/robots.txt")
        assert r.status_code == 200 and "Sitemap:" in r.text


# ---------- auth ----------
class TestAuth:
    def test_me_unauth(self):
        r = requests.get(f"{BASE_URL}/api/auth/me")
        assert r.status_code == 401

    def test_me_invalid_token(self):
        r = requests.get(f"{BASE_URL}/api/auth/me", headers=_h("bogus"))
        assert r.status_code == 401

    def test_me_admin(self, admin_token):
        r = requests.get(f"{BASE_URL}/api/auth/me", headers=_h(admin_token))
        assert r.status_code == 200, r.text
        d = r.json()
        assert d["email"] == "daribnb.ma@gmail.com"
        assert d["is_admin"] is True

    def test_me_non_admin(self, non_admin_token):
        r = requests.get(f"{BASE_URL}/api/auth/me", headers=_h(non_admin_token))
        assert r.status_code == 200
        assert r.json()["is_admin"] is False


# ---------- admin guards ----------
class TestAdminGuards:
    def test_contacts_unauth(self):
        r = requests.get(f"{BASE_URL}/api/admin/contacts")
        assert r.status_code == 401

    def test_contacts_non_admin(self, non_admin_token):
        r = requests.get(f"{BASE_URL}/api/admin/contacts", headers=_h(non_admin_token))
        assert r.status_code == 403

    def test_blog_list_non_admin(self, non_admin_token):
        r = requests.get(f"{BASE_URL}/api/admin/blog", headers=_h(non_admin_token))
        assert r.status_code == 403

    def test_contacts_admin(self, admin_token):
        r = requests.get(f"{BASE_URL}/api/admin/contacts", headers=_h(admin_token))
        assert r.status_code == 200
        assert isinstance(r.json(), list)

    def test_blog_admin(self, admin_token):
        r = requests.get(f"{BASE_URL}/api/admin/blog", headers=_h(admin_token))
        assert r.status_code == 200
        assert isinstance(r.json(), list)


# ---------- admin blog CRUD ----------
class TestAdminBlogCRUD:
    SLUG = "TEST_admin_post_iter2"

    def test_a_cleanup_existing(self, admin_token):
        requests.delete(f"{BASE_URL}/api/admin/blog/{self.SLUG}", headers=_h(admin_token))

    def test_b_create(self, admin_token):
        payload = {
            "slug": self.SLUG, "title": "Test Post", "excerpt": "short",
            "meta_description": "meta", "keywords": "k1,k2", "city": "Rabat",
            "cover": "https://example.com/c.jpg", "read_time": 3, "content": "# Hello",
        }
        r = requests.post(f"{BASE_URL}/api/admin/blog", json=payload, headers=_h(admin_token))
        assert r.status_code == 200, r.text
        assert r.json()["slug"] == self.SLUG

        # verify visible publicly
        pub = requests.get(f"{BASE_URL}/api/blog/{self.SLUG}")
        assert pub.status_code == 200
        assert pub.json()["title"] == "Test Post"

    def test_c_duplicate_slug_409(self, admin_token):
        payload = {
            "slug": self.SLUG, "title": "dup", "excerpt": "e",
            "meta_description": "m", "keywords": "k", "city": "Rabat",
            "cover": "x", "read_time": 1, "content": "c",
        }
        r = requests.post(f"{BASE_URL}/api/admin/blog", json=payload, headers=_h(admin_token))
        assert r.status_code == 409

    def test_d_update(self, admin_token):
        payload = {
            "slug": self.SLUG, "title": "Updated Title", "excerpt": "upd",
            "meta_description": "m", "keywords": "k", "city": "Casablanca",
            "cover": "https://example.com/c.jpg", "read_time": 4, "content": "# Updated",
        }
        r = requests.put(f"{BASE_URL}/api/admin/blog/{self.SLUG}",
                         json=payload, headers=_h(admin_token))
        assert r.status_code == 200
        assert r.json()["title"] == "Updated Title"
        pub = requests.get(f"{BASE_URL}/api/blog/{self.SLUG}").json()
        assert pub["title"] == "Updated Title"

    def test_e_delete(self, admin_token):
        r = requests.delete(f"{BASE_URL}/api/admin/blog/{self.SLUG}", headers=_h(admin_token))
        assert r.status_code == 200
        r2 = requests.get(f"{BASE_URL}/api/blog/{self.SLUG}")
        assert r2.status_code == 404

    def test_f_delete_missing_404(self, admin_token):
        r = requests.delete(f"{BASE_URL}/api/admin/blog/does_not_exist_xyz",
                            headers=_h(admin_token))
        assert r.status_code == 404


# ---------- admin contact delete ----------
class TestAdminContactDelete:
    def test_delete_contact_flow(self, admin_token):
        c = requests.post(f"{BASE_URL}/api/contact",
                          json={"name": "TEST_del", "email": "td@example.com",
                                "phone": "+212600000000", "city": "Fes",
                                "service": "loyer_fixe", "message": "del me"}).json()
        cid = c["id"]
        d = requests.delete(f"{BASE_URL}/api/admin/contacts/{cid}", headers=_h(admin_token))
        assert d.status_code == 200
        d2 = requests.delete(f"{BASE_URL}/api/admin/contacts/{cid}", headers=_h(admin_token))
        assert d2.status_code == 404


# ---------- logout ----------
class TestLogout:
    def test_logout_removes_session(self):
        token = _ensure_session("logout-test", "daribnb.ma@gmail.com", "Marwan")
        r = requests.post(f"{BASE_URL}/api/auth/logout", headers=_h(token))
        assert r.status_code == 200
        # token should be gone
        r2 = requests.get(f"{BASE_URL}/api/auth/me", headers=_h(token))
        assert r2.status_code == 401
        # db verify
        assert _db.user_sessions.find_one({"session_token": token}) is None
