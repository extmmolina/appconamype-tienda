import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IndexServiciosMypePageRoutingModule } from './index-servicios-mype-routing.module';

import { ComponentsModule } from 'src/app/components/components.component';

import { IndexServiciosMypePage } from './index-servicios-mype.page';
import { ModalserviciosPage } from '../modalservicios/modalservicios.page';
import { ModalserviciosPageModule } from '../modalservicios/modalservicios.module';


@NgModule({
  entryComponents: [
    ModalserviciosPage
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IndexServiciosMypePageRoutingModule,
    ComponentsModule,
    ModalserviciosPageModule
  ],
  declarations: [IndexServiciosMypePage]
})
export class IndexServiciosMypePageModule {}
