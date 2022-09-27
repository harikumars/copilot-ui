import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Trade } from '../trades/trade';
import { ReportsService } from './reports.service';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.scss']
})
export class ReportsComponent implements OnInit {

  //declare Trade with Empty array
  trades: Trade[] = [];
  tradeId: any;
  showPositionTrade: boolean = false;


  //create constructor with service reports and primeng message service
  constructor(private reportsService: ReportsService, private messageService: MessageService) { }

  //get positionTrades from reports service with subscribe by taking tradeId as parameter and on failure show error message in primeng toast
  getPositionTrades() {
    this.reportsService.getPositionTrades(this.tradeId).subscribe((data: Trade[]) => {
      this.trades = data;
      alert('');
      this.showPositionTrade = true;
    }, (error) => {
      this.showPositionTrade = false;
      this.messageService.add({ severity: 'error', summary: 'Error', detail: error.error.message });
    });
  }

  ngOnInit(): void {
  }

}
