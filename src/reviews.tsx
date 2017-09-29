import * as React from "react";
import {ReviewsListPresentation} from "./reviewsListPresentation";
import {Stars} from "./reviewsListPresentation/reviewPresentation/stars";
import "./reviewsStyles.scss";

const hoverString = "hover";
const starNumber = 5;
const starFill = 3;

/**
 * This function can also be used on the backend to move form validation.
 */
function submit(output: IOutputReviewPresentation) {
    console.log(JSON.stringify(output));

}
/**
 * This component take in bunch of reviews produced by review factory.
 * Dealing with passing the correct number of reviews.
 */
export class Reviews extends React.Component<IPropsReviews, IStateReviews> {
    public static defaultProps = {
        defaultEmail: "",
        defaultMessage: "",
        defaultName: "",
        dislikeImg: "",
        exclamationImg: "",
        fullStarImg: "",
        headerImg: null as any,
        hollowStarImg: "",
        initialStars: 5,
        likeImg: "",
        moreHandler: null as any,
        notVerifiedImg: "",
        reviews: [] as IReview[],
        reviewsButtons: "reviews__button",
        reviewsClass: "reviews",
        reviewsFormClass: "reviews__form",
        reviewsFormInputClass: "reviews__form__input",
        reviewsFormSendClass: "reviews__form__send",
        reviewsHeaderClass: "reviews__header",
        reviewsImgClass: "reviews__img",
        reviewsList: "reviews__list",
        reviewsListItemClass: "reviews__list__item",
        sendImg: "",
        sendReviewToServer: [] as any,
        sending: false,
        showNumber: 0,
        stars: 0,
        submit: null as any,
        title: "Reviews",
        verifiedImg: "",
    };
    private noMoreReviews = false;
    /**
     * Defines all the output to the stateful component.
     */
    private output: IOutputReviewPresentation = {};
    /**
     * This links to the current DOM element. The value is then passed to the output when submit is pressed.
     */
    private ctrls: {
        message?: HTMLTextAreaElement;
        name?: HTMLInputElement;
        email?: HTMLInputElement;
    } = {};
    constructor() {
        super();
        this.showHandler = this.showHandler.bind(this);
        this.lessHandler = this.lessHandler.bind(this);
        this.moreHandler = this.moreHandler.bind(this);
        this.submitHandler = this.submitHandler.bind(this);
        this.getStarNumber = this.getStarNumber.bind(this);
        this.state = {reviewsToPass: [], reviewsFormInputName: "", reviewsFormInputEmail: "", reviewsFormInputReview: ""};
    }
    public expand(id: string) {
        console.log(id + " " + hoverString);
        if (id === "name") {
            this.setState({reviewsFormInputName: hoverString});
        }else if (id === "email") {
            this.setState({reviewsFormInputEmail: hoverString});
        }else if (id === "review") {
            this.setState({reviewsFormInputReview: hoverString});
        }else {
            throw Error("Trying to expand something we don't know about");
        }
    }
    public showHandler(): any {
        return null;
    }
    public getStarNumber(index: number) {
        this.output.stars = index;
    }
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
                <div className={this.props.reviewsButtonsClass}>
                    <button onClick={this.moreHandler} className="">See More Reviews</button>
                    <button onClick={this.lessHandler} className="">See Fewer Reviews</button>
                </div>
            );
        }
        return (
            <div>
                <img className={this.props.reviewsImgClass} src={this.props.headerImg}  alt={"Send"}/>
                <h1 className={this.props.reviewsHeaderClass}>{this.props.title}</h1>
                <form name="" id="" className={this.props.reviewsFormClass}>
                    <div className={this.props.reviewsFormInputClass}>
                        <label htmlFor="name">Name</label>
                        <input ref={(input) => this.ctrls.name = input} onClick={this.expand.bind(this, "name")} type="text" defaultValue={this.props.defaultName} className={this.state.reviewsFormInputName} id="name" placeholder="Your Name" required data-validation-required-message="Please enter a name"/>
                        <label htmlFor="email">Email</label>
                        <input ref={(input) => this.ctrls.email = input} onClick={this.expand.bind(this, "email")} defaultValue={this.props.defaultEmail} id="email" className={this.state.reviewsFormInputEmail} placeholder="Your Email" required data-validation-required-message="Please enter an email" type="email"/>
                        <label htmlFor="review">Review</label>
                        <textarea ref={(input) => this.ctrls.message = input} onClick={this.expand.bind(this, "review")} defaultValue={this.props.defaultMessage} rows={5} className={this.state.reviewsFormInputReview} placeholder="Your Review" id="review" required data-validation-required-message="Please enter a review."/>
                    </div>
                    <div className={this.props.reviewsFormSendClass}>
                        <Stars
                            fullStarImg={this.props.fullStarImg}
                            number={starNumber}
                            hollowStarImg={this.props.hollowStarImg}
                            canChange={true}
                            numberFilled={starFill}
                            getStarNumber={this.getStarNumber}
                        />
                        <input type="image" name="submit" onClick={this.submitHandler}  src={this.props.sendImg}  alt={"Send"}/>
                    </div>
                </form>
                <ReviewsListPresentation
                    reviews={this.props.reviews}
                    exclamationImg={this.props.exclamationImg}
                    likeImg={this.props.likeImg}
                    dislikeImg={this.props.dislikeImg}
                    notVerifiedImg={this.props.notVerifiedImg}
                    verifiedImg={this.props.verifiedImg}
                    fullStarImg={this.props.fullStarImg}
                    hollowStarImg={this.props.hollowStarImg}
                    reviewsListItemClass={this.props.reviewsListItemClass}
                />
                <div>
                    {moreLess}
                </div>
            </div>
        );
    }
    /**
     * The triggering of the submit HTML validation is triggered before this function.
     * Note the onclick img will not trigger the basic validation setup without name submit.
     * This function will collect all the current values and pass this to the parent component.
     */
    private submitHandler() {
        this.output.name = this.ctrls.name.value;
        this.output.email = this.ctrls.email.value;
        this.output.message = this.ctrls.message.value;
        if (this.props.submit) {
            this.props.submit(this.output);
        }
    }
    private moreHandler(): any {
        return null;
    }
    private lessHandler(): any {
        return null;

    }
}
