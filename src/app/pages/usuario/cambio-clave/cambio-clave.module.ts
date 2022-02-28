import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CambioClavePageRoutingModule } from './cambio-clave-routing.module';
import { ComponentsModule } from '../../../components/components.component';

import { CambioClavePage } from './cambio-clave.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CambioClavePageRoutingModule,
    ComponentsModule
  ],
  declarations: [CambioClavePage]
})
export class CambioClavePageModule {}
