import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms'; // Importa ReactiveFormsModule
import { AppComponent } from 'src/app/app.component';
import { RegistrationPageRoutingModule } from './registration-routing.module';
import { HomePage } from 'src/app/home/home.page';
import { LoginPage } from 'src/app/login/login.page';
import { RegistrationPage } from 'src/app/registration/registration.page'; // Importa la página de registro


@NgModule({
  declarations: [
    RegistrationPage, // Declara la página de registro
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    RegistrationPageRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
export class RegistrationPageModule{}
