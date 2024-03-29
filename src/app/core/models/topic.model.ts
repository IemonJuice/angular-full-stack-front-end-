import {CommentModel} from "./comment.model";

export interface Topic {
  id?: number;
  title: string;
  author:string;
  content: string;
  comments: CommentModel[];
}
