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
    this.http.get("http://localhost:48357/api/Customer").subscribe(res=>this.Success(res), res=>console.log(res));
   }

   Success(input:any){
     this.CustomerModels = input;
   }

 
 isEdit: boolean =false;
  CustomerModel: Customer = new Customer();
  CustomerModels: Array<Customer> = new Array<Customer>();

  Add(){
    console.log(this.CustomerModel);
    debugger;
    let errormessage = ""
    if(this.CustomerModel.customerCode == "")
    {
        errormessage = "Please enter customer code";
    }
    else if(this.CustomerModel.customerName == "")
    {
      errormessage = "Please enter customer name";
    }
    if(this.isEdit) 
    {
      this.http.put("http://localhost:48357/api/Customer", this.CustomerModel).subscribe( x=> this.Postsuccess(x), x=>console.log(x));
    }
    else{
      this.http.post("http://localhost:48357/api/Customer", this.CustomerModel).subscribe( x=> this.Postsuccess(x), x=>console.log(x));
    }
    
    this.CustomerModel = new Customer();
  }

  Postsuccess(input:any){
    this.Getdatafromserver();
  }

  Edit(input:any){
    this.isEdit =true;
    this.CustomerModel = input;
  }
  Delete(input:any){
    this.http.delete("http://localhost:48357/api/Customer?id="+input.id).subscribe( x=> this.Postsuccess(x), x=>console.log(x));
  }
}
