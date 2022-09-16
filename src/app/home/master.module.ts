import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule} from '@angular/router'
import { LoginServiceService } from '../services/login-service.service';
import { LoginComponent } from '../login/login.component';
import { MasterComponent } from '../master/master.component';
import { Mainroutes } from '../routing/mainroutes';
import { HomeComponent } from './home.component';
import { TokenInceptorService } from '../services/token-inceptor.service';


@NgModule({
  declarations: [
    HomeComponent,
    MasterComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(Mainroutes),
    HttpClientModule
  ],
  providers: [LoginServiceService, TokenInceptorService],
  bootstrap: [MasterComponent]
})
export class MasterModule { }
