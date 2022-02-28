import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecursosMypesPageRoutingModule } from './recursos-mypes-routing.module';

import { RecursosMypesPage } from './recursos-mypes.page';
import { ComponentsModule } from '../../../components/components.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecursosMypesPageRoutingModule,
    ComponentsModule
  ],
  declarations: [RecursosMypesPage]
})
export class RecursosMypesPageModule {}
