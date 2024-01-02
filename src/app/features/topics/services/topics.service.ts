import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Topic} from "../../../core/models/topic.model";

@Injectable({
  providedIn: 'root'
})
export class TopicsService {

  constructor(private http:HttpClient) { }

  getAllTopics() {
    return this.http.get<Topic[]>('http://localhost:3000/topics')
  }
}
