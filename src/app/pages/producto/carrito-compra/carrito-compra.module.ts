import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CarritoCompraPageRoutingModule } from './carrito-compra-routing.module';

import { CarritoCompraPage } from './carrito-compra.page';
import { ComponentsModule } from 'src/app/components/components.component';
import { CompraProductoPage } from '../compra-producto/compra-producto.page';
import { CompraProductoPageModule } from '../compra-producto/compra-producto.module';

@NgModule({
  entryComponents: [
    CompraProductoPage
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CarritoCompraPageRoutingModule,
    ComponentsModule,
    CompraProductoPageModule
  ],
  declarations: [CarritoCompraPage]
})
export class CarritoCompraPageModule {}
