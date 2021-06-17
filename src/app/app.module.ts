import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CountriesMapModule } from 'countries-map';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CountriesMapModule,
    HttpClientModule,
    BrowserAnimationsModule,
  
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})


export class AppModule { }
