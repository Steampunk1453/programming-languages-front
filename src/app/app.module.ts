import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HomeComponent } from './modules/home/page/home.component';
import {NavComponent} from "./layout/nav/nav.component";
import {AuthModule} from "./modules/auth/auth.module";
import {CoreModule} from "./core/core.module";
import {SharedModule} from "./shared/shared.module";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { LanguageComponent } from './modules/language/page/language.component';
import {ContentLayoutComponent} from "./layout/content-layout/content-layout.component";
import {AuthLayoutComponent} from "./layout/auth-layout/auth-layout.component";

@NgModule({
  declarations: [
    AppComponent,
    ContentLayoutComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    AuthLayoutComponent
  ],
  imports: [
    // angular
    BrowserModule,
    // 3rd party
    AuthModule,
    // core & shared
    CoreModule,
    SharedModule,
    // app
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
