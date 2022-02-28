import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ComponentsModule } from './../../../../components/components.component';

import { IonicModule } from '@ionic/angular';

import { HistoricoMainPageRoutingModule } from './historico-main-routing.module';

import { HistoricoMainPage } from './historico-main.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HistoricoMainPageRoutingModule,
    ComponentsModule
  ],
  declarations: [HistoricoMainPage]
})
export class HistoricoMainPageModule {}
