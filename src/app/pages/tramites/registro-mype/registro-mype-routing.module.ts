import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistroMypePage } from './registro-mype.page';

const routes: Routes = [
  {
    path: '',
    component: RegistroMypePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegistroMypePageRoutingModule {}
