import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecursosMypesPage } from './recursos-mypes.page';

const routes: Routes = [
  {
    path: '',
    component: RecursosMypesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecursosMypesPageRoutingModule {}
