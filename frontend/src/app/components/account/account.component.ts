import { Component, OnInit } from '@angular/core';
import { AccountService } from '../../services/account.service';
import { AccountDto } from '../../services/account.dto';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  accountDto: AccountDto = {
    balance: 0,
    id_Client: 0,
    decouvert: 0,
    interetRate: 0,
    createdDate: ""
  };

  accounts: any[] = [];
  errorMessage: string = '';
  successMessage: string = '';

  constructor(private accountService: AccountService) {console.log('AccountService injected:', this.accountService);  }



  ngOnInit(): void {}

  // Create a new account
  createAccount(): void {
    // Check if the required fields are filled
    if (!this.accountDto.balance || !this.accountDto.id_Client ) {
      this.errorMessage = 'Please fill in all the required fields.';
      console.error('All required fields must be filled');
      return;
    }

    // Proceed with creating the account if all fields are valid
    console.log(this.accountDto);  // Check values before making API call
    this.accountService.createAccount(this.accountDto).subscribe({
      next: (response) => {
        console.log('Account created successfully:', response);
        this.successMessage = 'Account created successfully!';
      },
      error: (error: HttpErrorResponse) => {
        console.error('Error creating account:', error);
        this.errorMessage = 'There was an error creating the account. Please try again.';
      }
    });
  }


  // Fetch all accounts of a specific type (courant or saving)
  getAccounts(type: 'CA' | 'SA'): void {
    this.accountService.findAllAccounts(type).subscribe({
      next: (data: any[]) => {
        console.log(`${type === 'CA' ? 'Courant' : 'Saving'} accounts fetched successfully:`, data);
        this.accounts = data.map(account => ({
          ...account,
          clientId: account.client_id  // Mapping client_id from the backend response to clientId
        }));
        this.errorMessage = '';
      },
      error: (error: HttpErrorResponse) => {
        console.error(`Error fetching ${type === 'CA' ? 'Courant' : 'Saving'} accounts:`, error);
        this.errorMessage = `Error fetching ${type === 'CA' ? 'Courant' : 'Saving'} accounts - ${error.message}`;
      }
    });
  }




  // Fetch details for a specific account
  getAccount(accountNumber: string, type: 'CA' | 'SA'): void {
    this.accountService.findAccount(accountNumber, type).subscribe({
      next: (account) => {
        console.log('Account details: ', account);
      },
      error: (error: HttpErrorResponse) => {
        console.error('Error fetching account details:', error);
        this.errorMessage = 'Error fetching account details';
      }
    });
  }


 // Toggle the status of an account (activate or suspend)
 toggleAccountStatus(accountNumber: string, action: 'active' | 'suspend' | 'delete'): void {
  const account = this.accounts.find(a => a.accountNumber === accountNumber);

  if (!account) {
    this.errorMessage = 'Account not found';
    return;
  }

  switch(action) {
    case 'active':
      account.status = 'ACTIVATED';
      this.successMessage = 'Account activated successfully!';
      break;
    case 'suspend':
      account.status = 'SUSPENDED';
      this.successMessage = 'Account suspended successfully!';
      break;

  }
}


}
