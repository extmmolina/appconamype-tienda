import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProductosPageRoutingModule } from './productos-routing.module';

import { ProductosPage } from './productos.page';
import { ModalProductoPage } from '../modal-producto/modal-producto.page';
import { ModalProductoPageModule } from '../modal-producto/modal-producto.module';

@NgModule({
  entryComponents:[
    ModalProductoPage
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProductosPageRoutingModule,
    ModalProductoPageModule
  ],
  declarations: [ProductosPage]
})
export class ProductosPageModule {}
