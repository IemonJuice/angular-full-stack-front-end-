import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeroModule} from "./hero/hero.module";
import {RoutingModule} from "./routing/routing.module";
import {AuthModule} from "./auth/auth.module";


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HeroModule,
    RoutingModule
  ],
  exports: [HeroModule, RoutingModule,AuthModule]
})
export class FeaturesModule {
}
