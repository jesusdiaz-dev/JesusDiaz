import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimations } from '@angular/platform-browser/animations';
import { HttpClient, HttpClientJsonpModule, provideHttpClient, withJsonpSupport } from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

// i use it in the forRoot below.
const provideTranslation = () => ({
  defaultLanguage: 'en',
  loader: {
    provide: TranslateLoader,
    useFactory: HttpLoaderFactory,
    deps: [HttpClient],
  },
});

// AoT requires an exported function for factories
// required for AoT 
function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), 
    provideAnimations(),
    provideHttpClient(
      withJsonpSupport() // ~ revisar si no es necesario, quitar si no se usa.
    ),
    importProvidersFrom([
      // HttpClientJsonpModule, // v18 is deprecated, now in provideHttpClient we use the function withJsonSupport
      TranslateModule.forRoot(provideTranslation())
    ]),
  ]
};
