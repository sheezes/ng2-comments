import { Comment } from '../classes/comment';
import { Injectable } from '@angular/core';

@Injectable()
export class Comments {

    comments:Array<Comment> = [];

    constructor() {}

    getComments() {
        return this.comments;
    }

    getCommentById(index:Number) {
        return this.comments[index];
    }

}