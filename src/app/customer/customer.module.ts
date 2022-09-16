import { CommonModule } from "@angular/common";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { Router, RouterModule } from "@angular/router";
import { GridUIModule } from "../grid-ui/grid-ui.module";
import { customerroutes } from "../routing/customerroutes";
import { LoginServiceService } from "../services/login-service.service";
import { TokenInceptorService } from "../services/token-inceptor.service";
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
        GridUIModule,
        ReactiveFormsModule
    ],
    providers:[LoginServiceService, {provide: HTTP_INTERCEPTORS, useClass:TokenInceptorService, multi:true}],
    bootstrap:[CustomerComponent]
})
export class CustomerModule {}