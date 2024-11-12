import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Groupe } from '../models/groupe';

@Injectable({
  providedIn: 'root'
})
export class GroupeService {
  private baseUrl = 'http://localhost:8080/api/v1/groupes'; // URL de l'API

  constructor(private http: HttpClient) {}

  getAllGroupes(): Observable<Groupe[]> {
    return this.http.get<Groupe[]>(`${this.baseUrl}`);
  }

  getGroupeById(id: number): Observable<Groupe> {
    return this.http.get<Groupe>(`${this.baseUrl}/${id}`);
  }

  createGroupe(groupe: Groupe): Observable<Groupe> {
    return this.http.post<Groupe>(`${this.baseUrl}`, groupe);
  }

  deleteGroupe(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }

  addEmployeToGroupe(groupId: number, employeId: number): Observable<Groupe> {
    return this.http.put<Groupe>(`${this.baseUrl}/${groupId}/employes/${employeId}`, {});
  }
  deleteEmployeFromGroupe(groupId: number, employeId: number): Observable<Groupe> {
    return this.http.delete<Groupe>(`${this.baseUrl}/${groupId}/employes/${employeId}`);
  }
}
