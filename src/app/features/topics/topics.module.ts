import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopicsComponent } from './components/topics/topics.component';
import {RouterModule} from "@angular/router";



@NgModule({
  declarations: [
    TopicsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([{
      path:'',component:TopicsComponent,
    }])
  ],
  exports:[TopicsComponent]
})
export class TopicsModule { }
