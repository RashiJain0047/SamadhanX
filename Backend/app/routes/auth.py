# from fastapi import APIRouter

# router = APIRouter()

# @router.post("/login")
# def login(username: str, password: str):
#     # Dummy login for now
#     if username == "admin" and password == "admin":
#         return {"message": "Login successful"}
#     return {"message": "Invalid credentials"}

from fastapi import APIRouter, HTTPException
from pydantic import BaseModel, EmailStr
from passlib.context import CryptContext
from app.database import db

router = APIRouter()
pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")

# ---------------- REGISTER ----------------
class RegisterUser(BaseModel):
    name: str
    email: EmailStr
    password: str
    confirm_password: str

@router.post("/register")
def register_user(user: RegisterUser):
    if user.password != user.confirm_password:
        raise HTTPException(status_code=400, detail="Passwords do not match")

    if db.users.find_one({"email": user.email}):
        raise HTTPException(status_code=400, detail="Email already registered")

    hashed_pw = pwd_context.hash(user.password)
    new_user = {"name": user.name, "email": user.email, "password": hashed_pw}
    db.users.insert_one(new_user)

    return {"message": "User registered successfully!"}


# ---------------- LOGIN ----------------
class LoginUser(BaseModel):
    email: EmailStr
    password: str

@router.post("/login")
def login_user(user: LoginUser):
    # Check if user exists
    db_user = db.users.find_one({"email": user.email})
    if not db_user:
        raise HTTPException(status_code=401, detail="Incorrect username or password")

    # Verify password
    if not pwd_context.verify(user.password, db_user["password"]):
        raise HTTPException(status_code=401, detail="Incorrect username or password")

    # If correct → return basic user info (hide password!)
    return {
        "message": "Login successful!",
        "user": {
            "name": db_user["name"],
            "email": db_user["email"]
        }
    }