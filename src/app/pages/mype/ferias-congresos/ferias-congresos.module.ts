import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FeriasCongresosPageRoutingModule } from './ferias-congresos-routing.module';

import { FeriasCongresosPage } from './ferias-congresos.page';
import { ComponentsModule } from 'src/app/components/components.component';
import {FeriasCongresosModalPage} from '../ferias-congresos-modal/ferias-congresos-modal.page';
import {FeriasCongresosModalPageModule} from '../ferias-congresos-modal/ferias-congresos-modal.module';

@NgModule({
  entryComponents: [
    FeriasCongresosModalPage
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FeriasCongresosPageRoutingModule,
    ComponentsModule,
    FeriasCongresosModalPageModule
  ],
  declarations: [FeriasCongresosPage]
})
export class FeriasCongresosPageModule {}
