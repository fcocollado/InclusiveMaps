import { Component } from '@angular/core';
import { Router } from '@angular/router'; // Para redirigir después de hacer login

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
    // Redirigir a la página de inicio u otra página
    this.router.navigate(['/home']);
  }

  onLogin() {
    // Verifica si los campos están correctos (sin conexión a base de datos)
    if (this.username === 'admin' && this.password === '1234') {
      this.message = 'Login successful!';
      // Redirigir a la página de inicio u otra página
      this.router.navigate(['/home']);
    } else {
      this.message = 'Invalid username or password';
    }
  }
}
  