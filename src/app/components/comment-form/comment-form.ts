import { Component } from '@angular/core';
import { NgModel } from '@angular/common';
import { Comment } from '../../classes/comment';

@Component({
    selector: 'comment-form',
    templateUrl: './comment-form.html',
    styleUrls: ['comment-form.css'],
})
export class CommentForm {

    commentText:String;

    constructor() {}

    addComment() {
        console.log(this.commentText)
    }
}
