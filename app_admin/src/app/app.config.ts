import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';
// Added withInterceptorsFromDi to make our class-based interceptor work
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http'; // HttpClientModule is deprecated 

import { routes } from './app.routes';
import { authInterceptProvider } from './utils/jwt-interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    // New way to set up HttpClient since HttpClientModule is deprecated
    provideHttpClient(
      withInterceptorsFromDi() // Add this so our JWT interceptor is not ignored
    ), 
    authInterceptProvider
  ]
};