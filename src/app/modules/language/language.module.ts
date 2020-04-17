import {NgModule} from '@angular/core';
import {LanguageComponent} from "./page/language.component";
import {LanguageRoutes} from "./language-routing.module";
import {SharedModule} from "../../shared/shared.module";
import {MatRadioModule} from "@angular/material/radio";


@NgModule({
  declarations: [LanguageComponent],
    imports: [
        SharedModule,
        LanguageRoutes,
        MatRadioModule
    ]
})
export class LanguageModule { }
