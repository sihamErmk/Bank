import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientFormComponent } from './components/client-form/client-form.component';
import { ClientListeComponent } from './components/client-list/client-list.component';
import { EmployeeFormComponent } from './components/employee-form/employee-form.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { GroupFormComponent } from './components/groupe-form/groupe-form.component';
import { GroupListComponent } from './components/groupe-list/groupe-list.component';
import { AccountComponent } from './components/account/account.component';
import { OperationFormComponent } from './components/operation-form/operation-form.component';
import { OperationHistoryComponent } from './components/operation-history/operation-history.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  { path: 'employees', component: EmployeeListComponent }, // Route vers la liste des clients
  { path: 'employees-form', component: EmployeeFormComponent }, // Route vers le formulaire pour ajouter un client
  { path: 'clients', component: ClientListeComponent }, // Route vers la liste des clients
  { path: 'clients-form', component: ClientFormComponent }, // Route vers le formulaire pour ajouter un client
  { path: 'groupes', component: GroupListComponent },
  { path: 'groupes-form', component: GroupFormComponent },
  {path:'accounts',component:AccountComponent}, // Route vers le formulaire pour ajouter un client
  { path: 'operation-form', component: OperationFormComponent },

  {path:'operation',component:OperationHistoryComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
