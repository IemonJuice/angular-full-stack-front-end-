import {NgModule, isDevMode} from '@angular/core';
import {BrowserModule, provideClientHydration} from '@angular/platform-browser';


import {AppComponent} from './app.component';
import {FeaturesModule} from "./features/features.module";
import {CoreModule} from "./core/core.module";
import {RouterOutlet} from "@angular/router";
import {HttpClientModule, provideHttpClient, withInterceptors} from "@angular/common/http";
import {authInterceptor} from "./core/interceptors/auth.interceptor";
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import {authReducer} from "./store/reducers/authReducer";



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    RouterOutlet,
    FeaturesModule,
    HttpClientModule,
    StoreModule.forRoot({auth:authReducer}, {}),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
  ],
  providers: [
    provideClientHydration(),
    provideHttpClient(withInterceptors([authInterceptor]))
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
