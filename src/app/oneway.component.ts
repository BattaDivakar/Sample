import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-oneway',
  templateUrl: './oneway.component.html',
  styleUrls: ['./oneway.component.css']
})
export class OnewayComponent implements OnInit {
  PageHeader :string = "Product Details"
  Prodid : string  = "1";
  ProdName : string = "Nike Casuals";
  Price: number = 4500;

  Prodid2 : string  = "2";
  ProdName2 : string = "Puma Casuals";
  Price2: number = 4300;
  IsDisabled : boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  getFullProd1DetailsInline():string{
    return this.Prodid+" "+this.ProdName+" "+ this.Price;
  }

  getFullProd2DetailsInline():string{
    return this.Prodid2+" "+this.ProdName2+" "+ this.Price2;
  }

}
