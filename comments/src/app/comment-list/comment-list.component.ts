import { Dictionary } from './../../../../todolist/src/app/tasks/idictionary';
import { Component, OnInit } from '@angular/core';
import { IComment } from './icomment';
import _ from 'lodash';
import { RequestServiceService } from '../services/request-service.service';
import { FetchServiceService } from '../services/fetch-service.service';

@Component({
  selector: 'app-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.css']
})
export class CommentListComponent implements OnInit {

  commentsByPost: Dictionary<IComment>; // why not Dictionary<IComment[]>

  constructor(private requestService: FetchServiceService<IComment>) {
    this.commentsByPost = {};
  }

  ngOnInit(): void {
    this.requestService.getAll('https://jsonplaceholder.typicode.com/comments').then((response: Array<IComment>) => {
      // console.log(response.data);
      this.commentsByPost = _.groupBy(response, 'postId');
      console.log(this.commentsByPost);
    });
  }

}
