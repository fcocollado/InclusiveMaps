import { Component } from '@angular/core';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  username: string = '';
  password: string = '';
  message: string = '';

  constructor(private router: Router) {}

  redirectfuncion() {
    // Redirigir a la página de inicio 
    this.router.navigate(['/home']);
  }

  onLogin() {
    if (this.username === 'admin' && this.password === '1234') {
      this.message = 'Inicio de sesión exitoso';
      this.router.navigate(['/home']);
    } else {
      this.message = 'Usuario o contraseña inválidos';
    }
  }
}
  