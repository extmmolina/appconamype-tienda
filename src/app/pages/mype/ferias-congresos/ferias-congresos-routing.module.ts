import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FeriasCongresosPage } from './ferias-congresos.page';

const routes: Routes = [
  {
    path: '',
    component: FeriasCongresosPage
  },  {
    path: 'inscripcion-modal',
    loadChildren: () => import('./inscripcion-modal/inscripcion-modal.module').then( m => m.InscripcionModalPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FeriasCongresosPageRoutingModule {}
