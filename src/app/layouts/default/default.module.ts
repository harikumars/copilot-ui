import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//impor default compoenent
import { DefaultComponent } from './default.component';
//importdashbaoard component
import { DashboardComponent } from 'src/app/modules/dashboard/dashboard.component';
//import router module
import { RouterModule } from '@angular/router';
import { PostsComponent } from 'src/app/modules/posts/posts.component';
import { SharedModule } from 'src/app/shared/shared.module';
//import mat side bar module
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDividerModule } from '@angular/material/divider';
//import primeng table module
import { TableModule } from 'primeng/table';
import { HttpClient, HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    DefaultComponent,
    DashboardComponent,
    PostsComponent
  ],
  imports: [
    CommonModule ,
    RouterModule,
    SharedModule,
    MatSidenavModule,
    MatDividerModule,
    TableModule,
    HttpClientModule
  ]
})
export class DefaultModule { }
