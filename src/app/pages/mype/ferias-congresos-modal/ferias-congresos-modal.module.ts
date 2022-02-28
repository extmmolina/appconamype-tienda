import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { FeriasCongresosModalPageRoutingModule } from './ferias-congresos-modal-routing.module';
import { FeriasCongresosModalPage } from './ferias-congresos-modal.page';
import { InscripcionModalPage } from '../ferias-congresos/inscripcion-modal/inscripcion-modal.page';
import { InscripcionModalPageModule } from '../ferias-congresos/inscripcion-modal/inscripcion-modal.module';

@NgModule({
  entryComponents: [
    InscripcionModalPage
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FeriasCongresosModalPageRoutingModule,
    InscripcionModalPageModule
  ],
  declarations: [FeriasCongresosModalPage]
})
export class FeriasCongresosModalPageModule {}
