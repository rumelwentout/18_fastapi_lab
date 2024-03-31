from pymongo import MongoClient
from dotenv import load_dotenv
import os


load_dotenv()

MONGODB_URI = os.getenv("MONGODB_URI")

conn = MongoClient(MONGODB_URI)


