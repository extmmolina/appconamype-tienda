import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FeriasCongresosModalPage } from './ferias-congresos-modal.page';

const routes: Routes = [
  {
    path: '',
    component: FeriasCongresosModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FeriasCongresosModalPageRoutingModule {}
