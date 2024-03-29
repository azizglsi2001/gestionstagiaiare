from fastapi import APIRouter, HTTPException
from typing import List
from schemas import stagiaire



router = APIRouter()


stagiaires_db = []



class stagiaire():
    id: int
    nom: str
    prenom:str
    email:str 
    age: int
    filiere: str
    taches:str


public class stagiaire():
  stagiaire_id=stagiaire.id
  stagiaire_nom = stagiaire.nom
  stagiaire_prenom = stagiaire.prenom
  stagiaire_email = stagiaire.email
  stagiaire_age=stagiaire.age
  stagiaire_filiere=stagiaire.filiere
  stagiaire_taches=stagiaire.taches
  
  

 
 print ("id:"+stagiaire.id+"nom:"+ stagiaire.nom +"prenom:"+ stagiaire.prenom +"email:"+ stagiaire.email +"age:"+
          stagiaire.age +"filiere:"+ stagiaire.filiere +"taches:"+ stagiaire.taches)






@router.post("/stagiaire/")
def add_stagiaire(stagiaire: Stagiaire):
    stagiaires_db.append(stagiaire)
    return {"message": "Stagiaire créé avec succès"}

@router.get("/stagiaire/")
def get_stagiaires():
    return stagiaires_db

@router.delete("/stagiaire/{stagiaire_id}")
def delete_stagiaire(stagiaire_id: int):
    if stagiaire_id >= len(stagiaires_db) or stagiaire_id < 0:
        raise HTTPException(status_code=404, detail="Stagiaire non trouvé")
    
    stagiaires_db.pop(stagiaire_id)
    return {"message": f"Stagiaire {stagiaire_id} supprimé avec succès"}
