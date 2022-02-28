import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IndexHaciendaPage } from './index-hacienda.page';

const routes: Routes = [
  {
    path: '',
    component: IndexHaciendaPage,
    children: [
      {
        path: 'calendario',
        children: [
          {
            path: '',
            loadChildren: () => import('../calendario/calendario.module').then(m => m.CalendarioPageModule)
          }
        ]
      },
      {
        path: 'videos',
        children: [
          {
            path: '',
            loadChildren: () => import('../videos/videos.module').then(m => m.VideosPageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: '/hacienda/calendario',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IndexHaciendaPageRoutingModule { }
