import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HomeGuard } from './guards/home.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    // canActivate: [HomeGuard],
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/usuario/login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'registro',
    loadChildren: () => import('./pages/usuario/registro/registro.module').then(m => m.RegistroPageModule)
  },
  {
    path: 'cambio-clave',
    loadChildren: () => import('./pages/usuario/cambio-clave/cambio-clave.module').then(m => m.CambioClavePageModule)
  },
  {
    path: 'login-empresa',
    loadChildren: () => import('./pages/usuario/login-empresa/login-empresa.module').then(m => m.LoginEmpresaPageModule)
  },
  {
    path: 'login-mype',
    loadChildren: () => import('./pages/usuario/login-mype/login-mype.module').then(m => m.LoginMypePageModule)
  },
  {
    path: 'finanzas',
    // canActivate: [HomeGuard],
    loadChildren: () => import('./pages/finanzas/index-finanzas/index-finanzas.module').then(m => m.IndexFinanzasPageModule)
  },
  {
    path: 'cursos',
    // canActivate: [HomeGuard],
    loadChildren: () => import('./pages/curso/cursos/cursos.module').then(m => m.CursosPageModule)
  },
  {
    path: 'lista-cursos/:id',
    // canActivate: [HomeGuard],
    loadChildren: () => import('./pages/curso/lista-cursos/lista-cursos.module').then(m => m.ListaCursosPageModule)
  },
  {
    path: 'detalle-curso/:id',
    // canActivate: [HomeGuard],
    loadChildren: () => import('./pages/curso/detalle-curso/detalle-curso.module').then(m => m.DetalleCursoPageModule)
  },
  {
    path: 'gastos',
    canActivate: [HomeGuard],
    loadChildren: () => import('./pages/finanzas/registro/gastos/gastos.module').then(m => m.GastosPageModule)
  },
  {
    path: 'compras',
    canActivate: [HomeGuard],
    loadChildren: () => import('./pages/finanzas/registro/compras/compras.module').then(m => m.ComprasPageModule)
  },
  {
    path: 'ventas',
    canActivate: [HomeGuard],
    loadChildren: () => import('./pages/finanzas/registro/ventas/ventas.module').then(m => m.VentasPageModule)
  },
  {
    path: 'registro-finanzas',
    canActivate: [HomeGuard],
    loadChildren: () => import('./pages/finanzas/registro/registro-tabs/registro-tabs.module').then(m => m.RegistroTabsPageModule)
  },
  {
    path: 'servicios-mype',
    // canActivate: [HomeGuard],
    // tslint:disable-next-line: max-line-length
    loadChildren: () => import('./pages/servicios-mype/index-servicios-mype/index-servicios-mype.module').then(m => m.IndexServiciosMypePageModule)
  },
  {
    path: 'historico-tabs',
    canActivate: [HomeGuard],
    loadChildren: () => import('./pages/finanzas/historico/historico-tabs/historico-tabs.module').then(m => m.HistoricoTabsPageModule)
  },
  {
    path: 'historico-compras',
    canActivate: [HomeGuard],
    // tslint:disable-next-line: max-line-length
    loadChildren: () => import('./pages/finanzas/historico/historico-compras/historico-compras.module').then(m => m.HistoricoComprasPageModule)
  },
  {
    path: 'historico-gastos',
    canActivate: [HomeGuard],
    // tslint:disable-next-line: max-line-length
    loadChildren: () => import('./pages/finanzas/historico/historico-gastos/historico-gastos.module').then(m => m.HistoricoGastosPageModule)
  },
  {
    path: 'historico-ventas',
    canActivate: [HomeGuard],
    // tslint:disable-next-line: max-line-length
    loadChildren: () => import('./pages/finanzas/historico/historico-ventas/historico-ventas.module').then(m => m.HistoricoVentasPageModule)
  },
  {
    path: 'servicios-mype',
    // canActivate: [HomeGuard],
    // tslint:disable-next-line: max-line-length
    loadChildren: () => import('./pages/servicios-mype/index-servicios-mype/index-servicios-mype.module').then(m => m.IndexServiciosMypePageModule)
  },
  {
    path: 'innovacion-tecnologia',
    // canActivate: [HomeGuard],
    // tslint:disable-next-line: max-line-length
    loadChildren: () => import('./pages/mype/innovacion-tecnologia-index/innovacion-tecnologia-index.module').then(m => m.InnovacionTecnologiaIndexPageModule)
  },
  {
    path: 'ferias-congresos',
    // canActivate: [HomeGuard],
    loadChildren: () => import('./pages/mype/ferias-congresos/ferias-congresos.module').then(m => m.FeriasCongresosPageModule)
  },
  {
    path: 'recursos-mypes',
    // canActivate: [HomeGuard],
    loadChildren: () => import('./pages/mype/recursos-mypes/recursos-mypes.module').then(m => m.RecursosMypesPageModule)
  },
  {
    path: 'modalservicios',
    // canActivate: [HomeGuard],
    loadChildren: () => import('./pages/servicios-mype/modalservicios/modalservicios.module').then(m => m.ModalserviciosPageModule)
  },
  {
    path: 'catalogo',
    // canActivate: [HomeGuard],
    loadChildren: () => import('./pages/producto/catalogo/catalogo.module').then(m => m.CatalogoPageModule)
  },
  {
    path: 'hacienda',
    // canActivate: [HomeGuard],
    loadChildren: () => import('./pages/hacienda/index-hacienda/index-hacienda.module').then(m => m.IndexHaciendaPageModule)
  },
  {
    path: 'calendario',
    // canActivate: [HomeGuard],
    loadChildren: () => import('./pages/hacienda/calendario/calendario.module').then(m => m.CalendarioPageModule)
  },
  {
    path: 'videos',
    // canActivate: [HomeGuard],
    loadChildren: () => import('./pages/hacienda/videos/videos.module').then(m => m.VideosPageModule)
  },
  {
    path: 'detalle-producto/:id',
    // canActivate: [HomeGuard],
    loadChildren: () => import('./pages/producto/detalle-producto/detalle-producto.module').then(m => m.DetalleProductoPageModule)
  },
  {
    path: 'carrito-compra',
    canActivate: [HomeGuard],
    loadChildren: () => import('./pages/producto/carrito-compra/carrito-compra.module').then(m => m.CarritoCompraPageModule)
  },
  {
    path: 'compra-producto',
    canActivate: [HomeGuard],
    loadChildren: () => import('./pages/producto/compra-producto/compra-producto.module').then(m => m.CompraProductoPageModule)
  },
  {
    path: 'productos',
    canActivate: [HomeGuard],
    loadChildren: () => import('./pages/producto/productos/productos.module').then(m => m.ProductosPageModule)
  },
  {
    path: 'modal-producto',
    canActivate: [HomeGuard],
    loadChildren: () => import('./pages/producto/modal-producto/modal-producto.module').then(m => m.ModalProductoPageModule)
  },
  {
    path: 'tramites-mype',
    // canActivate: [HomeGuard],
    loadChildren: () => import('./pages/tramites/tramites-mype/tramites-mype.module').then(m => m.TramitesMypePageModule)
  },
  {
    path: 'medio-ambiente',
    // canActivate: [HomeGuard],
    loadChildren: () => import('./pages/mype/medio-ambiente/medio-ambiente.module').then(m => m.MedioAmbientePageModule)
  },
  {
    path: 'registro-mype',
    // canActivate: [HomeGuard],
    loadChildren: () => import('./pages/tramites/registro-mype/registro-mype.module').then(m => m.RegistroMypePageModule)
  },
  {
    path: 'exportaciones',
    // canActivate: [HomeGuard],
    loadChildren: () => import('./pages/tramites/exportaciones/exportaciones.module').then(m => m.ExportacionesPageModule)
  },
  {
    path: 'ferias-congresos-modal',
    loadChildren: () => import('./pages/mype/ferias-congresos-modal/ferias-congresos-modal.module').then(m => m.FeriasCongresosModalPageModule)
  },
  {
    path: 'historico-main',
    loadChildren: () => import('./pages/finanzas/historico/historico-main/historico-main.module').then(m => m.HistoricoMainPageModule)
  },
  {
    path: 'registro-mype-buscar-modal',
    loadChildren: () => import('./pages/tramites/registro-mype-buscar-modal/registro-mype-buscar-modal.module').then(m => m.RegistroMypeBuscarModalPageModule)
  },
  {
    path: 'registro-mype-buscar-segundo-modal',
    loadChildren: () => import('./pages/tramites/registro-mype-buscar-segundo-modal/registro-mype-buscar-segundo-modal.module').then(m => m.RegistroMypeBuscarSegundoModalPageModule)
  },
  {
    path: 'home-private',
    canActivate: [HomeGuard],
    loadChildren: () => import('./pages/home-private/home-private.module').then(m => m.HomePrivatePageModule)
  },
  {
    path: 'modal-buscar',
    loadChildren: () => import('./pages/producto/modal-buscar/modal-buscar.module').then(m => m.ModalBuscarPageModule)
  },  {
    path: 'politica',
    loadChildren: () => import('./pages/politica/politica.module').then( m => m.PoliticaPageModule)
  }




];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
