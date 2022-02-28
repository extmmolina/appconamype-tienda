import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IndexFinanzasPage } from './index-finanzas.page';

const routes: Routes = [
  {
    path: '',
    component: IndexFinanzasPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IndexFinanzasPageRoutingModule { }
