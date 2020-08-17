import { TranslateModule, TranslateLoader } from "@ngx-translate/core";
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import { HttpClient } from '@angular/common/http';
import { Languages } from './languages.constant';

export function HttpLoaderFactory(http: HttpClient): TranslateLoader {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

export const RootTranslationModule = TranslateModule.forRoot({
  defaultLanguage: Languages.English,
  loader: {
      provide: TranslateLoader,
      useFactory: HttpLoaderFactory,
      deps: [HttpClient],
  }
});

export const ChildTranslationModule = TranslateModule.forChild({
  defaultLanguage: Languages.English,
  loader: {
    provide: TranslateLoader,
    useFactory: HttpLoaderFactory,
    deps: [HttpClient],
  },
  isolate: false,
});