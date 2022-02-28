import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalserviciosPageRoutingModule } from './modalservicios-routing.module';

import { ModalserviciosPage } from './modalservicios.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalserviciosPageRoutingModule
  ],
  declarations: [ModalserviciosPage]
})
export class ModalserviciosPageModule {}
