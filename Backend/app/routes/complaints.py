# from fastapi import APIRouter
# from pydantic import BaseModel
# from app.database import db
# import random, string, datetime

# router = APIRouter()

# # Pydantic model
# class Complaint(BaseModel):
#     title: str
#     description: str
#     name: str = ""
#     email: str = ""
#     phone: str = ""
#     location: str = ""
#     latitude: float | None = None
#     longitude: float | None = None

# # Function to generate tracking ID
# def generate_tracking_id():
#     rand = ''.join(random.choices(string.ascii_uppercase + string.digits, k=6))
#     return f"SMX-{rand}"

# # POST → Submit Complaint
# @router.post("/")
# def create_complaint(complaint: Complaint):
#     complaint_dict = complaint.dict()
#     complaint_dict["tracking_id"] = generate_tracking_id()
#     complaint_dict["status"] = "Open"
#     complaint_dict["created_at"] = datetime.datetime.utcnow()

#     db.complaints.insert_one(complaint_dict)
#     return {"message": "Complaint submitted", "complaint": complaint_dict}

# # GET → Fetch All Complaints
# @router.get("/")
# def get_complaints():
#     complaints = list(db.complaints.find({}, {"_id": 0}))  # hide _id
#     return {"complaints": complaints}

# # GET → Fetch Complaint by Tracking ID
# @router.get("/{tracking_id}")
# def get_complaint_by_id(tracking_id: str):
#     complaint = db.complaints.find_one({"tracking_id": tracking_id}, {"_id": 0})
#     if not complaint:
#         return {"message": "Complaint not found"}
#     return complaint
from fastapi import APIRouter
from pydantic import BaseModel
from app.database import db
import random, string, datetime
from bson import ObjectId

router = APIRouter()

# Pydantic model
class Complaint(BaseModel):
    title: str
    description: str
    name: str = ""
    email: str = ""
    phone: str = ""
    location: str = ""
    latitude: float | None = None
    longitude: float | None = None


# Function to generate tracking ID
def generate_tracking_id():
    rand = ''.join(random.choices(string.ascii_uppercase + string.digits, k=6))
    return f"SMX-{rand}"


# Helper to serialize MongoDB documents
def serialize_doc(doc):
    doc["_id"] = str(doc["_id"])  # Convert ObjectId to string
    return doc


# POST → Submit Complaint
@router.post("/")
def create_complaint(complaint: Complaint):
    complaint_dict = complaint.dict()
    complaint_dict["tracking_id"] = generate_tracking_id()
    complaint_dict["status"] = "Open"
    complaint_dict["created_at"] = datetime.datetime.utcnow()

    result = db.complaints.insert_one(complaint_dict)

    # Fetch the inserted complaint
    new_complaint = db.complaints.find_one({"_id": result.inserted_id})
    return {"message": "Complaint submitted", "complaint": serialize_doc(new_complaint)}


# GET → Fetch All Complaints
@router.get("/")
def get_complaints():
    complaints = [serialize_doc(c) for c in db.complaints.find()]
    return {"complaints": complaints}


# GET → Fetch Complaint by Tracking ID
@router.get("/{tracking_id}")
def get_complaint_by_id(tracking_id: str):
    complaint = db.complaints.find_one({"tracking_id": tracking_id}, {"_id": 0})
    if not complaint:
        return {"message": "Complaint not found"}
    return complaint
