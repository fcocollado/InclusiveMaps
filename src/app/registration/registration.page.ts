import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.page.html',
  styleUrls: ['./registration.page.scss'],
})
export class RegistrationPage implements OnInit {
  bottonCrearUsuario() {
    throw new Error('Method not implemented.');
  }
  registrationForm!: FormGroup;
  userRegisterModal: { nombre: string; apellido: string; email: string; password: string; } | undefined;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private alertController: AlertController
  ) {}

  ngOnInit() {
    this.registrationForm = this.formBuilder.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      disabilities: [[], Validators.required]
    });
  }

  async onSubmit() {
    if (this.registrationForm.valid) {
      // Aquí iría la lógica para registrar al usuario (sin conexión a base de datos)
      console.log('Form Submitted:', this.registrationForm.value);

      // Muestra una alerta de éxito
      this.presentAlert('Registro Exitoso', '¡Usuario creado con éxito!');

      // Redirige a la página de inicio de sesión
      this.router.navigate(['/login']);
    } else {
      // Muestra una alerta de error si el formulario no es válido
      this.presentAlert('Error', 'Por favor, completa todos los campos correctamente.');
    }
  }

  async presentAlert(header: string, message: string) {
    const alert = await this.alertController.create({
      header: header,
      message: message,
      buttons: ['OK']
    });

    await alert.present();
  }

  goBack() {
    this.router.navigate(['/login']);
  }
}
