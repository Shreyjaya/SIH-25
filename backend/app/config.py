import motor.motor_asyncio
import os
from dotenv import load_dotenv

load_dotenv()  # loads variables from .env if exists

MONGO_URI = os.getenv("MONGO_URI")  # must match key in .env
if not MONGO_URI:
    raise ValueError("❌ MONGO_URI not found in .env file")

client = motor.motor_asyncio.AsyncIOMotorClient(MONGO_URI)

db = client["sih25_db"]   # database name
