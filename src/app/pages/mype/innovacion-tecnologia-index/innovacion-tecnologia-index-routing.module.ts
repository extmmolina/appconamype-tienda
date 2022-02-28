import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InnovacionTecnologiaIndexPage } from './innovacion-tecnologia-index.page';

const routes: Routes = [
  {
    path: '',
    component: InnovacionTecnologiaIndexPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InnovacionTecnologiaIndexPageRoutingModule {}
