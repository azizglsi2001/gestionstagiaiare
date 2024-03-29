# routers/utilisateur.py
from fastapi import APIRouter, HTTPException

from typing import List

router = APIRouter()


utilisateurs_db = []

class Utilisateur():
    id:str
    login:str
    nomprenom : str
    email: str
    role: str
    etat: str
    pwd:str







public class utilisateur():
  utilisateur_id=utilisateur.id
  utilisateur_login = utilisateur.login
  utilisateur_nomprenom = utilisateur.nomprenom
  utilisateur_email = utilisateur.email
  utilisateur_role=utilisateur.role
  utilisateur_etat=utilisateur.etat
  utilisateur_pwd=utilisateur.pwd





print ("id:"+utilisateur.id+"nom:"+ utilisateur.login +"nom et prenom:"+ utilisateur.nomprenom +"email:"+ utilisateur.email +"role:"+
          utilisateur.role +"etat:"+ utilisateur.etat +"password:"+ utilisateur.pwd)









@router.post("/utilisateur/")
def add_utilisateur(utilisateur: Utilisateur):
    utilisateurs_db.append(utilisateur)
    return {"message": "Utilisateur créé avec succès"}

@router.get("/utilisateur/")
def get_utilisateurs():
    return utilisateurs_db

@router.delete("/utilisateur/{utilisateur_id}")
def delete_utilisateur(utilisateur_id: int):
    if utilisateur_id >= len(utilisateurs_db) or utilisateur_id < 0:
        raise HTTPException(status_code=404, detail="Utilisateur non trouvé")
    
    utilisateurs_db.pop(utilisateur_id)
    return {"message": f"Utilisateur {utilisateur_id} supprimé avec succès"}
