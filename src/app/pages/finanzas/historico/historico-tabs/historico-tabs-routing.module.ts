import { HistoricoVentasPageModule } from './../historico-ventas/historico-ventas.module';
import { HistoricoGastosPageModule } from './../historico-gastos/historico-gastos.module';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HistoricoTabsPage } from './historico-tabs.page';

const routes: Routes = [
  {
    path: '',
    component: HistoricoTabsPage,
    children: [
      {
        path: 'historico-compras',
        children: [
          {
            path: '',
            loadChildren: () => import('../historico-compras/historico-compras.module').then(m => m.HistoricoComprasPageModule)
          }
        ]
      },
      {
        path: 'historico-gastos',
        children: [
          {
            path: '',
            loadChildren: () => import('../historico-gastos/historico-gastos.module').then(m => m.HistoricoGastosPageModule)
          }
        ]
      },
      {
        path: 'historico-ventas',
        children: [
          {
            path: '',
            loadChildren: () => import('../historico-ventas/historico-ventas.module').then(m => m.HistoricoVentasPageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: '/historico-tabs/historico-compras',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HistoricoTabsPageRoutingModule { }
