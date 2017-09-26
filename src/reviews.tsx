import * as React from "react";
import ReviewsPresentation from "./reviewsPresentation";
// import Test from "./test";

/**
 * This function can also be used on the backend to move form validation.
 */
function submit() {

}

class Reviews extends React.Component<IPropsReviews, IStateReviews> {
    public static defaultProps = {
        headerImg: null as any,
        reviews: [] as review[],
        reviewsClass: "reviews",
        sendImg: "",
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
                <ReviewsPresentation
                    submit={submit}
                    headerImg={this.props.headerImg}
                    sendImg={this.props.sendImg}
                />
            </div>
        );
    }
}

export default Reviews;
