import {
  ApplicationConfig,
  provideZonelessChangeDetection,
  isDevMode,
  importProvidersFrom
} from '@angular/core';
import { provideRouter, withViewTransitions } from '@angular/router';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideServiceWorker } from '@angular/service-worker';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { routes } from './app.routes';
import { providePrimeNG } from 'primeng/config';
import Aura from '@primeng/themes/aura';




export const appConfig: ApplicationConfig = {
  providers: [
    provideZonelessChangeDetection(),
    //PWA
    provideServiceWorker('ngsw-worker.js', {
      enabled: !isDevMode(),
      registrationStrategy: 'registerWhenStable:30000',
    }),
    //animaciones
    provideAnimations(),
    //routes
    provideRouter(routes, withViewTransitions({ skipInitialTransition: true, onViewTransitionCreated(transitionInfo) { }, })),
    //forms
    importProvidersFrom(ReactiveFormsModule),
    // cliente Http
    provideHttpClient(withFetch()),
    //proveedor prime ng
    providePrimeNG({
      ripple: true, // efectos de ondulación
      theme: {
        preset: Aura,
        options: { darkModeSelector: '.app-dark' }
      }
    }), provideServiceWorker('ngsw-worker.js', {
            enabled: !isDevMode(),
            registrationStrategy: 'registerWhenStable:30000'
          })
  ]
};
