import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HistoricoComprasPage } from './historico-compras.page';

const routes: Routes = [
  {
    path: '',
    component: HistoricoComprasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HistoricoComprasPageRoutingModule {}
