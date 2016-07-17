import { Component, Input } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { SortByField } from './pipes/SortByField';
import { CommentForm } from './components/comment-form/comment-form';
import { CommentComponenet } from './components/comment/comment';
import { Comments } from './services/comments';



@Component({
    selector: 'app',
    templateUrl: './app.html',
    directives: [CommentForm, CommentComponenet],
    styleUrls: ['app.css'],
    providers: [Comments],
    pipes: [SortByField]
})
export class App {

    _reverseDate:Boolean = true;

    constructor(private commentsService:Comments) {
        this._reverseDate = true;
    }

    changeSortingOrder() {
        this._reverseDate = !this.reverseDate;
    }

    get reverseDate() {
        return this._reverseDate;
    }
}
