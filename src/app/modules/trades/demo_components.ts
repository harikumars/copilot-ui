import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { Trade } from './trade';
import { TradesService } from './trades.service';
//import primeng button module
import { ButtonModule } from 'primeng/button';
//import primeng drop down module
import { DropdownModule } from 'primeng/dropdown';
import { MessageService } from 'primeng/api';
//import prime ng toaster
import { ToastModule } from 'primeng/toast';



@Component({
  selector: 'app-trades',
  templateUrl: './trades.component.html',
  styleUrls: ['./trades.component.scss']
})
export class TradesComponent implements OnInit {

  //declare tradeForm with FormGroup
  tradeForm: FormGroup;

 

  //declare transactionTypes for select option of New-Trade: N, Amendment:A, Increase:I, Termination:T, Novation:N, Exit:E
  transactionTypes: any[] = [
    { label: 'New-Trade', value: 'New-Trade' },
    { label: 'Amendment', value: 'Amendment' },
    { label: 'Increase', value: 'Increase' },
    { label: 'Termination', value: 'Termination' },
    { label: 'Novation', value: 'Novation' },
    { label: 'Exit', value: 'Exit' }
  ];

  //create constructor with  service trade and form builder and primeng message service
  constructor(private tradeService: TradesService, private formBuilder: FormBuilder, 
    private messageService: MessageService) {
    //intialize tradeForm with form builder
    this.tradeForm = this.formBuilder.group({
      tradeId: null,
      transaction: [null],
      buyer: '',

      seller: '',
      amount: '',
      currency: '',
      tradeDate: '',
      status: ''
    });
  }

  ngOnInit(): void {

  }

  //create onSubmit method of tradeForm and call trade service create trade method
  onSubmit() {
    console.log(this.tradeForm.value);
    //assign form value to trade object by individual property with default value empty for string and 0 for number
    let trade: Trade = {
      tradeId: this.tradeForm.value.tradeId || 0,
      transaction: this.tradeForm.value.transaction || '',
      buyer: this.tradeForm.value.buyer || '',
      seller: this.tradeForm.value.seller || '',
      amount: this.tradeForm.value.amount || '',
      currency: this.tradeForm.value.currency || '',
      tradeDate: this.tradeForm.value.tradeDate || '',
      status: this.tradeForm.value.status || ''
    };
    console.log(trade);
    //call trade service create trade method and  on failure show error message in primeng toast
    this.tradeService.createTrade(trade).subscribe((data) => {
      this.tradeForm.reset();
      this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Trade Created Successfully' });
    }, (error) => {
      this.messageService.add({ severity: 'error', summary: 'Error', detail: error.error.message });
    });

  }


}
