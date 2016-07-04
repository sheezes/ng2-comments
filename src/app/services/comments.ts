import { Comment } from '../classes/comment';
import { Injectable } from '@angular/core';

@Injectable()
export class Comments {

    _comments:Array<Comment> = [];

    constructor() {}

    get comments():Array<Comment> {
        return this._comments;
    }

    addComment(text:String = '', user:String = '') {
        this._comments.push(new Comment(text, user, this._comments.length));
    }

}