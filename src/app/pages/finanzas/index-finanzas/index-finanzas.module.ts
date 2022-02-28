import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IndexFinanzasPageRoutingModule } from './index-finanzas-routing.module';

import { IndexFinanzasPage } from './index-finanzas.page';
import { ComponentsModule } from '../../../components/components.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    IndexFinanzasPageRoutingModule
  ],
  declarations: [IndexFinanzasPage]
})
export class IndexFinanzasPageModule {}
