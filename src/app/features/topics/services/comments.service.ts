import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {AddCommentModel} from "../../../core/models/add-comment.model";

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  constructor(private http:HttpClient) { }

  addComment(comment:AddCommentModel){
    return this.http.post(`http://localhost:3000/comments/${comment.topicId}`,comment)
  }
}
