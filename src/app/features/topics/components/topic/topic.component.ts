import {Component, inject, Input, OnInit} from '@angular/core';
import {Topic} from "../../../../core/models/topic.model";
import {CommentsService} from "../../services/comments.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Store} from "@ngrx/store";
import {AuthState} from "../../../../store/models/state";
import {AddCommentModel} from "../../../../core/models/add-comment.model";

@Component({
  selector: 'app-topic[topic]',
  templateUrl: './topic.component.html',
  styleUrl: './topic.component.scss'
})
export class TopicComponent implements OnInit {
  @Input('topic') topic!: Topic;
  isCommentsToggles: boolean = false;
  commentsService: CommentsService = inject(CommentsService);
  store: Store<{ auth: AuthState }> = inject(Store<{ auth: AuthState }>)
  commentsForm: FormGroup = inject(FormBuilder).group({
    topicId: [''],
    content: ['',[Validators.required]],
    authorName: [''],
    authorCharacter: [''],
  })

  ngOnInit() {
    this.commentsForm.patchValue({
      topicId: this.topic.id,
    })
    this.store.select('auth').subscribe(authData => {
      if ("username" in authData.user) {
        this.commentsForm.patchValue({
          authorName: authData.user.username,
          authorCharacter : authData.user.character,
        })
      }
    })

  }

  addComment() {
    if (this.commentsForm.valid) {
      console.log(this.commentsForm.getRawValue())
       this.commentsService.addComment(this.commentsForm.getRawValue() as AddCommentModel)
         .subscribe(res => console.log(res));
    }
  }
}
