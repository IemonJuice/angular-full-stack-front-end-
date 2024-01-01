import {Routes} from "@angular/router";

export const routes: Routes = [
  {path: 'welcome', loadChildren: () => import('../hero/hero.module').then(m => m.HeroModule)},
  {path: '', redirectTo:'welcome',pathMatch:'full'}
];
