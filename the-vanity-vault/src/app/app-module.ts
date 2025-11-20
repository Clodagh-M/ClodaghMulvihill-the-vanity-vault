import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpHeaders, HttpClientModule } from '@angular/common/http';

import { HomeList } from './home-list/home-list';

@NgModule({
  declarations: [
    HomeList
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    
  ],
  bootstrap: [HomeList]
})
export class AppModule { }
