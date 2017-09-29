/**
 * This constructor function(class) will simply return the object passed.
 * The prototype functions will then be attached to check object.
 */
class ReviewObj {
    public date = null as Date;
    public dislikes = 0;
    public likes = 0;
    public message = "";
    public name = "";
    public pic = "";
    public stars = 0;
    public verified = false;

    constructor(obj: review) {
        this.date = obj.date;
        this.dislikes = obj.dislikes;
        this.likes = obj.likes;
        this.message = obj.message;
        this.name = obj.name;
        this.pic = obj.pic;
        this.stars = obj.stars;
        this.verified = obj.verified;
        this.likeFunc = this.likeFunc.bind(this);
        this.dislikeFunc = this.dislikeFunc.bind(this);
    }
    /**
     * This function will increase the like element in the object by one.
     */
    public likeFunc() {
        console.log("Like:" + this.likes);
        this.likes = this.likes + 1;
    }
    /**
     * This function will increase the like element in the object by one.
     */
    public dislikeFunc() {
        console.log(this.dislikes);
        this.dislikes = this.dislikes + 1;
    }
}
/**
 * Reviews is the single store of data on the client. It could in theory be changed in multiple places(Client side routes).
 * As input you take json and as output you create an object with function which can change itself.
 * So if it changes it 
 */
function reviewsCreator(reviews: any): IReview[] {
    const output = reviews.map((el: review) => {
        return new ReviewObj(el);
    });
    return output;
}

export default reviewsCreator;
