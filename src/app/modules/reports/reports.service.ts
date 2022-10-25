import { HttpClient } from '@angular/common/http';

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

//import Angular http resposen
import { HttpResponse } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ReportsService {

  //create getTrades method with Observable of http get
  getPositionTrades(tradeId: any): Observable<any> {
    return this.http.get('http://localhost:8080/trades/get/' + tradeId);
  }

  //create getTrades methos and return promise of http get then return data as json and on failure show error message
  extractData(res: any) {
    let body = res;
    return body || {};
  }

  //create handleError method with error message
  handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

  getPositionsTrades(tradeId: any): Promise<any> {
    return this.http.get('http://localhost:8080/trades/get/'+tradeId).toPromise()
    .then(this.extractData).catch(this.handleError);
  }


  //create constructor wit hhttp client
  constructor(private http: HttpClient) { }

}
