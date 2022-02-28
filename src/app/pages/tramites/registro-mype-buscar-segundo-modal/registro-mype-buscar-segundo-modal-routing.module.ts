import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistroMypeBuscarSegundoModalPage } from './registro-mype-buscar-segundo-modal.page';

const routes: Routes = [
  {
    path: '',
    component: RegistroMypeBuscarSegundoModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegistroMypeBuscarSegundoModalPageRoutingModule {}
