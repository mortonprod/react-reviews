import * as React from "react";
import ReviewsPresentation from "./reviewsPresentation";
// import Test from "./test";

class Reviews extends React.Component<IPropsReviews, IStateReviews> {
    public static defaultProps = {
        reviews: [] as review[],
        reviewsClass: "reviews",
        sendReviewToServer: [] as any,
        sending: false,
        showNumber: 0,
        stars: 0,
        title: "Reviews",
    };
    constructor() {
        super();
        this.state = {reviewsToPass: []};
        this.showHandler = this.showHandler.bind(this);
    }
    public showHandler(): any {
        return null;
    }
    public render() {
        return (
            <div className={this.props.reviewsClass}>
                <ReviewsPresentation/>
            </div>
        );
    }
}

export default Reviews;
