import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Client } from '../models/client';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  private baseUrl = 'http://localhost:8080/api/v1/clients';

  constructor(private http: HttpClient) {}

  // Méthode pour ajouter un nouveau client
  createClient(client: Client): Observable<Client> {
    return this.http.post<Client>(this.baseUrl, client);
  }

  // Obtenir la liste de tous les clients
  getClients(): Observable<Client[]> {
    return this.http.get<Client[]>(this.baseUrl);
  }
}
