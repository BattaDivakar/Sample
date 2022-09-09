import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OnewayComponent } from './oneway.component';

@NgModule({
  declarations: [
    AppComponent,
    OnewayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [OnewayComponent]
})
export class AppModule { }
