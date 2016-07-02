export class Comment {

    constructor(private comment:String, private user: String, private date:Date) {}

    getComment() {
        return this.comment;
    }

}