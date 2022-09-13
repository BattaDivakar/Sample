import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { Router, RouterModule } from "@angular/router";
import { GridUIModule } from "../grid-ui/grid-ui.module";
import { customerroutes } from "../routing/customerroutes";
import { CustomerComponent } from "./customer.component";

@NgModule({
    declarations:[
        CustomerComponent
    ],
    imports:[
        CommonModule,
        FormsModule,
        HttpClientModule,
        RouterModule.forChild(customerroutes),
        GridUIModule
    ],
    providers:[],
    bootstrap:[CustomerComponent]
})
export class CustomerModule {}