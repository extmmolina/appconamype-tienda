import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistroTabsPage } from './registro-tabs.page';

const routes: Routes = [
  {
    path: '',
    component: RegistroTabsPage,
    children: [
      {
        path: 'compras',
        children: [
          {
            path: '',
            loadChildren: () => import('../compras/compras.module').then(m => m.ComprasPageModule)
          }
        ]
      },
      {
        path: 'gastos',
        children: [
          {
            path: '',
            loadChildren: () => import('../gastos/gastos.module').then(m => m.GastosPageModule)
          }
        ]
      },
      {
        path: 'ventas',
        children: [
          {
            path: '',
            loadChildren: () => import('../ventas/ventas.module').then(m => m.VentasPageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: '/registro-finanzas/compras',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegistroTabsPageRoutingModule { }
