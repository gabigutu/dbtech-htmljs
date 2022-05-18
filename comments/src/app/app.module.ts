import { CommentViewComponent } from './comment-view/comment-view.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommentListComponent } from './comment-list/comment-list.component';
import { CommentComponent } from './comment-list/comment/comment.component';
import { CommonModule } from '@angular/common';
import { BodyPipePipe } from './comment-view/body-pipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CommentListComponent,
    CommentComponent,
    CommentViewComponent,
    BodyPipePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
