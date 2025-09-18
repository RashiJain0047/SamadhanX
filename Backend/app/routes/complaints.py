from fastapi import APIRouter

router = APIRouter()

# Dummy in-memory storage
complaints = []

@router.get("/")
def get_complaints():
    return {"complaints": complaints}

@router.post("/")
def create_complaint(title: str, description: str):
    complaint = {"title": title, "description": description}
    complaints.append(complaint)
    return {"message": "Complaint created successfully", "complaint": complaint}
