import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./usuarios-home.page').then((module) => module.UsuariosHomePage),
  },
  {
    path: ':id',
    loadComponent: () =>
      import('./usuario-detail.page').then((module) => module.UsuarioDetailPage),
  },
];
