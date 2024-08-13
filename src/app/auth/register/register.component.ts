import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  email: string = '';
  password: string = '';
  name: string = '';
  feedbackMessage: string = '';

  constructor(private authService: AuthService) {}

  onRegister() {
    this.feedbackMessage = this.authService.register(this.email, this.password, this.name);
    this.cleanInput();
  }

  cleanInput(){
    this.email = '';
    this.password= '';
    this.name = '';
  }

 
    
}
