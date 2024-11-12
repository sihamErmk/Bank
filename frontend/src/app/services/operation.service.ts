// src/app/services/operation.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Operation } from '../models/operation';

@Injectable({
  providedIn: 'root'
})
export class OperationService {
  private apiUrl = `http://localhost:8080/api/v1/operations`;

  constructor(private http: HttpClient) {}

  // Méthode pour effectuer un versement
  effectuerVersement(operation: Operation): Observable<void> {
    return this.http.post<void>(`${this.apiUrl}/versement`, operation);
  }

  // Méthode pour effectuer un retrait
  effectuerRetrait(operation: Operation): Observable<void> {
    return this.http.post<void>(`${this.apiUrl}/retrait`, operation);
  }

  // Méthode pour effectuer un virement
  effectuerVirement(operation: Operation): Observable<void> {
    return this.http.post<void>(`${this.apiUrl}/virement`, operation);
  }

  // Méthode pour obtenir l'historique des opérations par numéro de compte
  getOperationsByAccountNumber(accountNumber: string): Observable<Operation[]> {
    return this.http.get<Operation[]>(`${this.apiUrl}/client/${accountNumber}`);
}

}
