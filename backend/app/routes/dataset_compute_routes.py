# app/routes/dataset_compute_routes.py
from fastapi import APIRouter, HTTPException
from app.config import db
from bson import ObjectId

router = APIRouter(prefix="/datasets", tags=["Datasets"])

# Example permissible limits for groundwater metals (mg/L)
GROUNDWATER_STANDARDS = {
    "Pb (mg/L)": 0.01,
    "Cd (mg/L)": 0.003,
    "As (mg/L)": 0.01,
    "Cr (mg/L)": 0.05,
    "Hg (mg/L)": 0.001,
    "Ni (mg/L)": 0.02
}

# ---- HELPER FUNCTIONS ----
def compute_hei(row):
    """HEI = sum(Ci / Si)"""
    hei = 0
    for metal, Si in GROUNDWATER_STANDARDS.items():
        Ci = row.get(metal)
        if Ci is not None:
            hei += Ci / Si
    return round(hei, 2)

def compute_hpi(row):
    """HPI = sum(Wi*Qi)/sum(Wi), Wi = 1/Si, Qi = (Ci/Si)*100"""
    numerator, denominator = 0, 0
    for metal, Si in GROUNDWATER_STANDARDS.items():
        Ci = row.get(metal)
        if Ci is not None:
            Wi = 1 / Si
            Qi = (Ci / Si) * 100
            numerator += Wi * Qi
            denominator += Wi
    return round(numerator / denominator, 2) if denominator else 0

# ---- ROUTE ----
@router.post("/{dataset_id}/compute")
async def compute_indices(dataset_id: str):
    dataset = await db.datasets.find_one({"_id": ObjectId(dataset_id)})
    if not dataset:
        raise HTTPException(status_code=404, detail="Dataset not found")

    processed_data = []
    for row in dataset["data"]:
        # make sure numeric
        numeric_row = {k: float(v) if isinstance(v, (int, float, str)) and str(v).replace('.', '', 1).isdigit() else 0 
                       for k, v in row.items()}
        row["HEI"] = compute_hei(numeric_row)
        row["HPI"] = compute_hpi(numeric_row)
        processed_data.append(row)

    # Update dataset in DB
    await db.datasets.update_one(
        {"_id": ObjectId(dataset_id)},
        {"$set": {"data": processed_data, "columns": dataset["columns"] + ["HEI", "HPI"]}}
    )

    return {"message": "Computation done", "data": processed_data}
