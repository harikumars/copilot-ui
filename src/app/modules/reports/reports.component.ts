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
  loading:boolean= false;



  //create constructor with service reports and primeng message service
  constructor(private reportsService: ReportsService, private messageService: MessageService) { }

  //get positionTrades from reports service with subscribe by taking tradeId as parameter and on failure show error message in primeng toast
  getPositionTrades() {
    this.reportsService.getPositionTrades(this.tradeId).subscribe((data: Trade[]) => {
      this.trades = data;
      this.trades = [...this.trades];
    }, (error) => {
      this.showPositionTrade = false;
      this.loading = true;
      this.messageService.add({ severity: 'error', summary: 'Error', detail: error.error.message });
    });
  }

  //get getPositionsTrades from reports service and call with promise then show success message in primeng toast
  getPositionsTrades() {
    this.reportsService.getPositionsTrades(this.tradeId).then((data: Trade[]) => {
      // const datas: Trade[] = [];
     
      // const trade: Trade = {
      //   tradeId: data.tradeId,
      //   transaction: data.transaction,
      //   counterPartyId: data.counterPartyId,
      //   bookId: data.bookId,
      //   maturityDate: data.maturityDate,
      //   createdDate: data.createdDate,
      //   expired: data.expired
      // };





      this.trades = data;
      //this.trades = [...this.trades];
      this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Trades Fetched Successfully' });
    });
  }





  ngOnInit(): void {
  }

}
