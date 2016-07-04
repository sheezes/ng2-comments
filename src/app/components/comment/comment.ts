import { Component, Input, ViewEncapsulation } from '@angular/core';
import { Comment } from '../../classes/comment';

@Component({
    selector: 'comment',
    templateUrl: './comment.html',
    styleUrls: ['./comment.css'],
    inputs: [ 'data' ],
    encapsulation: ViewEncapsulation.None
})
export class CommentComponenet {

    @Input() data:Comment;

    constructor() {}

}
