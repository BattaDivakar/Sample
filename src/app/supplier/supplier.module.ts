import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { supplierroutes } from "../routing/supplierroutes";
import { SupplierComponent } from "./supplier.component";

@NgModule({
    declarations: [
        SupplierComponent
    ],
    imports:[
        CommonModule,
    RouterModule.forChild(supplierroutes)],
    providers:[],
    bootstrap:[SupplierComponent]
})

export class SupplierModule{}