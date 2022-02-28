import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExportacionesPageRoutingModule } from './exportaciones-routing.module';

import { ExportacionesPage } from './exportaciones.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExportacionesPageRoutingModule
  ],
  declarations: [ExportacionesPage]
})
export class ExportacionesPageModule {}
