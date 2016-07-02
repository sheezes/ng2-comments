import { Component, Input } from '@angular/core';
import { CommentForm } from './components/comment-form/comment-form';

@Component({
  selector: 'app',
  templateUrl: './app.html',
  directives: [ CommentForm ],
  styles: [`#ng2-comments { font-family: Arial; font-size: 13px; }`]
})
export class App {

  constructor() {}

}