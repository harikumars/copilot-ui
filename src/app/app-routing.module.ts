import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultComponent } from './layouts/default/default.component';
import { CustomerComponent } from './modules/customer/customer.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
//import posts component
import { PostsComponent } from './modules/posts/posts.component';
import { ReportsComponent } from './modules/reports/reports.component';
import { TradesComponent } from './modules/trades/trades.component';


const routes: Routes = [{
  path:'',
  component: DefaultComponent,
  children: [
    {
      path: '',
      component: CustomerComponent
    },
    //add reports component
    {
      path: 'trades',
      component: TradesComponent
    },
    //add Customer Component
    {
      path: 'reports',
      component: DashboardComponent
    },
    //add reports component
    {
      path: 'positionReports',
      component: ReportsComponent
    },
  ]
}
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
