import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingPageModule } from './features/landing-page/landing-page.module';
import { MaterialAngularModule } from './material-angular/material-angular.module';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';


@NgModule({
  declarations: [
    
  ],
  imports: [
    CommonModule,
    LandingPageModule,
    MaterialAngularModule,
    AppRoutingModule,
    BrowserModule
  ]
})
export class AppModule { }