import {RouterModule, Routes} from '@angular/router';
import {LanguageComponent} from "./page/language.component";

const routes: Routes = [
  {
    path: '',
    component: LanguageComponent
  }
];

export const LanguageRoutes = RouterModule.forChild(routes);
