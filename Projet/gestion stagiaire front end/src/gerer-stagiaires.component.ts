import { Component, OnInit } from '@angular/core';
import { Stagiaire } from './stagiaire.model'; 

@Component({
  selector: 'app-gerer-stagiaires',
  templateUrl: './gerer-stagiaires.component.html',
  styleUrls: ['./gerer-stagiaires.component.css']
})
export class GererStagiairesComponent implements OnInit {
  stagiaires: Stagiaire[] = [];
  nouveauStagiaire: Stagiaire = { nom: '', prenom: '',email:'' };

  constructor() { }

  ngOnInit(): void {

    this.stagiaires = [
      { id: 2001, nom: 'Ben Abdallah', prenom: 'Aziz',email:'azizglsi2001@gmail.com',age:22,filiere:'informatique',taches:'création des nouveaux logos des sociétés'  },
      { id:2000 , nom: 'Ben Slimen', prenom: 'Firas',email:'firasnowork2000@gmail.com',age:23,filiere:'statistiques',taches:'éditer les facteurs de   la criossance et la décroissance des gains des sociétés '  },
      { id: 1996, nom: 'Nasr', prenom: 'Ramzi',email:'ramzicommerce@gmail.com',age:28,filiere:'commerce',taches:'amélioration du coté marketing des sociétés'  },
      { id: 2003, nom: 'Ben Kacem', prenom: 'Manar',email:'manarglsi2003@gmail.com',age:20,filiere:'informatique',taches:'création des sites web'  },
      { id: 2004, nom: 'Badry', prenom: 'Rouaa',email:'rouaabadri2004@gmail.com',age:22,filiere:'informatique',taches:'tester les erreurs de compilation'  },
      { id: 2002, nom: 'Belarbi', prenom: 'Rayen',email:'rayenbelarbi@gmail.com',age:22,filiere:'economie',taches:'Aucune tache'  },


    ];
  }

  ajouterStagiaire() {
    if (this.nouveauStagiaire.nom.trim() !== '' && this.nouveauStagiaire.prenom.trim() !== ''  && this.nouveauStagiaire.email.trim() !== '') {
      this.nouveauStagiaire.id = this.stagiaires.length + 1;
      this.stagiaires.push({ ...this.nouveauStagiaire });
      this.nouveauStagiaire.nom = '';
      this.nouveauStagiaire.prenom = '';
      this.nouveauStagiaire.age ='';
      this.nouveauStagiaire.filiere ='';
      this.nouveauStagiaire.taches ='';
      
    }
  }

  consulterStagiaire(stagiaire: Stagiaire) {
    
    console.log(  'Détails du stagiaire :', stagiaire);
  }

  modifierStagiaire(stagiaire: Stagiaire) {
    const nouveauNom = prompt('Entrez le nouveau nom du stagiaire :', stagiaire.nom);
    const nouveauPrenom = prompt('Entrez le nouveau prénom du stagiaire :', stagiaire.prenom);
    const nouveauEmail = prompt('Entrez le nouveau email du stagiaire :', stagiaire.email);
    if (nouveauNom !== null && nouveauPrenom !== null && nouveauEmail !=null && nouveauNom.trim() !== '' && nouveauPrenom.trim() !== '' 
    && nouveauEmail.trim() !== '') {
      stagiaire.nom = nouveauNom;
      stagiaire.prenom = nouveauPrenom;
      stagiaire.email =nouveauEmail;
      console.log('Modification du stagiaire :', stagiaire);
    }
  }

  supprimerStagiaire(stagiaire: Stagiaire) {
    const confirmation = confirm(`Voulez-vous vraiment supprimer le stagiaire "${stagiaire.nom} ${stagiaire.prenom} ${stagiaire.email}" ?`);
    if (confirmation) {
      const index = this.stagiaires.indexOf(stagiaire);
      if (index !== -1) {
        this.stagiaires.splice(index, 1);
        console.log('Suppression du stagiaire :', stagiaire);
      }
    }
  }

  annuler() {
    this.nouveauStagiaire.nom = '';
    this.nouveauStagiaire.prenom = '';
    this.nouveauStagiaire.email = '';
  }
}
