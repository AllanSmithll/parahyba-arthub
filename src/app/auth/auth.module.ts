import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { MaterialAngularModule } from '../material-angular/material-angular.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    MaterialAngularModule,
    FormsModule
  ],
  
  exports:[
    RegisterComponent,
    LoginComponent
  ],
})
export class AuthModule { }
