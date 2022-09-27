export class Customer {
    id: number=0;
    name: string='';
    email: string='';
    phone: string='';
    address: string='';
    city: string='';
    state: string='';
    zip: string='';
    
    //constructor with Object assign
    constructor(customer: Customer) {
        Object.assign(this, customer);
    }

}