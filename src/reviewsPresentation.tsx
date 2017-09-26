import * as React from "react";
import "./reviewsPresentationStyles.scss";

/**
 * This component should have not state. The props should completely define this component.
 */
class ReviewsPresentation extends React.Component<IPropsReviewPresentation> {
    public static defaultProps = {
        defaultEmail: "",
        defaultMessage: "",
        defaultName: "",
        headerImg: "",
        initialStars: 5,
        moreHandler: null as any,
        reviews: [] as any,
        reviewsButtons: "reviews__button",
        reviewsForm: "reviews__form",
        reviewsFormInput: "reviews__form__input",
        reviewsFormSend: "reviews__form__send",
        reviewsHeader: "reviews__header",
        reviewsList: "reviews__list",
        reviewsListItem: "reviews__list__item",
        sendImg: "",
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
    public componentWillUpdate(nextProps: IPropsReviewPresentation, nextState: {}): any {
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
                <div className={this.props.reviewsButtons}>
                    <button onClick={this.moreHandler} className="">See More Reviews</button>
                    <button onClick={this.lessHandler} className="">See Fewer Reviews</button>
                </div>
            );
        }
        const list: any[] = [];
        for (let i = 0; i < this.props.reviews.length; i++) {
            list.push(
                <article className={this.props.reviewsListItem} key={i}>
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
                </article>);
        }
        return (
            <div className="">
                <img src={this.props.headerImg}  alt={"Send"}/>
                <h1 className={this.props.reviewsHeader}>{this.props.title}</h1>
                <form name="" id="" className={this.props.reviewsForm}>
                    <div className={this.props.reviewsFormInput}>
                        <label>Name</label>
                        <input ref={(input) => {this.ctrls.name = input; }} type="text" defaultValue={this.props.defaultName} className="" id="" required data-validation-required-message="Name"/>
                        <label>Email</label>
                        <input ref={(input) => this.ctrls.email = input} defaultValue={this.props.defaultEmail} className="" id="" required data-validation-required-message="Email" type="email"/>
                        <label>Messages</label>
                        <textarea ref={(input) => this.ctrls.message = input} defaultValue={this.props.defaultMessage} rows={5} className="" placeholder="Review" id="" required data-validation-required-message="Please enter a review."/>
                    </div>
                    <br />
                    <div className={this.props.reviewsFormSend}>
                        <button onClick={this.submitHandler} className="">Send</button>
                        <img src={this.props.sendImg}  alt={"Send"}/>
                    </div>
                </form>
                <div>
                    <div className={this.props.reviewsList}>
                        {list}
                    </div>
                    <div>
                        {moreLess}
                    </div>
                </div>
            </div>
        );
    }
    private submitHandler(): any {
        if (this.props.submit) {
            this.props.submit(this.ctrls.name.value, this.ctrls.email.value, this.ctrls.message.value);
        }
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
