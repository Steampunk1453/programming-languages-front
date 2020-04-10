import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LanguageComponent} from "./page/language.component";
import {LanguageRoutes} from "./language-routing.module";
import {SharedModule} from "../../shared/shared.module";



@NgModule({
  declarations: [LanguageComponent],
  imports: [
    SharedModule,
    LanguageRoutes
  ]
})
export class LanguageModule { }
