import {NgModule} from '@angular/core';
import {LanguageComponent} from "./page/detail/language.component";
import {LanguageRoutes} from "./language-routing.module";
import {SharedModule} from "../../shared/shared.module";
import {MatRadioModule} from "@angular/material/radio";
import {LanguageListComponent} from './page/list/language-list.component';
import {MatTableModule} from "@angular/material/table";
import {MatPaginatorModule} from "@angular/material/paginator";


@NgModule({
    declarations: [LanguageComponent, LanguageListComponent],
    exports: [
        LanguageListComponent
    ],
    imports: [
        SharedModule,
        LanguageRoutes,
        MatRadioModule,
        MatTableModule,
        MatPaginatorModule
    ]
})
export class LanguageModule { }
