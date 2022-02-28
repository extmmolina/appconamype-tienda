import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetalleProductoPageRoutingModule } from './detalle-producto-routing.module';

import { DetalleProductoPage } from './detalle-producto.page';
import { ComponentsModule } from 'src/app/components/components.component';
import { CompraProductoPage } from '../compra-producto/compra-producto.page';
import { CompraProductoPageModule } from '../compra-producto/compra-producto.module';
import { SwiperModule } from 'swiper/angular';
import { CarritoCompraPage } from '../carrito-compra/carrito-compra.page';

@NgModule({
  entryComponents: [
    CompraProductoPage
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetalleProductoPageRoutingModule,
    ComponentsModule,
    CompraProductoPageModule,
    SwiperModule
  ],
  providers: [CarritoCompraPage],
  declarations: [DetalleProductoPage]
})
export class DetalleProductoPageModule {}
