import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NavModule} from "./components/nav/nav.module";




@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NavModule
  ],

  exports: [NavModule]
})

export class CoreModule {
}
