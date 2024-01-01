import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HeroModule} from "./hero/hero.module";



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HeroModule
  ],
  exports:[HeroModule]
})
export class FeaturesModule { }
