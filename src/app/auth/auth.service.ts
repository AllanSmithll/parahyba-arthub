import { Injectable } from '@angular/core';
import { User } from '../shared/models/user';
import { Router } from '@angular/router';
import { LoginUserService } from './login-user.service';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private users: User[] = [];

  constructor(private router: Router,private userLogged: LoginUserService) { }

  login(email:string, password:string){
    let usuarioValidado: User | null = null;
    this.getUsers().map((currentUser)=>{
      if(currentUser.emailUser == email && currentUser.passwordUser == password){
        usuarioValidado = currentUser;
        this.userLogged.setCurrentUser(usuarioValidado);
        this.router.navigate(['']);
      }
    })
    if(!usuarioValidado){
      window.alert("Either Nickname or password is incorrect.");
    }


}

  register(email: string, password: string, name:string) {
     // Validação de email simples
     const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
     if (!emailPattern.test(email)) {
       return 'Email inválido.';
     }
 
     // Validação de senha simples (mínimo 8 caracteres)
     if (password.length < 8) {
       return 'A senha deve ter pelo menos 8 caracteres.';
     }
 
     // Validação do nome (não pode estar vazio)
     if (!name.trim()) {
       return 'O nome é obrigatório.';
     }
 
     // Verifica se o usuário já existe
     const existingUser = this.users.find(user => user.emailUser === email);
     if (existingUser) {
       return 'Este email já está registrado.';
     }
 
     // Armazenar usuário (em um cenário real, hash a senha antes de armazenar)
     this.users.push({ emailUser: email, passwordUser: password, nameUser: name });
 
    console.log(this.users)
     // Feedback de sucesso
     return 'Usuário registrado com sucesso!';
   }

  logout() {
    // Lógica de logout
    this
  }

  getUsers(): User[] {
    const usersCopy: User[] = [];
    
    // Corrigido: Adiciona cada usuário ao array usersCopy
    this.users.forEach(user => usersCopy.push(user));

    return usersCopy; // Retorna a cópia dos usuários
  }
  
}
