import { Injectable } from '@angular/core';
import { User } from '../shared/models/user';
import { AuthService } from './auth.service';
@Injectable({
  providedIn: 'root'
})
export class LoginUserService {
  private currentUserSubject: User;    
  constructor(private auth : AuthService) {
    this.currentUserSubject = {
      emailUser: "",
      passwordUser: "",
      nameUser: ""
    };
   }

   getCurrentUser(){
    return this.currentUserSubject;
   }
   setCurrentUser(userLoged: User){
    this.currentUserSubject = userLoged;
   }


}
