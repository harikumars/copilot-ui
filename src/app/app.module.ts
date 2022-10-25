import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DefaultModule } from './layouts/default/default.module';
//import prime ng table module
import {TableModule} from 'primeng/table';
import { CustomerComponent } from './modules/customer/customer.component';
import { TradesComponent } from './modules/trades/trades.component';
import { ReportsComponent } from './modules/reports/reports.component';
//import forms module
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
//import mat label module
import {MatLabel} from '@angular/material/form-field';
//import mat input module
import {MatInputModule} from '@angular/material/input';
//import mat button module
import {MatButtonModule} from '@angular/material/button';
//import mat form field module
import {MatFormFieldModule} from '@angular/material/form-field';
//import mat select module
import {MatSelectModule} from '@angular/material/select';
//import mat datepicker module
import {MatDatepickerModule} from '@angular/material/datepicker';
//import mat native date module
import {MatNativeDateModule} from '@angular/material/core';
//import mat card module
import {MatCardModule} from '@angular/material/card';
//import mat dialog module
import {MatDialogModule} from '@angular/material/dialog';
//import mat table module
import {MatTableModule} from '@angular/material/table';
//import mat paginator module
import {MatPaginatorModule} from '@angular/material/paginator';
//import mat sort module
import {MatSortModule} from '@angular/material/sort';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { DemoComponent } from './modules/demo/demo.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
    TradesComponent,
    ReportsComponent,
    DemoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DefaultModule,
    TableModule,
    FormsModule,
    MatIconModule,
    ButtonModule,
    MatFormFieldModule,
    DropdownModule,
    ToastModule,
    ReactiveFormsModule
  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
