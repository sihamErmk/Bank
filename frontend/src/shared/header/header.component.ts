import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  navs: any[] = [
    { title: 'Home', path: '/home' },
    { title: 'Accounts', path: '/accounts' },
    { title: 'Clients', path: '/clients' },
    { title: 'Operations', path: '/operation' },
    { title: 'Employee List', path: '/employees' },
    { title: 'Add Employee', path: '/employees-form' },
    { title: 'Client List', path: '/clients' },
    { title: 'Add Client', path: '/clients-form' },
    { title: 'Groups', path: '/groupes' },
    { title: 'Add Group', path: '/groupes-form' },
    { title: 'Operation Form', path: '/operation-form' }
  ];

  sidebarVisible = false;

  toggleSidebar() {
    this.sidebarVisible = !this.sidebarVisible;
  }
}
