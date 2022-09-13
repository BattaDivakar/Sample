import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Customer } from './customer.model';


@Component({
  templateUrl: './customer.component.html',
})

export class CustomerComponent implements OnInit {
  title = 'DemoProject';

  constructor(private http: HttpClient){

  }
  
  ngOnInit(): void{
    this.Getdatafromserver();
   }

   Getdatafromserver(): void{
    this.http.get("http://localhost:3000/customers").subscribe(res=>this.Success(res), res=>console.log(res));
   }

   Success(input:any){
     this.CustomerModels = input;
   }

 

  CustomerModel: Customer = new Customer();
  CustomerModels: Array<Customer> = new Array<Customer>();

  Add(){
    // this.CustomerModels.push(this.CustomerModel);
    // console.log(this.CustomerModels); 
    this.http.post("http://localhost:3000/customers", this.CustomerModel).subscribe( x=> this.Postsuccess(x), x=>console.log(x));
    this.CustomerModel = new Customer();
  }

  Postsuccess(input:any){
    this.Getdatafromserver();
  }

  Edit(){
    // this.CustomerModels.push(this.CustomerModel);
    // console.log(this.CustomerModels); 
    this.CustomerModel = new Customer();
  }
  Delete(){
    // if(this.CustomerModels.indexOf(this.CustomerModel) !== -1)
    // {
    //   this.CustomerModels.splice(this.CustomerModels.indexOf(this.CustomerModel), 1)
    // }
    // console.log(this.CustomerModels); 
    // this.CustomerModel = new Customer();
    // this.http.delete("http://localhost:3000/customers"), this.CustomerModel.id).subscribe( x=> this.Postsuccess(x), x=>console.log(x));
    // this.CustomerModel = new Customer();
  }
  EditCustomer(input:any){
    this.CustomerModel = input;
  }
}
