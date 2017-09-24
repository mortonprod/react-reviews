import * as React from "react";
import * as ReactDOM from "react-dom";
import ReviewsPresentation from "./reviewsPresentation";
/**
 * The props act as data input and connection to larger application.
 * Everything is controlled externally apart from the most basic of stateful operations.
 * @param {function} sendReviewToServer This is a function which will perform a get operation.
 * @param {array} reviews An array of reviews to display relating to some topic or request.
 * @param {boolean} sending A boolean to let the component know a review has been sent.
 * @param {string} titleClass The style of the review title.
 * @param {number} stars The number of stars the users review should have.
 * @param {string} reviewsClass This is the class name of the full reviews component.
 */
interface IProps {
    sendReviewToServer?: any;
    reviews?: review[];
    sending?: any;
    showNumber?: number;
    titleStyle?: string;
    title?: string;
    stars?: number;
    reviewsClass?: string;
}
/**
 * @param reviewsToPass {array} The reviews which are currently on show. 
 */
interface IState {
    reviewsToPass: review[];

}
class Reviews extends React.Component<IProps, IState> {
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
    public showHandler(){
    }
    public render() {
        return (
            <div className={this.props.reviewsClass}>
                <ReviewsPresentation
                    reviews={this.state.reviewsToPass}
                    submit={this.props.sendReviewToServer}
                    title={this.props.title}
                    stars={this.props.stars}
                    showHandler={this.showHandler}
                />
            </div>
        );
    }
}

export default Reviews;


