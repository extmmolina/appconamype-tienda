import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TramitesMypePage } from './tramites-mype.page';

const routes: Routes = [
  {
    path: '',
    component: TramitesMypePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TramitesMypePageRoutingModule {}
