import { ComponentsModule } from '../../../../components/components.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';

import { ComprasPageRoutingModule } from './compras-routing.module';

import { ComprasPage } from './compras.page';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    ComprasPageRoutingModule,
    ComponentsModule
  ],
  declarations: [ComprasPage]
})
export class ComprasPageModule {}
