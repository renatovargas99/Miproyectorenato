import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'inicio',
    loadChildren: () => import('./inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'restoranes',
    loadChildren: () => import('./restoranes/restoranes.module').then( m => m.RestoranesPageModule)
  },
  {
    path: 'pagar',
    loadChildren: () => import('./pagar/pagar.module').then( m => m.PagarPageModule)
  },
  {
    path: 'mi-perfil',
    loadChildren: () => import('./mi-perfil/mi-perfil.module').then( m => m.MiPerfilPageModule)
  },
  {
    path: 'registro',
    loadChildren: () => import('./registro/registro.module').then( m => m.RegistroPageModule)
  },
  {
    path: 'listarclientes',
    loadChildren: () => import('./clientes/listarclientes/listarclientes.module').then( m => m.ListarclientesPageModule)
  },
  {
    path: 'addclientes',
    loadChildren: () => import('./clientes/addclientes/addclientes.module').then( m => m.AddclientesPageModule)
  },
  {
    path: 'uptadeclientes',
    loadChildren: () => import('./clientes/uptadeclientes/uptadeclientes.module').then( m => m.UptadeclientesPageModule)
  },
  {
    path: 'detailclientes',
    loadChildren: () => import('./clientes/detailclientes/detailclientes.module').then( m => m.DetailclientesPageModule)
  },
  {
    path: 'deleteclientes',
    loadChildren: () => import('./clientes/deleteclientes/deleteclientes.module').then( m => m.DeleteclientesPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
