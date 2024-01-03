import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TopicsComponent} from './components/topics/topics.component';
import {RouterModule} from "@angular/router";
import {TopicComponent} from './components/topic/topic.component';
import {ReactiveFormsModule} from "@angular/forms";
import {WriteTopicComponent} from './write-topic/components/write-topic/write-topic.component';


@NgModule({
  declarations: [
    TopicsComponent,
    TopicComponent,
    WriteTopicComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '', component: TopicsComponent,
      },
      {
        path: 'write-topic', component: WriteTopicComponent,
      }
      ]),
    ReactiveFormsModule
  ],
  exports: [TopicsComponent]
})
export class TopicsModule {
}
