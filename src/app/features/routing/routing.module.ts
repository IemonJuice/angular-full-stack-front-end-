import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, RouterOutlet} from "@angular/router";
import {routes} from "./app.routes";



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
    RouterOutlet
  ],
  exports: [
    RouterModule,
    RouterOutlet
  ]
})
export class RoutingModule { }
