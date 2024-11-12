import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AccountDto } from './account.dto';


// Define the possible account types
type AccountType = 'CA' | 'SA';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  private apiUrl = 'http://localhost:8080/api/v1/accounts'; // Correct API URL

  constructor(private http: HttpClient) {console.log('HttpClient:',  this.http);}

  // Create a new account
  createAccount(accountDto: AccountDto): Observable<any> {
    return this.http.post(this.apiUrl, accountDto);  // POST to /api/v1/accounts
  }

  // Get all accounts of a specific type (courant or saving)
  findAllAccounts(type: AccountType): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/type/${type}`);
  }


  findAccount(accountNumber: string, type: AccountType): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${accountNumber}/${type}`);
  }

  activateAccount(accountNumber: string): Observable<any> {
    console.log('Activate account called for:', accountNumber);
    return this.http.put(`${this.apiUrl}/accounts/active/${accountNumber}`, {});
  }

  // Suspend account
  suspendAccount(accountNumber: string): Observable<any> {
    console.log('Suspend account called for:', accountNumber);
    return this.http.put(`${this.apiUrl}/accounts/suspend/${accountNumber}`, {});
  }

}
