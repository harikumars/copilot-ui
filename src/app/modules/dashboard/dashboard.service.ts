import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from './customer';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

//create getTrades method with Observable of http get
getTrades() : Observable<any> {
  return this.http.get('http://localhost:8080/trades/getAll');
}

//create constructor wit hhttp client
constructor(private http: HttpClient) { }

}
