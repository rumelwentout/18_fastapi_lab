from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from routes.user import user_router
from config.db import MONGODB_URI, conn

app = FastAPI(title="FastAPI Auth Integration with React", version="1.0")

allowed_origins = [
    "http://localhost:3000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=allowed_origins,
    allow_credentials=True,
    allow_methods=["GET", "POST", "PUT", "DELETE"],  
    allow_headers=["X-Requested-With", "Content-Type", "Authorization"],
)

def create_indexes():
    db_name = MONGODB_URI.rsplit('/', 1)[-1].split('?')[0]
    db = conn[db_name]
    db.user.create_index("username", unique=True)
    db.user.create_index("email", unique=True)
    db.user.create_index("phoneNumber", unique=True)

create_indexes()

app.include_router(user_router, prefix="/user/auth/register")
