import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistroTabsPageRoutingModule } from './registro-tabs-routing.module';

import { RegistroTabsPage } from './registro-tabs.page';

import { ComponentsModule } from '../../../../components/components.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    RegistroTabsPageRoutingModule
  ],
  declarations: [RegistroTabsPage]
})
export class RegistroTabsPageModule {}
