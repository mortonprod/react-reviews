/**
 * A review is composed of name,pic,verified,date, star rating and message. 
 */
interface review { name: string, pic:string,verified:boolean,date:string, stars: number, message: string }

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
interface IPropsReviewPresentation {
    reviews?: review[];
    submit?: any;
    reviewsButtons?: any;
    reviewsHeader?: string;
    reviewsList?: string;
    reviewsListItem?: string;
    reviewsForm?: string;
    reviewsFormInput?: string;
    reviewsFormSend?: string;
    stars?: number;
    moreHandler?: any;
    showHandler?: any;
    isNoMoreReviews?: boolean;
    title?: string;
}


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
interface IPropsReviews {
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
interface IStateReviews {
    reviewsToPass: review[];

}