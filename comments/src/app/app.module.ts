import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommentListComponent } from './components/comments/all/comment-list.component';
import { CommentComponent } from './components/comments/single/comment.component';
import { CommentViewComponent } from './components/comments/view/comment-view.component';
import { BodyPipePipe } from './pipes/body-pipe.pipe';

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
