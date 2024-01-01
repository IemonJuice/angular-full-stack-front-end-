import {Routes} from "@angular/router";

export const routes: Routes = [
  {path: 'welcome', loadChildren: () => import('./features/hero/hero.module').then(m => m.HeroModule)}
];
