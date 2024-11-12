import { Component, OnInit } from '@angular/core';
import { EmployeService } from '../../services/employe.service';
import { Employe } from '../../models/employe';


@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.css'
})
export class EmployeeListComponent implements OnInit {
  employees: Employe[] = [];

  constructor(private employeService: EmployeService) { }

  ngOnInit(): void {
    this.getEmployees();
  }

  getEmployees(): void {
    this.employeService.getAllEmployees().subscribe({
      next: (data) => {
        this.employees = data;
      },
      error: (error) => {
        console.error('Erreur lors de la récupération des employés', error);
      },
      complete: () => {
        console.log('Récupération des employés terminée');
      }
    });
  }
  
}