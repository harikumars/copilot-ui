import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
//import mat divider module 
import {MatDividerModule} from '@angular/material/divider';
//import mat toolbar module
import {MatToolbarModule} from '@angular/material/toolbar'; 
//import mat icon module
import {MatIconModule} from '@angular/material/icon';
//import mat button module
import {MatButtonModule} from '@angular/material/button';
//import mat menu module
import {MatMenuModule} from '@angular/material/menu';
//import mat list module
import {MatListModule} from '@angular/material/list';
//import table module
import {TableModule} from 'primeng/table';
//import flex layout module
import { FlexLayoutModule } from '@angular/flex-layout';
//import router module
import { RouterModule } from '@angular/router';
//import http client module
import {HttpClientModule} from '@angular/common/http';
//import forms module
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//import button module
import {ButtonModule} from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule,
    MatDividerModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    FlexLayoutModule,
    MatMenuModule,
    MatListModule,
    RouterModule,
    TableModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ButtonModule,
    DropdownModule

    
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent
  ]
})
export class SharedModule { }
