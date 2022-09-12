import { Component } from '@angular/core';
import { Customer } from './customer.model';

@Component({
  templateUrl: './customer.component.html',
})

export class CustomerComponent {
  title = 'DemoProject';

  CustomerModel: Customer = new Customer();
  CustomerModels: Array<Customer> = new Array<Customer>();

  Add(){
    this.CustomerModels.push(this.CustomerModel);
    console.log(this.CustomerModels); 
    this.CustomerModel = new Customer();
  }
  Edit(){
    this.CustomerModels.push(this.CustomerModel);
    console.log(this.CustomerModels); 
    this.CustomerModel = new Customer();
  }
  Delete(){
    if(this.CustomerModels.indexOf(this.CustomerModel) !== -1)
    {
      this.CustomerModels.splice(this.CustomerModels.indexOf(this.CustomerModel), 1)
    }
    console.log(this.CustomerModels); 
    // this.CustomerModel = new Customer();
  }
}
