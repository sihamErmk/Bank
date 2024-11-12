import { Component } from '@angular/core';
import { ClientService } from '../../services/client.service';
import { Client } from '../../models/client';



@Component({
  selector: 'app-client-form',
  templateUrl: './client-form.component.html',
  styleUrls: ['./client-form.component.css']
})
export class ClientFormComponent {
  client: Client = new Client();

  constructor(private clientService: ClientService) {}

  onSubmit(): void {
    this.clientService.createClient( this.client).subscribe({
      next: (data) => {
        console.log('Client créé avec succès', data);
        this.client = new Client(); // Réinitialise le formulaire après l'ajout
      },
      error: (error) => {
        console.error("Erreur lors de la création du client", error);
      },
      complete: () => {
        console.log("Création du client terminée");
      }
    });
  }
}
