import { IPostCommentLink } from './../../../commons/model/ipost-comment-link';
import { Component, OnInit } from '@angular/core';
import _ from 'lodash';
import { Dictionary } from 'src/app/commons/model/idictionary';
import { FetchRequestService } from 'src/app/services/fetch-service.service';
import { IComment } from '../model/icomment';
import { AxiosRequestService } from './../../../services/request-service.service';
import { IPost } from './../../posts/model/ipost';

@Component({
  selector: 'app-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.css']
})
export class CommentListComponent implements OnInit {

  commentsByPost: Dictionary<IComment>; // why not Dictionary<IComment[]>
  subcomponentPost: IPost;
  triggeredCommendId: number;

  constructor(
    private requestService: FetchRequestService<IComment>,
    private otherRequestService: FetchRequestService<IPost>
  ) {
    this.commentsByPost = {};
    this.subcomponentPost = {} as IPost;
    this.triggeredCommendId = 0;
  }

  ngOnInit(): void {
    this.requestService.getAll('https://jsonplaceholder.typicode.com/comments').then((response: Array<IComment>) => {
      this.commentsByPost = _.groupBy(response, 'postId');
    });
  }

  getPost(postCommentLink: IPostCommentLink) {
    this.otherRequestService.get('https://jsonplaceholder.typicode.com/posts', postCommentLink.postId).then((response: IPost) => {
      console.log('post is', response);
      this.subcomponentPost = response;
      this.triggeredCommendId = postCommentLink.commentId;
    });
  }

}
