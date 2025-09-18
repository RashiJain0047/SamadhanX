from fastapi import FastAPI
from app.routes import auth, complaints, ai

app = FastAPI(title="SamadhanX Backend")

# Routers
app.include_router(auth.router, prefix="/auth", tags=["Auth"])
app.include_router(complaints.router, prefix="/complaints", tags=["Complaints"])
app.include_router(ai.router, prefix="/ai", tags=["AI"])

@app.get("/")
def root():
    return {"message": "SamadhanX Backend is running 🚀"}
