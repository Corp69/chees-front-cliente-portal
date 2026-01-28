import { Routes } from '@angular/router';
//import { AuthGuard } from './auth/login/guards/auth.guard';

export const routes: Routes = [
  {
    path: 'ControlCliente',
    loadComponent: () => import('./cheesepizza/cheesepizza.component').then((m) => m.default),
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./cheesepizza/modules/cliente/cliente.routes').then((m) => m.CLIENTE_ROUTES),
      },
    ],
  },

  {
    path: 'ControlComprobante',
    loadComponent: () => import('./cheesepizza/cheesepizza.component').then((m) => m.default),
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./cheesepizza/modules/comprobantes/comprobantes.routes').then((m) => m.COMPROBANTE_ROUTES),
      },
    ],
  },


  {
    path: 'dashboard',
    loadComponent: () => import('./cheesepizza/principal/principal.component').then((m) => m.default),
  },
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
];
