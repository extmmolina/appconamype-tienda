import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistroMypeBuscarModalPageRoutingModule } from './registro-mype-buscar-modal-routing.module';

import { RegistroMypeBuscarModalPage } from './registro-mype-buscar-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistroMypeBuscarModalPageRoutingModule
  ],
  declarations: [RegistroMypeBuscarModalPage]
})
export class RegistroMypeBuscarModalPageModule {}
