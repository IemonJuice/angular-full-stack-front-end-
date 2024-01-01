import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoginComponent} from './components/login/login.component';
import {RegisterComponent} from './components/register/register.component';
import {RouterModule} from "@angular/router";


@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
      path: 'login', component: LoginComponent
      },
      {
        path: 'register', component: RegisterComponent
      }
      ]
    )
  ]
})
export class AuthModule {
}
