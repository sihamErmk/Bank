import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { RouterModule } from '@angular/router';





@NgModule({
  declarations: [HeaderComponent],  // Declare the component here
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [HeaderComponent]  // Export it so it can be used elsewhere
})
export class HeaderModule { }
