import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MedioAmbientePageRoutingModule } from './medio-ambiente-routing.module';

import { MedioAmbientePage } from './medio-ambiente.page';
import { ComponentsModule } from 'src/app/components/components.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MedioAmbientePageRoutingModule,
    ComponentsModule
  ],
  declarations: [MedioAmbientePage]
})
export class MedioAmbientePageModule {}
