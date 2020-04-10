import {NgModule, Optional, SkipSelf} from '@angular/core';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import { NgxSpinnerModule } from 'ngx-spinner';
import {AuthGuard} from "./guard/auth.guard";
import {NoAuthGuard} from "./guard/no-auth.guard";
import {TokenInterceptor} from "./interceptor/token.interceptor";
import {throwIfAlreadyLoaded} from "./guard/module-import.guard";


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
      useClass: TokenInterceptor,
      multi: true
    }
  ]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }
}
