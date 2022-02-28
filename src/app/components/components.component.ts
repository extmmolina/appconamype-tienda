import { GridComponent } from './grid/grid.component';
import { HistoricoFinanzasComponent } from './historico-finanzas/historico-finanzas.component';
import { ItemsComponent } from './items/items.component';
import { NgxMaskIonicModule } from 'ngx-mask-ionic';
import { FormFinanzasComponent } from './form-finanzas/form-finanzas.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GridcatalogoComponent } from './gridcatalogo/gridcatalogo.component';
import { ProductosNuevosComponent } from './productos-nuevos/productos-nuevos.component';
import { CatalogoProductosComponent } from './catalogo-productos/catalogo-productos.component';
import {MenuListComponent} from './menu-list/menu-list.component';
import { ExpandibleComponent } from './expandible/expandible.component';
import { SwiperModule } from 'swiper/angular';


@NgModule({
  declarations: [
    HeaderComponent,
    MenuComponent,
    FormFinanzasComponent,
    ItemsComponent,
    HistoricoFinanzasComponent,
    GridComponent,
    GridcatalogoComponent,
    ProductosNuevosComponent,
    CatalogoProductosComponent,
    MenuListComponent,
    ExpandibleComponent
  ],
  exports: [
    HeaderComponent,
    MenuComponent,
    FormFinanzasComponent,
    ItemsComponent,
    HistoricoFinanzasComponent,
    GridComponent,
    GridcatalogoComponent,
    ProductosNuevosComponent,
    CatalogoProductosComponent,
    MenuListComponent,
    ExpandibleComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    NgxMaskIonicModule,
    SwiperModule
  ]
})

export class ComponentsModule {}
