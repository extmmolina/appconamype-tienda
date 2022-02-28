import { ComponentsModule } from 'src/app/components/components.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HistoricoGastosPageRoutingModule } from './historico-gastos-routing.module';

import { HistoricoGastosPage } from './historico-gastos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HistoricoGastosPageRoutingModule,
    ComponentsModule
  ],
  declarations: [HistoricoGastosPage]
})
export class HistoricoGastosPageModule { }
