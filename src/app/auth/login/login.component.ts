import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  name: string = '';
  feedbackMessage: string = '';

  constructor(private authService: AuthService) {}
  
  login(){
    this.authService.login(this.email,this.password)   
    this.feedbackMessage = "Login Sucesso!"; 
  }

}
