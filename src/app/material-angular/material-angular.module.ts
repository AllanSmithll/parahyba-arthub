import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterLink } from '@angular/router';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BrowserModule,
    RouterLink,
    MatCardModule,
    BrowserAnimationsModule
  ],
  exports: [
    CommonModule,
    BrowserModule,
    RouterLink,
    MatCardModule,
    BrowserAnimationsModule
  ]
})
export class MaterialAngularModule { }
