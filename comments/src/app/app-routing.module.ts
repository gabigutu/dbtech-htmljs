import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommentListComponent } from './components/comments/all/comment-list.component';
import { CommentViewComponent } from './components/comments/view/comment-view.component';

const routes: Routes = [{
  path: '',
  component: CommentListComponent
}, {
  path: 'details/:id',
  component: CommentViewComponent
}, {
  path: ':page',
  component: CommentListComponent
}, {
  path: ':page/:perPage',
  component: CommentListComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
