import { Component, OnInit } from '@angular/core';
import { Operation } from '../../models/operation';
import { OperationService } from '../../services/operation.service';

@Component({
  selector: 'app-operation-history',
  templateUrl: './operation-history.component.html',
  styleUrl: './operation-history.component.css'
})
export class OperationHistoryComponent implements OnInit {
  operations: Operation[] = [];
  accountNumber: string = '';

  constructor(private operationService: OperationService) {}

  ngOnInit(): void {}

  // Méthode pour récupérer les opérations d'un compte
  getOperations(): void {
    this.operationService.getOperationsByAccountNumber(this.accountNumber).subscribe({
      next: (data) => {
        this.operations = data;
      },
      error: (error) => {
        console.error("Erreur lors de la récupération des opérations", error);
      }
    });
  }
}
