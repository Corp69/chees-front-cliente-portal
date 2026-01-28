import { Routes } from '@angular/router';
//import { AuthGuard } from '@guard';


export const CLIENTE_ROUTES: Routes = [
  {
    path: 'datos',
    title: 'cheese pizza: captura de datos',
    loadComponent: () => import('./captura-datos/captura-datos').then(m => m.default),
  },
];
