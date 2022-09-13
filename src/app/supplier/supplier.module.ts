import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { GridUIModule } from "../grid-ui/grid-ui.module";
import { supplierroutes } from "../routing/supplierroutes";
import { SupplierComponent } from "./supplier.component";

@NgModule({
    declarations: [
        SupplierComponent
    ],
    imports:[
        CommonModule,
        FormsModule,
        GridUIModule,
        RouterModule.forChild(supplierroutes)
    ],
    providers:[],
    bootstrap:[SupplierComponent]
})

export class SupplierModule{}