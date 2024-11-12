import { Component } from '@angular/core';
import { EmployeService } from '../../services/employe.service';
import { Employe } from '../../models/employe';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrl: './employee-form.component.css'
})
export class EmployeeFormComponent {
  employe: Employe = new Employe();

  constructor(private employeService: EmployeService) { }

  onSubmit(): void {
    this.employeService.createEmploye(this.employe).subscribe({
      next: (data) => {
        console.log('Employé créé avec succès', data);
        this.employe = new Employe(); // Réinitialise le formulaire après l'ajout
      },
      error: (error) => {
        console.error('Erreur lors de la création de l\'employé', error);
      },
      complete: () => {
        console.log('Création de l\'employé terminée');
      }
    });
  }
  
}
