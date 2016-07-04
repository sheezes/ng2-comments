import { Component } from '@angular/core';
import { NgModel } from '@angular/common';
import { Comments } from '../../services/comments';

@Component({
    selector: 'comment-form',
    templateUrl: './comment-form.html',
    styleUrls: ['comment-form.css'],
})
export class CommentForm {

    commentText:String;

    constructor(private commentsService:Comments) {}

    addComment() {
        this.commentsService.addComment(this.commentText,'Shai');
        console.log(this.commentsService.comments)
    }
}
