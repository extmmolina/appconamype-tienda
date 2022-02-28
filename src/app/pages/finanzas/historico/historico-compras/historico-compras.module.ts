import { ComponentsModule } from './../../../../components/components.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HistoricoComprasPageRoutingModule } from './historico-compras-routing.module';

import { HistoricoComprasPage } from './historico-compras.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HistoricoComprasPageRoutingModule,
    ComponentsModule
  ],
  declarations: [HistoricoComprasPage]
})
export class HistoricoComprasPageModule { }
