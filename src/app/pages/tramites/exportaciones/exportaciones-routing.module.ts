import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExportacionesPage } from './exportaciones.page';

const routes: Routes = [
  {
    path: '',
    component: ExportacionesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExportacionesPageRoutingModule {}
