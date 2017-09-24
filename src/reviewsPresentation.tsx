﻿import * as React from "react";
import "./reviewsPresentation.scss";
/**
 * @param {string} reviews The reviews to show.
 * @param {function} submit The submit button is an action to take after pressin submit.
 * @param {string} titleStyle The style of the title.
 * @param {number} stars The number of stars the users review should have.
 * @param {function} moreHandler Request more reviews
 * @param {function} showHandler
 * @param {boolean} isNoMoreReviews This is a boolean to remove the show more button.
 * @param {string} title The heading of review component
 */
interface IProps {
    reviews?: review[];
    submit?: any;
    reviewsHeader?: string;
    reviewsForm?: string;
    stars?: number;
    moreHandler?: any;
    showHandler?: any;
    isNoMoreReviews?: boolean;
    title?: string;
}
/**
 * This component should have not state. The props should completely define this component.
 */
class ReviewsPresentation extends React.Component<IProps> {
    public static defaultProps = {
        initialStars: 5,
        moreHandler: null as any,
        reviews: [] as any,
        reviewsForm: "reviews__form",
        reviewsHeader: "reviews__header",
        submit: null as any,
        title: "Reviews",
    };
    private ctrls: {
        message?: HTMLTextAreaElement;
        name?: HTMLInputElement;
        email?: HTMLInputElement;
    } = {};
    private noMoreReviews = false;
    constructor(props: any) {
        super(props);
        this.lessHandler = this.lessHandler.bind(this);
        this.moreHandler = this.moreHandler.bind(this);
        this.submitHandler = this.submitHandler.bind(this);
    }
    public componentWillMount(): any {
        return null;
    }
    public componentWillUpdate(nextProps: IProps, nextState: {}): any {
        return null;
    }
    /**
     * This function will render the full component.
     * It will render everything from the props and attach eventhandlers from the props.
     */
    public render() {
        let moreLess: any;
        if (this.props.isNoMoreReviews) {
            moreLess = (
                <div>
                    <h2>No More Reviews</h2>
                    <button onClick={this.lessHandler} className="">See Fewer Reviews</button>
                </div>
            );
        } else {
            moreLess = (
                <div>
                    <button onClick={this.moreHandler} className="">See More Reviews</button>
                    <button onClick={this.lessHandler} className="">See Fewer Reviews</button>
                </div>
            );
        }
        const list: any[] = [];
        for (let i = 0; i < this.props.reviews.length; i++) {
            list.push(
                <article className="" key={i}>
                    <div className="">
                        <h4>{this.props.reviews[i].name} </h4>
                    </div>
                    <div className="">
                        <p>{this.props.reviews[i].message}</p>
                    </div>
                    <div className="">
                        <p>{this.props.reviews[i].message}</p>
                    </div>
                    <div className="">
                        <p>{this.props.reviews[i].pic}</p>
                    </div>
                    <div className="">
                        <p>{this.props.reviews[i].verified}</p>
                    </div>
                    <div className="">
                        <p>{this.props.reviews[i].date}</p>
                    </div>
                </article>
            );
        }
        return (
            <div className="">
                <h1 className={this.props.reviewsHeader}>{this.props.title}</h1>
                <form name="" id="" noValidate className={this.props.reviewsForm}>
                    <div>
                        <label>Name</label>
                        <input ref={(input) => {this.ctrls.name = input; }} defaultValue="" className="" id="" required data-validation-required-message="Name"/>
                        <label>Email</label>
                        <input ref={(input) => this.ctrls.email = input} defaultValue="" className="" id="" required data-validation-required-message="Email"/>
                        <label>Messages</label>
                        <textarea ref={(input) => this.ctrls.message = input} defaultValue="" rows={5} className="" placeholder="Review" id="" required data-validation-required-message="Please enter a review."/>
                    </div>
                    <br />
                    <div>
                        <button onClick={this.submitHandler} className="">Send</button>
                    </div>
                </form>
                <div className="">
                    <div className="">
                        {list}
                    </div>
                    <div className="">
                        {moreLess}
                    </div>
                </div>
            </div>
        );
    }
    private submitHandler(): any {
        return null;
    }
    private rateChange(rate: number): any {
        return null;
    }
    private addHandler(): any {
        return null;
    }
    private moreHandler() {
        if (typeof this.props.showHandler !== "undefined") {
            this.props.showHandler(true);
        }
    }
    private lessHandler() {
        if (typeof this.props.showHandler !== "undefined") {
            this.props.showHandler(false);
        }
    }

}

export default ReviewsPresentation;
