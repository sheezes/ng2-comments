import { Component, Input } from '@angular/core';
import { Comment } from '../../classes/comment';

@Component({
    selector: 'comment',
    templateUrl: './comment.html',
    inputs: [ 'data' ]
})
export class CommentComponenet {

    @Input() data:Comment;

    constructor() {}

}
