export class Client {
    id_Client?: number; // Facultatif si l'ID est généré automatiquement
    nom!: string;
    prenom!: string;
    birthday!: Date; // Ajout du type Date pour la date d'anniversaire
    email! : string  // Type string et valeur par défaut null
    
    
        
   
}