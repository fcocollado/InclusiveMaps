import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';  // Importando IonicModule
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,  // Incluyendo el módulo de Ionic
    HomePageRoutingModule
  ],
  declarations: [HomePage]
})
export class HomePageModule {}

