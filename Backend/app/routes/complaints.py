# # from fastapi import APIRouter
# # from pydantic import BaseModel
# # from app.database import db
# # import random, string, datetime

# # router = APIRouter()

# # # Pydantic model
# # class Complaint(BaseModel):
# #     title: str
# #     description: str
# #     name: str = ""
# #     email: str = ""
# #     phone: str = ""
# #     location: str = ""
# #     latitude: float | None = None
# #     longitude: float | None = None

# # # Function to generate tracking ID
# # def generate_tracking_id():
# #     rand = ''.join(random.choices(string.ascii_uppercase + string.digits, k=6))
# #     return f"SMX-{rand}"

# # # POST → Submit Complaint
# # @router.post("/")
# # def create_complaint(complaint: Complaint):
# #     complaint_dict = complaint.dict()
# #     complaint_dict["tracking_id"] = generate_tracking_id()
# #     complaint_dict["status"] = "Open"
# #     complaint_dict["created_at"] = datetime.datetime.utcnow()

# #     db.complaints.insert_one(complaint_dict)
# #     return {"message": "Complaint submitted", "complaint": complaint_dict}

# # # GET → Fetch All Complaints
# # @router.get("/")
# # def get_complaints():
# #     complaints = list(db.complaints.find({}, {"_id": 0}))  # hide _id
# #     return {"complaints": complaints}

# # # GET → Fetch Complaint by Tracking ID
# # @router.get("/{tracking_id}")
# # def get_complaint_by_id(tracking_id: str):
# #     complaint = db.complaints.find_one({"tracking_id": tracking_id}, {"_id": 0})
# #     if not complaint:
# #         return {"message": "Complaint not found"}
# #     return complaint
# from fastapi import APIRouter, UploadFile, File, Form
# from app.database import db
# import random, string, datetime

# router = APIRouter()

# # Function to generate tracking ID
# def generate_tracking_id():
#     rand = ''.join(random.choices(string.ascii_uppercase + string.digits, k=6))
#     return f"SMX-{rand}"

# # Helper to serialize MongoDB documents
# def serialize_doc(doc):
#     doc["_id"] = str(doc["_id"])  # Convert ObjectId to string
#     return doc

# # POST → Submit Complaint with optional file
# @router.post("/")
# async def create_complaint(
#     title: str = Form(...),
#     description: str = Form(...),
#     name: str = Form(""),
#     email: str = Form(""),
#     phone: str = Form(""),
#     location: str = Form(""),
#     latitude: float = Form(0),
#     longitude: float = Form(0),
#     file: UploadFile | None = File(None)
# ):
#     complaint_dict = {
#         "title": title,
#         "description": description,
#         "name": name,
#         "email": email,
#         "phone": phone,
#         "location": location,
#         "latitude": latitude,
#         "longitude": longitude,
#         "tracking_id": generate_tracking_id(),
#         "status": "Open",
#         "created_at": datetime.datetime.utcnow(),
#     }

#     if file:
#         # Store file info (later you can save file to disk or cloud)
#         complaint_dict["file_name"] = file.filename
#         complaint_dict["file_content_type"] = file.content_type

#     result = db.complaints.insert_one(complaint_dict)
#     new_complaint = db.complaints.find_one({"_id": result.inserted_id})
#     return {"message": "Complaint submitted", "complaint": serialize_doc(new_complaint)}

# # GET → Fetch All Complaints
# @router.get("/")
# def get_complaints():
#     complaints = [serialize_doc(c) for c in db.complaints.find()]
#     return {"complaints": complaints}

# # GET → Fetch Complaint by Tracking ID
# @router.get("/{tracking_id}")
# def get_complaint_by_id(tracking_id: str):
#     complaint = db.complaints.find_one({"tracking_id": tracking_id}, {"_id": 0})
#     if not complaint:
#         return {"message": "Complaint not found"}
#     return complaint

# # from fastapi import APIRouter
# # from pydantic import BaseModel
# # from app.database import db
# # import random, string, datetime

# # router = APIRouter()

# # # Pydantic model
# # class Complaint(BaseModel):
# #     title: str
# #     description: str
# #     name: str = ""
# #     email: str = ""
# #     phone: str = ""
# #     location: str = ""
# #     latitude: float | None = None
# #     longitude: float | None = None

# # # Function to generate tracking ID
# # def generate_tracking_id():
# #     rand = ''.join(random.choices(string.ascii_uppercase + string.digits, k=6))
# #     return f"SMX-{rand}"

# # # POST → Submit Complaint
# # @router.post("/")
# # def create_complaint(complaint: Complaint):
# #     complaint_dict = complaint.dict()
# #     complaint_dict["tracking_id"] = generate_tracking_id()
# #     complaint_dict["status"] = "Open"
# #     complaint_dict["created_at"] = datetime.datetime.utcnow()

# #     db.complaints.insert_one(complaint_dict)
# #     return {"message": "Complaint submitted", "complaint": complaint_dict}

# # # GET → Fetch All Complaints
# # @router.get("/")
# # def get_complaints():
# #     complaints = list(db.complaints.find({}, {"_id": 0}))  # hide _id
# #     return {"complaints": complaints}

# # # GET → Fetch Complaint by Tracking ID
# # @router.get("/{tracking_id}")
# # def get_complaint_by_id(tracking_id: str):
# #     complaint = db.complaints.find_one({"tracking_id": tracking_id}, {"_id": 0})
# #     if not complaint:
# #         return {"message": "Complaint not found"}
# #     return complaint
# # from fastapi import APIRouter
# # from pydantic import BaseModel
# # from app.database import db
# # import random, string, datetime
# # from bson import ObjectId

# # router = APIRouter()

# # # Pydantic model
# # class Complaint(BaseModel):
# #     title: str
# #     description: str
# #     name: str = ""
# #     email: str = ""
# #     phone: str = ""
# #     location: str = ""
# #     latitude: float | None = None
# #     longitude: float | None = None


# # # Function to generate tracking ID
# # def generate_tracking_id():
# #     rand = ''.join(random.choices(string.ascii_uppercase + string.digits, k=6))
# #     return f"SMX-{rand}"


# # # Helper to serialize MongoDB documents
# # def serialize_doc(doc):
# #     doc["_id"] = str(doc["_id"])  # Convert ObjectId to string
# #     return doc


# # # POST → Submit Complaint
# # @router.post("/")
# # def create_complaint(complaint: Complaint):
# #     complaint_dict = complaint.dict()
# #     complaint_dict["tracking_id"] = generate_tracking_id()
# #     complaint_dict["status"] = "Open"
# #     complaint_dict["created_at"] = datetime.datetime.utcnow()

# #     result = db.complaints.insert_one(complaint_dict)

# #     # Fetch the inserted complaint
# #     new_complaint = db.complaints.find_one({"_id": result.inserted_id})
# #     return {"message": "Complaint submitted", "complaint": serialize_doc(new_complaint)}


# # # GET → Fetch All Complaints
# # @router.get("/")
# # def get_complaints():
# #     complaints = [serialize_doc(c) for c in db.complaints.find()]
# #     return {"complaints": complaints}


# # # GET → Fetch Complaint by Tracking ID
# # @router.get("/{tracking_id}")
# # def get_complaint_by_id(tracking_id: str):
# #     complaint = db.complaints.find_one({"tracking_id": tracking_id}, {"_id": 0})
# #     if not complaint:
# #         return {"message": "Complaint not found"}
# #     return complaint

# from fastapi import APIRouter, HTTPException
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

#     result = db.complaints.insert_one(complaint_dict)

#     if not result.inserted_id:
#         raise HTTPException(status_code=500, detail="Failed to save complaint")

#     # Return only necessary fields for frontend
#     return {
#         "message": "Complaint submitted successfully",
#         "tracking_id": complaint_dict["tracking_id"],
#         "status": complaint_dict["status"],
#         "created_at": complaint_dict["created_at"]
#     }


# # GET → Fetch All Complaints
# @router.get("/")
# def get_complaints():
#     complaints = list(db.complaints.find({}, {"_id": 0}))  # hide MongoDB _id
#     return {"complaints": complaints}


# # GET → Fetch Complaint by Tracking ID
# @router.get("/{tracking_id}")
# def get_complaint_by_id(tracking_id: str):
#     complaint = db.complaints.find_one({"tracking_id": tracking_id}, {"_id": 0})
#     if not complaint:
#         raise HTTPException(status_code=404, detail="Complaint not found")
#     return complaint
from fastapi import APIRouter, HTTPException
from models.complaint import Complaint
from config.database import db
from bson import ObjectId
import datetime
import random
import string
import requests  # 🔹 Added for Flask AI call

router = APIRouter()

# Generate tracking ID
def generate_tracking_id():
    return ''.join(random.choices(string.ascii_uppercase + string.digits, k=8))

# ✅ Create complaint
@router.post("/")
def create_complaint(complaint: Complaint):
    complaint_dict = complaint.dict()
    complaint_dict["tracking_id"] = generate_tracking_id()
    complaint_dict["status"] = "Open"
    complaint_dict["created_at"] = datetime.datetime.utcnow()

    # 🔹 Call Flask AI for classification
    try:
        ai_response = requests.post(
            "http://localhost:5000/classify-text",
            json={"text": complaint.description}
        )
        if ai_response.status_code == 200:
            ai_result = ai_response.json()
            complaint_dict["predicted_label"] = ai_result.get("predicted_label")
            complaint_dict["priority"] = ai_result.get("priority")
            complaint_dict["confidence"] = ai_result.get("confidence")
        else:
            complaint_dict["predicted_label"] = None
            complaint_dict["priority"] = "Unknown"
            complaint_dict["confidence"] = 0.0
    except Exception as e:
        complaint_dict["predicted_label"] = None
        complaint_dict["priority"] = "Unknown"
        complaint_dict["confidence"] = 0.0
        print("⚠ Flask AI error:", e)

    # Save to MongoDB
    result = db.complaints.insert_one(complaint_dict)

    if not result.inserted_id:
        raise HTTPException(status_code=500, detail="Failed to save complaint")

    return {
        "message": "Complaint submitted successfully",
        "tracking_id": complaint_dict["tracking_id"],
        "status": complaint_dict["status"],
        "predicted_label": complaint_dict["predicted_label"],
        "priority": complaint_dict["priority"],
        "confidence": complaint_dict["confidence"],
        "created_at": complaint_dict["created_at"]
    }

# ✅ Get all complaints
@router.get("/")
def get_complaints():
    complaints = list(db.complaints.find())
    for complaint in complaints:
        complaint["_id"] = str(complaint["_id"])
    return complaints

# ✅ Get complaint by ID
@router.get("/{complaint_id}")
def get_complaint_by_id(complaint_id: str):
    complaint = db.complaints.find_one({"_id": ObjectId(complaint_id)})
    if not complaint:
        raise HTTPException(status_code=404, detail="Complaint not found")
    complaint["_id"] = str(complaint["_id"])
    return complaint