import {Routes} from "@angular/router";

export const routes: Routes = [
  {path: 'welcome', loadChildren: () => import('../hero/hero.module').then(m => m.HeroModule)},
  {path: 'auth', loadChildren: () => import('../auth/auth.module').then(m => m.AuthModule)},
  {path: 'profile', loadChildren: () => import('../profile/profile.module').then(m => m.ProfileModule)},
  {path: '', redirectTo:'welcome',pathMatch:'full'}
];
