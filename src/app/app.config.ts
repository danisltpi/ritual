import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { OverviewComponent } from './overview/overview.component';

const appRoutes = [
  { path: '', component: OverviewComponent },
  { path: '**', redirectTo: '' },
];
export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(appRoutes),
  ],
};
