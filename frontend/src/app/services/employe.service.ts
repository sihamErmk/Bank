import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employe } from '../models/employe';

@Injectable({
  providedIn: 'root'
})
export class EmployeService {
  private apiUrl = 'http://localhost:8080/api/v1/employees';

  constructor(private http: HttpClient) { }

  // Récupérer tous les employés
  getAllEmployees(): Observable<Employe[]> {
    return this.http.get<Employe[]>(this.apiUrl);
  }

  // Créer un nouvel employé
  createEmploye(employe: Employe): Observable<Employe> {
    return this.http.post<Employe>(this.apiUrl, employe);
  }
}