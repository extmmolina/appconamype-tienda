import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CompraProductoPage } from './compra-producto.page';

const routes: Routes = [
  {
    path: '',
    component: CompraProductoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CompraProductoPageRoutingModule {}
