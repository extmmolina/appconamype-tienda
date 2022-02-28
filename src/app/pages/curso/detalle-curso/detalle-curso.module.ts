import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetalleCursoPageRoutingModule } from './detalle-curso-routing.module';

import { DetalleCursoPage } from './detalle-curso.page';
import { ComponentsModule } from 'src/app/components/components.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetalleCursoPageRoutingModule,
    ComponentsModule,
  ],
  declarations: [DetalleCursoPage]
})
export class DetalleCursoPageModule {}
