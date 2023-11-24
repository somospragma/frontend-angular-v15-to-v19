import { ApplicationConfig } from '@angular/core';
import { importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';
import { routes } from './app.routes';

import { HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { environment } from '@src/environments/environment.development';

/**
 * Create a factory function that returns a new TranslateHttpLoader.
 * @param {HttpClient} http
 * @returns {TranslateHttpLoader}
 */
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

/**
 * Configuración de la aplicación, Opciones de configuración para bootstrapApplication en main.ts. providers: Proveedores de servicios para la aplicación.
 * @export
 * @class AppConfig
 * @implements {ApplicationConfig}
 * @returns {ApplicationConfig} AppConfig
 */
export const AppConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(withInterceptorsFromDi()),
    provideAnimations(),
    importProvidersFrom(
      TranslateModule.forRoot({
        loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient],
        },
        defaultLanguage: environment.DEFAULT_LANGUAGE,
      })
    ),
  ],
};
