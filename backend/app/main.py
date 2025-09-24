# from fastapi import FastAPI
# from app.routes import user_routes, official_routes, dataset_routes

# app = FastAPI(title="SIH25 Backend")

# # include routers
# app.include_router(user_routes.router, prefix="/api", tags=["Users"])
# app.include_router(official_routes.router, prefix="/api", tags=["Officials"])
# app.include_router(dataset_routes.router, prefix="/api", tags=["Datasets"])



# app/main.py
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.routes import user_routes, official_routes, dataset_routes
from app.routes import dataset_compute_routes 
from app.routes import dataset_stats
app = FastAPI(title="SIH25 Prototype API")

# === CORS Middleware ===
origins = [
    "http://localhost:5173",  # your Vite frontend
    "http://127.0.0.1:5173",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,          # allow requests from this frontend
    allow_credentials=True,         # allow cookies, auth headers
    allow_methods=["*"],            # allow all HTTP methods (GET, POST, etc.)
    allow_headers=["*"],            # allow all headers
)

# === Include routers ===
app.include_router(user_routes.router)
app.include_router(official_routes.router)
app.include_router(dataset_routes.router)
app.include_router(dataset_compute_routes.router) 
app.include_router(dataset_stats.router)

@app.get("/ping")
async def ping():
    return {"status": "ok", "message": "MongoDB + Clerk integration working"}