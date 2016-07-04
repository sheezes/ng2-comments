import { Component, Input } from '@angular/core';
import { NgFor } from '@angular/common';
import { CommentForm } from './components/comment-form/comment-form';
import { CommentComponenet } from './components/comment/comment';
import { Comments } from './services/comments';


@Component({
    selector: 'app',
    templateUrl: './app.html',
    directives: [CommentForm, CommentComponenet],
    styles: [`#ng2-comments { font-family: Arial; font-size: 1.1em; }`],
    providers: [Comments]
})
export class App {

    constructor(private commentsService:Comments) {}

}
