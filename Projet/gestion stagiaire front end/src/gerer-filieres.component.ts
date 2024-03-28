import { Component, OnInit } from '@angular/core';
import { Filiere } from './filiere.model';

@Component({
  selector: 'app-gerer-filieres',
  templateUrl: './gerer-filieres.component.html',
  styleUrls: ['./gerer-filieres.component.css'],
})
export class GererFilieresComponent implements OnInit {
  filieres: Filiere[] = [];
  nouvelleFiliere: string = '';

  constructor() {}

  ngOnInit(): void {
    this.filieres = [
      { id: 1, nom: 'Informatique' },
      { id: 2, nom: 'Chimie' },
      { id: 3, nom: 'Electrique' },
      { id: 4, nom: 'Statistiques' },
      { id: 5, nom: 'Chimie' },
      { id: 6, nom: 'Mecanique' },
    ];
  }

  ajouterFiliere() {
    if (this.nouvelleFiliere.trim() !== '') {
      const nouvelleFiliere: Filiere = {
        id: this.filieres.length + 1,
        nom: this.nouvelleFiliere,
      };
      this.filieres.push(nouvelleFiliere);
      this.nouvelleFiliere = '';
    }
  }

  consulterFiliere(filiere: Filiere) {
    console.log('Détails de la filière :', filiere);
  }

  modifierFiliere(filiere: Filiere) {
    const nouveauNom = prompt(
      'Entrez le nouveau nom de la filière :',
      filiere.nom
    );
    if (nouveauNom !== null && nouveauNom.trim() !== '') {
      filiere.nom = nouveauNom;
      console.log('Modification de la filière :', filiere);
    }
  }

  supprimerFiliere(filiere: Filiere) {
    const confirmation = confirm(
      `Voulez-vous vraiment supprimer la filière "${filiere.nom}" ?`
    );
    if (confirmation) {
      const index = this.filieres.indexOf(filiere);
      if (index !== -1) {
        this.filieres.splice(index, 1);
        console.log('Suppression de la filière :', filiere);
      }
    }
  }

  annuler() {
    this.nouvelleFiliere = '';
  }
}
