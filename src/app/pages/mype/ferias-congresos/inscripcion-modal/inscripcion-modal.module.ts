import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InscripcionModalPageRoutingModule } from './inscripcion-modal-routing.module';

import { InscripcionModalPage } from './inscripcion-modal.page';
import { NgxMaskIonicModule } from 'ngx-mask-ionic';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InscripcionModalPageRoutingModule,
    NgxMaskIonicModule
  ],
  declarations: [InscripcionModalPage]
})
export class InscripcionModalPageModule {}
