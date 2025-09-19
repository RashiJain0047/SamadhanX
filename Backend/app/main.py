# # from fastapi import FastAPI
# # from fastapi.middleware.cors import CORSMiddleware
# # from app.routes import auth, complaints, ai

# # # 1️⃣ Create FastAPI app first
# # app = FastAPI(title="SamadhanX Backend")

# # # 2️⃣ Add CORS middleware
# # app.add_middleware(
# #     CORSMiddleware,
# #     allow_origins=["*"],  # or ["http://localhost:3000"] for your React frontend
# #     allow_credentials=True,
# #     allow_methods=["*"],
# #     allow_headers=["*"],
# # )

# # # 3️⃣ Include routers
# # app.include_router(auth.router, prefix="/auth", tags=["Auth"])
# # app.include_router(complaints.router, prefix="/complaints", tags=["Complaints"])
# # app.include_router(ai.router, prefix="/ai", tags=["AI"])

# # # 4️⃣ Root endpoint
# # @app.get("/")
# # def root():
# #     return {"message": "SamadhanX Backend is running 🚀"}

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.routes import auth, complaints, ai

# ⿡ Create FastAPI app first
app = FastAPI(title="SamadhanX Backend")

# ⿢ Add CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # or ["http://localhost:3000"] for your React frontend
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# ⿣ Include routers
app.include_router(auth.router, prefix="/auth", tags=["Auth"])
app.include_router(complaints.router, prefix="/complaints", tags=["Complaints"])
app.include_router(ai.router, prefix="/ai", tags=["AI"])

# ⿤ Root endpoint
@app.get("/")
def root():
    return {"message": "SamadhanX Backend is running 🚀"}




