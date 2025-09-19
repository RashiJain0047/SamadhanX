from pymongo import MongoClient
from dotenv import load_dotenv
import os
import certifi

# Load environment variables
load_dotenv()

# Get MongoDB connection string and DB name from .env
MONGO_URI = os.getenv("MONGO_URI")
MONGO_DB = os.getenv("MONGO_DB")

# Connect to MongoDB with SSL certificate
client = MongoClient(MONGO_URI, tlsCAFile=certifi.where())
db = client[MONGO_DB]
