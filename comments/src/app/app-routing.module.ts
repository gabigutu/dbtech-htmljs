import { CommentViewComponent } from './comment-view/comment-view.component';
import { CommentListComponent } from './comment-list/comment-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{
  path: '',
  component: CommentListComponent
}, {
  path: 'details/:id',
  component: CommentViewComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
