"""Backend tests for Daribnb API: /api/, /api/simulate, /api/contact, /api/contacts."""
import os
import requests
import pytest

BASE_URL = os.environ.get("REACT_APP_BACKEND_URL", "https://host-management-pro-1.preview.emergentagent.com").rstrip("/")
API = f"{BASE_URL}/api"


@pytest.fixture(scope="module")
def client():
    s = requests.Session()
    s.headers.update({"Content-Type": "application/json"})
    return s


# ---- /api/ root ----
def test_root_welcome(client):
    r = client.get(f"{API}/")
    assert r.status_code == 200
    data = r.json()
    assert "Daribnb" in data.get("message", "")


# ---- /api/simulate ----
@pytest.mark.parametrize("city,ptype,br", [
    ("marrakech", "studio", 0),
    ("marrakech", "appartement", 2),
    ("casablanca", "riad", 3),
    ("casablanca", "villa", 5),
    ("autre", "studio", 1),
    ("tanger", "appartement", 1),
])
def test_simulate_matrix(client, city, ptype, br):
    r = client.post(f"{API}/simulate", json={"city": city, "property_type": ptype, "bedrooms": br})
    assert r.status_code == 200, r.text
    d = r.json()
    for k in ["monthly_min", "monthly_max", "monthly_avg", "fixed_rent", "occupancy", "nightly_rate", "currency"]:
        assert k in d
    assert d["currency"] == "MAD"
    assert d["monthly_min"] <= d["monthly_avg"] <= d["monthly_max"]
    assert d["fixed_rent"] > 0
    assert 0 < d["occupancy"] <= 100
    assert d["nightly_rate"] > 0


def test_simulate_bedrooms_out_of_range_negative(client):
    r = client.post(f"{API}/simulate", json={"city": "marrakech", "property_type": "studio", "bedrooms": -1})
    assert r.status_code == 422


def test_simulate_bedrooms_out_of_range_high(client):
    r = client.post(f"{API}/simulate", json={"city": "marrakech", "property_type": "studio", "bedrooms": 21})
    assert r.status_code == 422


def test_simulate_bedrooms_boundary(client):
    for b in [0, 20]:
        r = client.post(f"{API}/simulate", json={"city": "rabat", "property_type": "appartement", "bedrooms": b})
        assert r.status_code == 200


# ---- /api/contact ----
def test_contact_create(client):
    payload = {
        "name": "TEST_Ali Benali",
        "email": "test_ali@example.com",
        "phone": "+212600000000",
        "city": "Marrakech",
        "service": "conciergerie",
        "message": "Bonjour, je souhaite une estimation.",
    }
    r = client.post(f"{API}/contact", json=payload)
    assert r.status_code == 200, r.text
    d = r.json()
    assert "id" in d and len(d["id"]) > 0
    assert "created_at" in d
    assert d["name"] == payload["name"]
    assert d["email"] == payload["email"]
    assert d["phone"] == payload["phone"]


def test_contact_missing_required(client):
    r = client.post(f"{API}/contact", json={"name": "X"})
    assert r.status_code == 422


def test_contact_invalid_email(client):
    r = client.post(f"{API}/contact", json={"name": "X", "email": "notanemail", "phone": "12345"})
    assert r.status_code == 422


# ---- /api/contacts ----
def test_contacts_list_no_objectid(client):
    # ensure at least one exists
    client.post(f"{API}/contact", json={
        "name": "TEST_List", "email": "list@example.com", "phone": "+212600000001"
    })
    r = client.get(f"{API}/contacts")
    assert r.status_code == 200
    items = r.json()
    assert isinstance(items, list)
    assert len(items) >= 1
    for it in items:
        assert "_id" not in it
        assert "id" in it
        assert "email" in it
