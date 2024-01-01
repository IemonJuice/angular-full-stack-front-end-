import {NgModule} from '@angular/core';
import {BrowserModule, provideClientHydration} from '@angular/platform-browser';


import {AppComponent} from './app.component';
import {FeaturesModule} from "./features/features.module";
import {CoreModule} from "./core/core.module";
import {RouterOutlet} from "@angular/router";



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    RouterOutlet,
    FeaturesModule,
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
