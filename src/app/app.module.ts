import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingPageModule } from './features/landing-page/landing-page.module';
import { MaterialAngularModule } from './material-angular/material-angular.module';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from './store/store.module';
import { AuthModule } from './auth/auth.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent

  ],
  imports: [
    CommonModule,
    LandingPageModule,
    MaterialAngularModule,
    BrowserModule,
    AppRoutingModule,
    StoreModule,
    AuthModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
