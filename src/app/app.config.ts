
import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';

import { routes } from './app.routes';
import { Model } from './models/repository.model';
import { StaticDataSource } from './models/static.dataSource.model';
import { REST_URL, RestDataSource } from './models/rest.datasource';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideHttpClient(),//Asegura que HttpClient esta disponible

    //Servicios de datos
    Model,
    StaticDataSource,
    RestDataSource,
    { provide: REST_URL, useValue: 'http://localhost:3500/courses' }

  ]
};
