import { Component } from '@angular/core';
import { Utilisateur } from './utilisateur.model'; // Supposons que vous avez déjà un modèle Utilisateur défini

@Component({
  selector: 'app-gerer-utilisateurs',
  templateUrl: './gerer-utilisateurs.component.html',
  styleUrls: ['./gerer-utilisateurs.component.css']
})
export class GererUtilisateursComponent {
  utilisateurs: Utilisateur[] = [];
  nouvelUtilisateur: Utilisateur = { nom: '', prenom: '', email: '' };

  constructor() {}

  ajouterUtilisateur() {
    if (this.nouvelUtilisateur.nom.trim() !== '' && this.nouvelUtilisateur.prenom.trim() !== '' && this.nouvelUtilisateur.email.trim() !== '')     {
      this.nouvelUtilisateur.id = this.utilisateurs.length + 1;
      this.utilisateurs.push({ ...this.nouvelUtilisateur });
      this.nouvelUtilisateur.nom = '';
      this.nouvelUtilisateur.prenom = '';
      this.nouvelUtilisateur.email = '';
      this.nouvelUtilisateur.login = '';
      this.nouvelUtilisateur.role = '';
      this.nouvelUtilisateur.etat = '';
      this.nouvelUtilisateur.password = '';
    }
  }

  consulterUtilisateur(utilisateur: Utilisateur) {
    console.log('Détails de l\'utilisateur :', utilisateur);
  }

  modifierUtilisateur(utilisateur: Utilisateur) {
    const nouveauNom = prompt('Entrez le nouveau nom de l\'utilisateur :', utilisateur.nom);
    const nouveauPrenom = prompt('Entrez le nouveau prénom de l\'utilisateur :', utilisateur.prenom);
    const nouveauEmail = prompt('Entrez le nouveau email de l\'utilisateur :', utilisateur.email);
    if (nouveauNom !== null && nouveauPrenom !== null && nouveauNom.trim() !== '' && nouveauPrenom.trim() !== '' &&  nouveauEmail !== null && nouveauEmail.trim() !== ''          ) {
      utilisateur.nom = nouveauNom;
      utilisateur.prenom = nouveauPrenom;
      utilisateur.email = nouveauEmail;
      console.log('Modification de l\'utilisateur :', utilisateur);
    }
  }

  supprimerUtilisateur(utilisateur: Utilisateur) {
    const confirmation = confirm(`Voulez-vous vraiment supprimer l'utilisateur "${utilisateur.nom} ${utilisateur.prenom} ${utilisateur.email}" ?`);
    if (confirmation) {
      const index = this.utilisateurs.indexOf(utilisateur);
      if (index !== -1) {
        this.utilisateurs.splice(index, 1);
        console.log('Suppression de l\'utilisateur :', utilisateur);
      }
    }
  }

  annuler() {
    this.nouvelUtilisateur.nom = '';
    this.nouvelUtilisateur.prenom = '';
    this.nouvelUtilisateur.email = '';
  }
}
