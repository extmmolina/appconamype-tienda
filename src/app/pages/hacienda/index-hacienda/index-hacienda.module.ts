import { ComponentsModule } from 'src/app/components/components.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IndexHaciendaPageRoutingModule } from './index-hacienda-routing.module';

import { IndexHaciendaPage } from './index-hacienda.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IndexHaciendaPageRoutingModule,
    ComponentsModule
  ],
  declarations: [IndexHaciendaPage]
})
export class IndexHaciendaPageModule { }
