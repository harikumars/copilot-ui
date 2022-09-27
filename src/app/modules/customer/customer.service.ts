import { Injectable } from '@angular/core';
//import http client 
import { HttpClient } from '@angular/common/http';
//import Observable
import { Observable } from 'rxjs';
//import cuostomer model
import { Customer } from './customer';


@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  //create constructor with http client
  constructor(private http: HttpClient) { }

  //create create Customer method with Observable of http post endpoint as createCustomer
  createCustomer(customer: Customer): Observable<any> {
    return this.http.post('http://localhost:8080/createCustomer', customer);
  }

}
