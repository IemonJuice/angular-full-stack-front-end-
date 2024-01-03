import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Topic} from "../../../../core/models/topic.model";

@Injectable({
  providedIn: 'root'
})
export class WriteTopicService {

  constructor(private http:HttpClient) { }

  createTopic(topic:Topic) {
    return this.http.post<Topic>('http://localhost:3000/topics',topic).subscribe(a => console.log(a));
  }
}
