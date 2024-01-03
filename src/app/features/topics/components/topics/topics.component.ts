import {Component, inject, OnInit} from '@angular/core';
import {TopicsService} from "../../services/topics.service";
import {Topic} from "../../../../core/models/topic.model";

@Component({
  selector: 'app-topics',
  templateUrl: './topics.component.html',
  styleUrl: './topics.component.scss'
})
export class TopicsComponent implements OnInit {
  topicsService: TopicsService = inject(TopicsService)
  topics: Topic[] = [];

  ngOnInit() {
    this.topicsService.getAllTopics().subscribe((topics: Topic[]) => {
      this.topics = topics;
      console.log(this.topics)
    })

  }
}
