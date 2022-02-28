import { ComponentsModule } from './../../../../components/components.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HistoricoTabsPageRoutingModule } from './historico-tabs-routing.module';

import { HistoricoTabsPage } from './historico-tabs.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HistoricoTabsPageRoutingModule,
    ComponentsModule,
  ],
  declarations: [HistoricoTabsPage]
})
export class HistoricoTabsPageModule {}
