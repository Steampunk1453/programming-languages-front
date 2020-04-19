import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeComponent} from "./page/home.component";
import {SharedModule} from "../../shared/shared.module";
import {HomeRoutingModule} from "./home-routing.module";
import {LanguageModule} from "../language/language.module";


@NgModule({
  declarations: [HomeComponent],
    imports: [
        CommonModule,
        SharedModule,
        HomeRoutingModule,
        LanguageModule
    ]
})
export class HomeModule { }
