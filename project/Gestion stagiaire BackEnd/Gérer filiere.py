

from fastapi import APIRouter , HTTPException
from schemas import Filiere
from typing import List


router = APIRouter()



filieres_db = [] 


class Filiere:
    id: int
    nom: str
    code: str
    responsable: str


public class filiere():
  filiere_id=filiere.id
  filiere_nom = filiere.nom
  filiere_code = filiere.code
  filiere_responsable = filiere.responsable

 
 print ("id:"+filiere.id+"nom:"+filiere.nom +"code:"+filiere.code+"responsable:"+filiere.responsable)







@router.post("/filiere/")
def add_filiere(filiere: Filiere):
    filieres_db.append(filiere)
    return {"message": "Filiere créée avec succès"}



@router.get("/filiere/")
def get_filieres():
    return filieres_db








@router.put("/filiere/{filiere_id}")
def update_filiere(filiere_id: int, filiere: Filiere):

    filiere_id = filiere.id
    filiere_nom = filiere.nom
    filiere_code = filiere.code
    filiere_responsable = filiere.responsable
    

    return {"message": f"Filiere {filiere.id} mise à jour avec succès"}






@router.delete("/filiere/{filiere_id}")
def delete_filiere(filiere_id: int):
    if filiere_id >= len(filieres_db) or filiere_id < 0:
        raise HTTPException(status_code=404, detail="Filiere non trouvée")
    
    filieres_db.pop(filiere_id)
    return {"message": f"Filiere {filiere_id} supprimée avec succès"}
