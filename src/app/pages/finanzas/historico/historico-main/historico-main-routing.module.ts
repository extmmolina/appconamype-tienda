import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HistoricoMainPage } from './historico-main.page';

const routes: Routes = [
  {
    path: '',
    component: HistoricoMainPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HistoricoMainPageRoutingModule {}
