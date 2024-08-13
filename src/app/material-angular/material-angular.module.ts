import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterLink } from '@angular/router';


import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatButton } from '@angular/material/button';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BrowserModule,
    RouterLink,
    MatCardModule,
    BrowserAnimationsModule,
    MatButton,
    MatFormFieldModule, 
    MatInputModule, 
    MatSelectModule,
  ],
  exports: [
    CommonModule,
    BrowserModule,
    RouterLink,
    MatCardModule,
    MatButton,
    BrowserAnimationsModule
  ]
})
export class MaterialAngularModule { }
