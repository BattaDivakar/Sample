import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule} from '@angular/router'

import { CustomerComponent} from './customer/customer.component';
import { OnewayComponent } from './oneway.component';
import { SupplierComponent } from './supplier/supplier.component';
import { HomeComponent } from './home/home.component';
import { MasterComponent } from './master/master.component';
import { Mainroutes } from './mainroutes';

@NgModule({
  declarations: [
    CustomerComponent,
    OnewayComponent,
    SupplierComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(Mainroutes)
  ],
  providers: [],
  bootstrap: [MasterComponent]
})
export class AppModule { }
