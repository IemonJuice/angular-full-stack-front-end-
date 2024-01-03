import {Component, inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {WriteTopicService} from "../../services/write-topic.service";
import {AuthState} from "../../../../../store/models/state";
import {Store} from "@ngrx/store";

@Component({
  selector: 'app-write-topic',
  templateUrl: './write-topic.component.html',
  styleUrl: './write-topic.component.scss'
})
export class WriteTopicComponent  implements OnInit{
  store:Store<{auth:AuthState}> = inject(Store<{auth:AuthState}>)
  writeTopicService:WriteTopicService = inject(WriteTopicService);
  topicToSendForm: FormGroup = inject(FormBuilder).group({
    author: [''],
    title: [''],
    content: [''],
    comments: [[]],
  });
  ngOnInit() {
    this.store.select('auth').subscribe(authData => {
      if ("username" in authData.user) {
        this.topicToSendForm.patchValue({
          author: authData.user.id,
        })
      }
    })
  }

  sendTopicForm() {
    if(this.topicToSendForm.valid){
      this.writeTopicService.createTopic(this.topicToSendForm.getRawValue());
    }
  }
}
