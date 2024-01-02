import {Component, Input} from '@angular/core';
import {Topic} from "../../../../core/models/topic.model";

@Component({
  selector: 'app-topic[topic]',
  templateUrl: './topic.component.html',
  styleUrl: './topic.component.scss'
})
export class TopicComponent {
  @Input('topic') topic!: Topic;
  isCommentsToggles: boolean = false;

}
