// src/app/models/operation.ts
export class Operation {
  id?: number;
  numOperation!: number;
  dateOperation!: Date;
  montant!: number;
  typeOperation!: string;
  accountNumber!: string;
  accountNumberDest?: string;  // Utilisé uniquement pour les virements

  constructor(
    numOperation: number = 0,
    dateOperation: Date = new Date(),
    montant: number = 0,
    typeOperation: string = '',
    accountNumber: string = '',
    accountNumberDest?: string
  ) {
    this.numOperation = numOperation;
    this.dateOperation = dateOperation;
    this.montant = montant;
    this.typeOperation = typeOperation;
    this.accountNumber = accountNumber;
    this.accountNumberDest = accountNumberDest;
  }
}
