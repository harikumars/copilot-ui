import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
//import primeng button module
import { ButtonModule } from 'primeng/button';
//import primeng drop down module
import { DropdownModule } from 'primeng/dropdown';
//import Customer service from current path
import { CustomerService } from './customer.service';
//import Customer model from current path
import { Customer } from './customer';
import { MessageService } from 'primeng/api';



@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {

  //declare customerForm with FormGroup
  customerForm!: FormGroup;

  //add construstor with customer service and form builder and primeng message service
  constructor(private customerService: CustomerService, private formBuilder: FormBuilder, private messageService: MessageService) {
    //intialize customerForm with form builder and form variable as customerName, customerEmail, lei , swiftBic, cici, dtcc, avox
    this.customerForm = this.formBuilder.group({
      customerName: '',
      customerEmail: '',
      lei: '',
      swiftBic: '',
      cici: '',
      dtcc: '',
      avox: ''
    });
  }
  
  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.customerForm.value);
    //assign form value to customer object by individual property customer customerName , customerEmail, lei, swiftBic, cici, dtcc, avox with default value empty for string
    let customer: Customer = {
      customerName: this.customerForm.value.customerName || '',
      customerEmail: this.customerForm.value.customerEmail || '',
      lei: this.customerForm.value.lei || '',
      swiftBic: this.customerForm.value.swiftBic || '',
      cici: this.customerForm.value.cici || '',
      dtcc: this.customerForm.value.dtcc || '',
      avox: this.customerForm.value.avox || ''
    };
   

       //call customer service create customer method on error show error message on toast with prime ng toaster
       this.customerService.createCustomer(customer).subscribe((data) => {
        this.customerForm.reset();
        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Customer Created Successfully' });
      }, (error) => {
        this.messageService.add({ severity: 'error', summary: 'Error', detail: error.error.message });
      });

  }

}
