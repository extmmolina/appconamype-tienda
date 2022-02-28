import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HistoricoGastosPage } from './historico-gastos.page';

const routes: Routes = [
  {
    path: '',
    component: HistoricoGastosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HistoricoGastosPageRoutingModule {}
