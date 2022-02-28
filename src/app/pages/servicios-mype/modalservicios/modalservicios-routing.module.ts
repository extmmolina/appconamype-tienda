import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalserviciosPage } from './modalservicios.page';

const routes: Routes = [
  {
    path: '',
    component: ModalserviciosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalserviciosPageRoutingModule {}
