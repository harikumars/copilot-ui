import { Injectable } from '@angular/core';
//import http client 
import { HttpClient } from '@angular/common/http';
//import Observable
import { Observable } from 'rxjs';
//import Trade model
import { Trade } from './trade';



@Injectable({
  providedIn: 'root'
})
export class TradesService {

 //create constructor with http client
  constructor(private http: HttpClient) { }

  //create getTrades method with Observable of http get
  getTrades() : Observable<any> {
    return this.http.get('http://localhost:8080/trades/getAll');
  }

  //create createTrade method with Observable of http post
  createTrade(trade: Trade) : Observable<any> {
    return this.http.post('http://localhost:8080/trades/create', trade);
  }

  //create updateTrade method with Observable of http put
  updateTrade(trade: Trade) : Observable<any> {
    return this.http.put('http://localhost:8080/trades/update', trade);
  }

  //create deleteTrade method with Observable of http delete
  deleteTrade(tradeId: number) : Observable<any> {
    return this.http.delete('http://localhost:8080/trades/delete/' + tradeId);
  }

}
