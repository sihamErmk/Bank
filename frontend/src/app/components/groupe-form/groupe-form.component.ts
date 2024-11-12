import { Component } from '@angular/core';
import { Groupe } from '../../models/groupe';
import { GroupeService } from '../../services/groupe.service';

@Component({
  selector: 'app-groupe-form',
  templateUrl: './groupe-form.component.html',
  styleUrl: './groupe-form.component.css'
})
export class GroupFormComponent {
  groupe: Groupe = new Groupe();

  constructor(private groupeService: GroupeService) {}

  onSubmit(): void {
    this.groupeService.createGroupe(this.groupe).subscribe({
      next: (data) => {
        console.log('Groupe créé avec succès', data);
        this.groupe = new Groupe(); // Réinitialise le formulaire
      },
      error: (error) => {
        console.error('Erreur lors de la création du groupe', error);
      },
      complete: () => {
        console.log('Création du groupe terminée');
      }
    });
  }
}