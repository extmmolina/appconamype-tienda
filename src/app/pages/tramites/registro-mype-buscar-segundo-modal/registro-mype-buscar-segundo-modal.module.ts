import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistroMypeBuscarSegundoModalPageRoutingModule } from './registro-mype-buscar-segundo-modal-routing.module';

import { RegistroMypeBuscarSegundoModalPage } from './registro-mype-buscar-segundo-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistroMypeBuscarSegundoModalPageRoutingModule
  ],
  declarations: [RegistroMypeBuscarSegundoModalPage]
})
export class RegistroMypeBuscarSegundoModalPageModule {}
