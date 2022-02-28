import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistroMypeBuscarModalPage } from './registro-mype-buscar-modal.page';

const routes: Routes = [
  {
    path: '',
    component: RegistroMypeBuscarModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegistroMypeBuscarModalPageRoutingModule {}
