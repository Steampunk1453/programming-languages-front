import {NgModule, Optional, SkipSelf} from '@angular/core';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {NgxSpinnerModule} from 'ngx-spinner';
import {AuthGuard} from "./guard/auth.guard";
import {NoAuthGuard} from "./guard/no-auth.guard";
import {throwIfAlreadyLoaded} from "./guard/module-import.guard";
import {HttpConfigInterceptor} from "./interceptor/http-config.interceptor";


@NgModule({
  declarations: [],
  imports: [
    HttpClientModule,
    NgxSpinnerModule
  ],
  providers: [
    AuthGuard,
    NoAuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpConfigInterceptor,
      multi: true
    }
  ]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }
}
