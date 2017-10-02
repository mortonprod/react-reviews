/**
 * This class is inherited by fake and default class.
 * It describes the bases for all other review type objects.
 */

export default class ReviewTemplate {
    private static handlers = [] as any;
    public date = null as Date;
    public dislikes = 0;
    public likes = 0;
    public message = "";
    public name = "";
    public pic = "";
    public stars = 0;
    public verified = false;
    public reports = 0;
    constructor(obj: review) {
        this.date = obj.date;
        this.dislikes = obj.dislikes;
        this.likes = obj.likes;
        this.message = obj.message;
        this.name = obj.name;
        this.pic = obj.pic;
        this.stars = obj.stars;
        this.verified = obj.verified;
        this.reports = obj.reports;
        this.likeFunc = this.likeFunc.bind(this);
        this.dislikeFunc = this.dislikeFunc.bind(this);
        this.reportFunc = this.reportFunc.bind(this);
    }
    /**
     * This function will increase the like element in the object by one.
     */
    public likeFunc() {
        console.log("Like:" + this.likes);
        this.likes = this.likes + 1;
        this.fire();
    }
    /**
     * This function will increase the like element in the object by one.
     */
    public dislikeFunc() {
        console.log("dislike: " + this.dislikes);
        this.dislikes = this.dislikes + 1;
        this.fire();
    }
    public reportFunc() {
        console.log("Reports: " + this.reports);
        this.reports = this.reports + 1;
        this.fire();
    }
    /**
     * This function will take all the functions which need to fire when we update the review.
     */
    public subscribe(fn: any) {
        ReviewTemplate.handlers.push(fn);
    }
    public fire() {
        ReviewTemplate.handlers.forEach((el: any) => {
            el({});

        });
    }
}
