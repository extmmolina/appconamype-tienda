import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InnovacionTecnologiaIndexPageRoutingModule } from './innovacion-tecnologia-index-routing.module';

import { InnovacionTecnologiaIndexPage } from './innovacion-tecnologia-index.page';
import { ComponentsModule } from '../../../components/components.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    InnovacionTecnologiaIndexPageRoutingModule
  ],
  declarations: [InnovacionTecnologiaIndexPage]
})
export class InnovacionTecnologiaIndexPageModule {}
