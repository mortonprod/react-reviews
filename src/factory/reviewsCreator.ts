import ReviewDefault from "./objects/reviewDefault";
import ReviewFake from "./objects/reviewFake";
/**
 * This is a factory pattern to create the same output object for a range of different inputs.
 * Using typecript ensure we always return one of a range of review types.
 * It takes in a default review info and another other review object and return a final review object.
 */
function reviewsCreator(type: string, reviews: review[], fakes?: IFake[]): IReviewDefault[] | IReviewFake[] {
    let output: IReviewDefault[] | IReviewFake[] = [];
    if (type === "default") {
        if (reviews) {
            output = reviews.map((el: review) => {
                return new ReviewDefault(el);
            });
        }else {
            throw(Error("Chose default but sent no data."));
        }
    }else if (type === "fake") {
        if (reviews[0] && fakes) {
            output = fakes.map((fake: IFake) => {
                return new ReviewFake(reviews[0], fake);
            });
        }else {
            throw(Error("No review or fake data."));
        }
    } else {
        throw(Error("No matching option."));
    }
    return output;
}

export default reviewsCreator;
