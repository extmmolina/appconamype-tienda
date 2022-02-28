import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListaCursosPageRoutingModule } from './lista-cursos-routing.module';
import { ComponentsModule } from 'src/app/components/components.component';

import { ListaCursosPage } from './lista-cursos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListaCursosPageRoutingModule,
    ComponentsModule
  ],
  declarations: [ListaCursosPage]
})
export class ListaCursosPageModule {}
