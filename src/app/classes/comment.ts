export class Comment {

    constructor(private _comment:String,
                private _user: String,
                private id:Number,
                private _date:Date = new Date()) {
    }

    get comment():String {
        return this._comment;
    }

    get poster():String {
        return this._user;
    }


    get datePosted():Date {
        return this._date;
    }

}