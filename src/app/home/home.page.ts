import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage {
  username: string = 'admin'; // Puedes hacerlo dinámico según el usuario que haya iniciado sesión
  selectedDisabilities: string[] = []; // Array para almacenar las discapacidades seleccionadas

  constructor(private router: Router) {}

  redirectfuncionn() {
    // Redirigir a la página de inicio u otra página
    this.router.navigate(['/home']);
  }

  // Se llama cuando el usuario cambia la selección en el ion-select
  onDisabilitiesChange() {
    // Registrar la selección en la variable
    console.log('Discapacidades seleccionadas:', this.selectedDisabilities);
  }

  navigateToLogin() {
    this.router.navigate(['/login']);
  }

  navigateToRegistration() {
    this.router.navigate(['/registration']);
  }
}
