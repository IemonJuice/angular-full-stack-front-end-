import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopicsComponent } from './components/topics/topics.component';
import {RouterModule} from "@angular/router";
import { TopicComponent } from './components/topic/topic.component';
import {ReactiveFormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    TopicsComponent,
    TopicComponent
  ],
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: '', component: TopicsComponent,
        }]),
        ReactiveFormsModule
    ],
  exports:[TopicsComponent]
})
export class TopicsModule { }
