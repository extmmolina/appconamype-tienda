import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IndexServiciosMypePage } from './index-servicios-mype.page';

const routes: Routes = [
  {
    path: '',
    component: IndexServiciosMypePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IndexServiciosMypePageRoutingModule {}
