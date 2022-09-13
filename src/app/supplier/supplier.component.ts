import { Component, OnInit } from '@angular/core';
import { Supplier} from './supplier.model';

@Component({
  selector: 'app-supplier',
  templateUrl: './supplier.component.html',
  styleUrls: ['./supplier.component.css']
})
export class SupplierComponent implements OnInit {

  SupplierModel : Supplier = new Supplier();
  SupplierModels : Array<Supplier>  = new Array<Supplier>();

  Add(){
    this.SupplierModels.push(this.SupplierModel);
    this.SupplierModel = new Supplier();
  }

  ngOnInit(): void {
  }

}
