import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePrivatePage } from './home-private.page';

const routes: Routes = [
  {
    path: '',
    component: HomePrivatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePrivatePageRoutingModule {}
