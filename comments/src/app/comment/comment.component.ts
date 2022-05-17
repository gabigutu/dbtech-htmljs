import { IComment } from './../comment-list/icomment';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {

  @Input()
  comment: IComment;

  constructor() {
    this.comment = {
      postId: 0,
      id: 0,
      name: '',
      body: '',
      email: ''
    };
  }

  ngOnInit(): void {
  }

}
