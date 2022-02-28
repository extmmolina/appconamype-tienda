import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TramitesMypePageRoutingModule } from './tramites-mype-routing.module';

import { TramitesMypePage } from './tramites-mype.page';
import {ComponentsModule} from '../../../components/components.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TramitesMypePageRoutingModule,
    ComponentsModule
  ],
  declarations: [TramitesMypePage]
})
export class TramitesMypePageModule {}
