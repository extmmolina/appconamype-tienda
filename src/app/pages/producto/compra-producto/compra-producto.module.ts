import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CompraProductoPageRoutingModule } from './compra-producto-routing.module';

import { CompraProductoPage } from './compra-producto.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CompraProductoPageRoutingModule
  ],
  declarations: [CompraProductoPage]
})
export class CompraProductoPageModule {}
