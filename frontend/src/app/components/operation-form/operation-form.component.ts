import { Component } from '@angular/core';
import { Operation } from '../../models/operation';
import { OperationService } from '../../services/operation.service';

@Component({
  selector: 'app-operation-form',
  templateUrl: './operation-form.component.html',
  styleUrl: './operation-form.component.css'
})
export class OperationFormComponent {
  operation: Operation = new Operation();
  operationType: string = 'versement';

  constructor(private operationService: OperationService) {}

  onSubmit(): void {
    if (this.operationType === 'versement') {
      this.operationService.effectuerVersement(this.operation).subscribe({
        next: () => console.log('Versement effectué'),
        error: (error) => console.error("Erreur lors du versement", error)
      });
    } else if (this.operationType === 'retrait') {
      this.operationService.effectuerRetrait(this.operation).subscribe({
        next: () => console.log('Retrait effectué'),
        error: (error) => console.error("Erreur lors du retrait", error)
      });
    } else if (this.operationType === 'virement') {
      this.operationService.effectuerVirement(this.operation).subscribe({
        next: () => console.log('Virement effectué'),
        error: (error) => console.error("Erreur lors du virement", error)
      });
    }
  }
}
