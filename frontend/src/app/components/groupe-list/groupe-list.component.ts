import { Component, OnInit } from '@angular/core';
import { Groupe } from '../../models/groupe';
import { GroupeService } from '../../services/groupe.service';

@Component({
  selector: 'app-groupe-list',
  templateUrl: './groupe-list.component.html',
  styleUrls: ['./groupe-list.component.css']
})
export class GroupListComponent implements OnInit {
  groupes: Groupe[] = [];
  employeId: number | null = null;

  constructor(private groupeService: GroupeService) {}

  ngOnInit(): void {
    // Fetch the list of groupes when the component is initialized
    this.groupeService.getAllGroupes().subscribe(data => {
      this.groupes = data;
    });
  }

  onAddEmployeToGroupe(groupId: number, employeId: number | null): void {
    if (employeId === null) {
      console.error('L\'ID de l\'employé est requis.');
      return;
    }

    // Add employee to the group
    this.groupeService.addEmployeToGroupe(groupId, employeId).subscribe({
      next: (updatedGroupe) => {
        console.log('Employé ajouté au groupe', updatedGroupe);
        // Fetch updated group data after adding the employee
        this.groupeService.getAllGroupes().subscribe(data => {
          this.groupes = data;
        });
      },
      error: (err) => console.error('Erreur lors de l\'ajout de l\'employé au groupe', err)
    });
  }
  // Method to delete employee from the group
  onDeleteEmployeFromGroupe(groupId: number, employeId: number): void {
    this.groupeService.deleteEmployeFromGroupe(groupId, employeId).subscribe({
      next: (updatedGroupe) => {
        console.log('Employé supprimé du groupe', updatedGroupe);
        // You may want to refresh the groupes list or update the UI
        this.ngOnInit();
      },
      error: (err) => console.error('Erreur lors de la suppression de l\'employé', err)
    });
  }

  deleteGroupe(id: number): void {
    this.groupeService.deleteGroupe(id).subscribe(() => {
      this.groupes = this.groupes.filter(groupe => groupe.id !== id);
    });
  }
}
