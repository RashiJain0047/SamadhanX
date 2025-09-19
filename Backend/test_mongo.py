from pymongo import MongoClient
import certifi
import os
from dotenv import load_dotenv

# Load environment variables
load_dotenv()

# Get MongoDB connection string and DB name
uri = os.getenv("MONGO_URI")
db_name = os.getenv("MONGO_DB")

print("🔗 Using URI:", uri)
print("📂 Target Database:", db_name)

# Connect to MongoDB
client = MongoClient(uri, tlsCAFile=certifi.where())
db = client[db_name]

# Test insert
collection = db["test_collection"]
collection.insert_one({"test": "Hello MongoDB"})

# Fetch data back
for doc in collection.find():
    print("✅ Found document:", doc)
