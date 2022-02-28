import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginMypePage } from './login-mype.page';

const routes: Routes = [
  {
    path: '',
    component: LoginMypePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginMypePageRoutingModule {}
