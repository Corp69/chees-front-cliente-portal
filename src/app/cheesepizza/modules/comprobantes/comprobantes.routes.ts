import { Routes } from '@angular/router';
//import { AuthGuard } from '@guard';


export const COMPROBANTE_ROUTES: Routes = [
  {
    path: 'factura/pdf',
    title: 'cheese pizza: captura de datos',
    loadComponent: () => import('./pdf/pdf').then(m => m.default),
  },
];
