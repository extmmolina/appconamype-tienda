import { ComponentsModule } from 'src/app/components/components.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HistoricoVentasPageRoutingModule } from './historico-ventas-routing.module';

import { HistoricoVentasPage } from './historico-ventas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HistoricoVentasPageRoutingModule,
    ComponentsModule
  ],
  declarations: [HistoricoVentasPage]
})
export class HistoricoVentasPageModule { }
