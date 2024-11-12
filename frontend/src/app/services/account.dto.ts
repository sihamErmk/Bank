import { Client } from "../models/client";

// src/app/models/account.dto.ts
export interface AccountDto {
 // account.dto.ts
// Ensure you have a Client model for type reference

  balance: number;
  id_Client: number;  // Make sure this maps to the client ID
  decouvert: number;
  interetRate: number;
  createdDate: string;
  status?: string; // Optional, can be 'ACTIVATED' or 'SUSPENDED'
  clientId?: number; // Will be used to display client ID from the backend
  accountNumber?: string;
}





