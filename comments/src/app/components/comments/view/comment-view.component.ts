import { AxiosRequestService } from './../../../services/request-service.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { FetchRequestService } from 'src/app/services/fetch-service.service';
import { IComment } from '../model/icomment';

@Component({
  selector: 'app-comment-view',
  templateUrl: './comment-view.component.html',
  styleUrls: ['./comment-view.component.css']
})
export class CommentViewComponent implements OnInit {

  commentId: number;
  comment: IComment;
  noComments: Number;

  constructor(
    private requestService: FetchRequestService<IComment>,
    private route: ActivatedRoute
  ) {
    this.commentId = 0;
    this.noComments = 0;
    this.comment = {} as IComment;
    console.log('initial', this.comment);
  }

  ngOnInit(): void {
    const that = this;
    this.saveId = this.saveId.bind(this);
    this.subscribeToIdParam(this.saveId);
    this.requestNoOfComments();
  }

  saveId(id: number): void {
    this.commentId = id;
    console.log('I received comment id', id);
  }

  subscribeToIdParam(saveId: (id: number) => void): Subscription {
    return this.route.params.subscribe(response => {
      saveId(Number(response['id']));
      this.requestComment(this.commentId);
    });
  }

  requestComment(id: number): void { // TODO: add return types
    console.log('Trying to send request for comment id', id);
    if (id <= 0) {
      console.error("You cannot request comment with id 0");
      return;
    }
    this.requestService.get('https://jsonplaceholder.typicode.com/comments', id).then(
      response => {
        this.comment = response;
      });
  }

  async requestNoOfComments(): Promise<void> {
    this.noComments = await this.requestService.getAllNo('https://jsonplaceholder.typicode.com/comments?_limit=1');
  }

  previous(): void {
    if (this.commentId - 1 <= 0) {
      console.error('Cannot request previous comment!');
      return;
    }
    this._commentId--;
    this.requestComment(this.commentId);
  }

  next(): void {
    if (this.commentId + 1 >= this.noComments) {
      console.error('Cannot request next comment!');
      return;
    }
    this.commentId++;
    this.requestComment(this.commentId);
  }

  set _commentId(value: number) {
    this.commentId = value;
  }

  get _commentId(): number {
    return this.commentId;
  }

}

interface UrlParams {
  id: string;
}