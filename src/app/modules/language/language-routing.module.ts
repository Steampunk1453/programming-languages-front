import {RouterModule, Routes} from '@angular/router';
import {LanguageComponent} from "./page/detail/language.component";
import {LanguageListComponent} from "./page/list/language-list.component";

const routes: Routes = [
  {
    path: 'detail',
    component: LanguageComponent
  },
  {
    path: 'detail/:id',
    component: LanguageComponent
  },
  {
    path: 'list',
    component: LanguageListComponent
  },
];

export const LanguageRoutes = RouterModule.forChild(routes);
