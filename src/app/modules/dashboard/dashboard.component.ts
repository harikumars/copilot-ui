import { Component, OnInit } from '@angular/core';
import { Trade } from '../trades/trade';
import { DashboardService } from './dashboard.service';



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {


 

  //declare Trade with Empty array
  trades: Trade[] = [];


  //create constructor with  service dashboard
  constructor(private dashboardService: DashboardService) { }

  //get Trades from service with subscribe
  getTradesFromService() {
    this.dashboardService.getTrades().subscribe((data: Trade[]) => {
      this.trades = data;
    });
  }




  ngOnInit(): void {
    this.getTradesFromService();
  }

}
