import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InscripcionModalPage } from './inscripcion-modal.page';

const routes: Routes = [
  {
    path: '',
    component: InscripcionModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InscripcionModalPageRoutingModule {}
