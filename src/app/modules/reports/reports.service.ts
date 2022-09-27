import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReportsService {

  //create getTrades method with Observable of http get
  getPositionTrades(tradeId: any): Observable<any> {
    return this.http.get('http://localhost:8080/trades/get/' + tradeId);
  }

  //create constructor wit hhttp client
  constructor(private http: HttpClient) { }

}
