import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClient, HttpClientModule}from '@angular/common/http';
import { ViewListComponent } from './view-list/view-list.component';
import { GetdetailsComponent } from './getdetails/getdetails.component';
import { UpdatedetailsComponent } from './updatedetails/updatedetails.component';
import { RouterModule, RouterOutlet } from '@angular/router';
import { AdddetailsComponent } from './adddetails/adddetails.component';


@NgModule({
  declarations: [
    AppComponent,
    ViewListComponent,
    GetdetailsComponent,
    UpdatedetailsComponent,
    AdddetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
