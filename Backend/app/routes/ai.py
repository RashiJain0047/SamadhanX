# from fastapi import APIRouter

# router = APIRouter()

# @router.get("/predict")
# def predict_issue(text: str):
#     # Dummy AI response
#     return {"prediction": f"AI thinks your issue is about '{text}'"}

from fastapi import APIRouter

router = APIRouter()

@router.get("/predict")
def predict_issue(text: str):
    # Dummy AI response
    return {"prediction": f"AI thinks your issue is about '{text}'"}
