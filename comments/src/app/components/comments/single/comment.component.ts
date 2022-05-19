import { IPostCommentLink } from './../../../commons/model/ipost-comment-link';
import { IPost } from './../../posts/model/ipost';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IComment } from '../model/icomment';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {

  @Input()
  comment: IComment;

  @Input()
  post: IPost;

  @Input()
  triggeredCommentId: number;

  @Output()
  postDetailsEmitter: EventEmitter<IPostCommentLink>;

  constructor() {
    this.comment = {} as IComment;
    this.post = {} as IPost;
    this.triggeredCommentId = 0;
    this.postDetailsEmitter = new EventEmitter();
  }

  ngOnInit(): void {
  }

  showArticle(): void {
    console.log('comment ', this.comment, 'is trying to access its post');
    this.postDetailsEmitter.emit({
      postId: this.comment.postId,
      commentId: this.comment.id
    });
  }

}
