import { IPagination } from './../../../commons/model/ipagination';
import { Observable } from 'rxjs';
import { ActivatedRoute, Params, Router } from '@angular/router';
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
  pagination: IPagination;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private requestService: FetchRequestService<IComment>,
    private otherRequestService: FetchRequestService<IPost>
  ) {
    this.commentsByPost = {};
    this.subcomponentPost = {} as IPost;
    this.triggeredCommendId = 0;
    this.pagination = {
      page: 1,
      perPage: 1 // post per page
    };
  }

  ngOnInit(): void {
    const pathParams: Observable<Params> = this.route.params;
    pathParams.subscribe({
      next: pathParams => {
        for (let paramName in pathParams) {
          (this.pagination as any)[paramName] = Number(pathParams[paramName]);
        }
        console.log('Pagination is', this.pagination);
        if (this.pagination.page <= 0) {
          this.router.navigate([1, this.pagination.perPage]); // ts (angular router)
          // window.location.href = '/1/' + this.pagination.perPage; // js pur
        }
      },
      error: errorResponse => {
        console.error('There was a problem reading url params: ' + errorResponse);
      },
      complete: () => {
        console.info("All params are ready");
      }
    })
    this.requestService.getAll('https://jsonplaceholder.typicode.com/comments').then((response: Array<IComment>) => {
      this.commentsByPost = _.groupBy(response, 'postId');
    });
    // this.obsTest();
  }

  getPost(postCommentLink: IPostCommentLink) {
    this.otherRequestService.get('https://jsonplaceholder.typicode.com/posts', postCommentLink.postId).then((response: IPost) => {
      console.log('post is', response);
      this.subcomponentPost = response;
      this.triggeredCommendId = postCommentLink.commentId;
    });
  }

  prev(): void{ 

  }

  next(): void {

  }

  obsTest(): void {
    const myObs = new Observable<number>(obs => {
      for (var i = 0; i < 2; i++) {
        const myNo = Math.random();
        const succes = Math.round(myNo);
        if (succes) {
          obs.next(myNo);
        } else {
          obs.error(myNo);
        }
      }
      obs.complete();
    });
    myObs.subscribe(nextResponse => {
      console.log("I received ", nextResponse);
    }, errorResponse => {
      console.error("I received ", errorResponse);
    }, () => {
      console.info('Observer completed');
    });
  }

}
