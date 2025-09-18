from fastapi import APIRouter
from pydantic import BaseModel
import csv
import os
import random
import string

router = APIRouter()

# CSV file path
CSV_FILE = os.path.join(os.path.dirname(__file__), "..", "data", "complaints.csv")
os.makedirs(os.path.dirname(CSV_FILE), exist_ok=True)

# Ensure CSV exists
if not os.path.exists(CSV_FILE):
    with open(CSV_FILE, "w", newline="", encoding="utf-8") as f:
        writer = csv.DictWriter(f, fieldnames=[
            "id", "tracking_id", "title", "description", "name",
            "email", "phone", "location", "status", "created_at"
        ])
        writer.writeheader()

# Pydantic model
class Complaint(BaseModel):
    title: str
    description: str
    name: str = ""
    email: str = ""
    phone: str = ""
    location: str = ""

# Function to generate unique tracking ID
def generate_tracking_id(complaint_id: int):
    rand = ''.join(random.choices(string.ascii_uppercase + string.digits, k=4))
    return f"SMX-{complaint_id}-{rand}"

@router.post("/")
def create_complaint(complaint: Complaint):
    # Load existing complaints
    with open(CSV_FILE, newline="", encoding="utf-8") as f:
        reader = csv.DictReader(f)
        complaints = list(reader)

    next_id = len(complaints) + 1
    tracking_id = generate_tracking_id(next_id)

    complaint_dict = {
        "id": str(next_id),
        "tracking_id": tracking_id,
        **complaint.dict(),
        "status": "Open",
        "created_at": "2025-09-18"
    }

    # Append to CSV
    with open(CSV_FILE, "a", newline="", encoding="utf-8") as f:
        writer = csv.DictWriter(f, fieldnames=complaint_dict.keys())
        writer.writerow(complaint_dict)

    return {"message": "Complaint submitted", "complaint": complaint_dict}

@router.get("/")
def get_complaints():
    with open(CSV_FILE, newline="", encoding="utf-8") as f:
        reader = csv.DictReader(f)
        complaints = list(reader)
    return {"complaints": complaints}
