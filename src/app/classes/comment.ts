export class Comment {

    static ICONS:Array<String> = ['fa-smile-o', 'fa-wheelchair-alt', 'fa-user-secret', 'fa-street-view', 'fa-smile-o',
        'fa-snapchat-ghost', 'fa-reddit-alien', 'fa-github-alt', 'fa-female', 'fa-bug', 'fa-smile-o' ];

    static COLORS:Array<String> = ['#f9a73d', '#f14c84', '#0ab9a9', '#2b91e2', '#942be2', '#699ab1',
        '#fbb6e2', '#d8cc66', '#2fcc8c', '#4852d2', '#bfbaba', '#ec1f1f','#0eb12b','#0e4eb1','#795548'];

    constructor(private _comment:String,
                private _user: String,
                private id:Number,
                private _date:Date = new Date(),
                private _icon:String = null,
                private _color:String = null) {

        this._icon = Comment.ICONS[Math.floor(Math.random() * Comment.ICONS.length)];
        this._color = Comment.COLORS[Math.floor(Math.random() * Comment.COLORS.length)];

    }

    get comment():String {
        return this._comment;
    }

    get poster():String {
        return this._user;
    }

    get icon():String {
        return this._icon;
    }

    get color():String {
        return this._color;
    }

    get datePosted():Date {
        return this._date;
    }

}