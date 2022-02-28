import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CatalogoPageRoutingModule } from './catalogo-routing.module';

import { CatalogoPage } from './catalogo.page';
import { ComponentsModule } from 'src/app/components/components.component';
import { ModalBuscarPage } from '../modal-buscar/modal-buscar.page';
import { ModalBuscarPageModule } from '../modal-buscar/modal-buscar.module';

@NgModule({
  entryComponents:[
    ModalBuscarPage
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CatalogoPageRoutingModule,
    ComponentsModule,
    ModalBuscarPageModule
  ],
  declarations: [CatalogoPage]
})
export class CatalogoPageModule {}
