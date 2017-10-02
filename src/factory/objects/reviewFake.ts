import ReviewTemplate from "./reviewTemplate";
/**
 * This object expands on the default.
 * It simply adds more variables and functionality.
 */
export default class ReviewFake extends ReviewTemplate {
    public email: string = null;
    public location: { street: string; city: string; state: string; postcode: string; } = null;
    public username: string = null;
    constructor(obj: review, fake: IFake) {
        super(createObj(obj, fake));
        this.location = fake.location;
        this.email = fake.email;
        this.username = fake.login.username;
    }
}

function createObj(obj: review, fake: IFake) {
    obj.name = fake.name.title + " " + fake.name.first + " " + fake.name.last;
    obj.date = new Date(fake.registered);
    obj.pic = fake.picture.large;
    return obj;
}
