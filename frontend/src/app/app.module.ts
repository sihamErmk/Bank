import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeFormComponent } from './components/employee-form/employee-form.component';
import { FormsModule } from '@angular/forms';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { EmployeService } from './services/employe.service';
import { ClientListeComponent } from './components/client-list/client-list.component';
import { ClientFormComponent } from './components/client-form/client-form.component';
import { GroupeService } from './services/groupe.service';
import { GroupFormComponent } from './components/groupe-form/groupe-form.component';
import { GroupListComponent } from './components/groupe-list/groupe-list.component';
import { OperationHistoryComponent } from './components/operation-history/operation-history.component';
import { OperationFormComponent } from './components/operation-form/operation-form.component';
import { OperationService } from './services/operation.service';
import { AccountComponent } from './components/account/account.component';
import { AccountService } from './services/account.service';
import { CommonModule } from '@angular/common';
import { HeaderModule } from '../shared/header/header.module';
import { HomeComponent } from './components/home/home.component';




@NgModule({
  declarations: [
    AppComponent,
    EmployeeFormComponent,
    EmployeeListComponent,
    ClientListeComponent,
    ClientFormComponent,
    GroupListComponent,
    GroupFormComponent,
    OperationHistoryComponent,
    OperationFormComponent,
    AccountComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    CommonModule,
    HeaderModule  // only needed in imports
  ],
  providers: [
    EmployeService,
    HttpClient,
    GroupeService,
    OperationService,
    AccountService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }


