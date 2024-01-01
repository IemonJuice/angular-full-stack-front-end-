import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeroComponent} from './hero.component';
import {RouterModule} from "@angular/router";


@NgModule({
  declarations: [
    HeroComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([{
      path: '', component: HeroComponent, title: 'Welcome!'
    }])
  ],
  exports: [HeroComponent]
})
export class HeroModule {
}
