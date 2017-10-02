/**
 * A review is composed of name;pic;verified;date; star rating and message. 
 */
interface review { name: string; pic:string;verified:boolean;date:Date; stars: number; message: string; likes: number; dislikes:number, reports:number}
interface IReviewDefault extends review { likeFunc: any; dislikeFunc: any, reportFunc: any, subscribe: any, fire: any;}

interface IReviewFake extends IReviewDefault {
    location: string;
    email: string;
    username: string;
}

interface IFake { 
    name: {
        title:string; 
        first:string; 
        last: string;
    } 
    location: {
        street: string;
        city: string;
        state: string;
        postcode: string;
    }
    email: string;
    login: {
        username: string;
    }
    dob: string;
    registered: string;
    picture: {
        large: string;
    }
}

interface IOutputReviewPresentation  {
    message?: string;
    name?: string;
    email?: string;
    stars?: number;
}

interface IDefaultInput {
    defaultEmail?: string;
    defaultMessage?: string;
    defaultName?: string;
}

interface IImagesInput {
    exclamationImg?:string;
    likeImg?: string;
    dislikeImg?: string;
    fullStarImg?: string;
    hollowStarImg?: string;
    sendImg: string;    
    headerImg: string;
    reviewsImg?: string;
    notVerifiedImg?: string;
    verifiedImg?: string; 
}

interface IClasses {
    reviewsClass?: string;
    reviewsButtonsClass?: string;
    reviewsFormClass?: string;
    reviewsFormInputClass?: string;
    reviewsFormSendClass?: string;
    reviewsHeaderClass?: string;
    reviewsListClass?: string;
    reviewsListItemClass?: string;
    reviewsImgClass?: string;
}

/**
 * The props act as data input and connection to larger application.
 * Everything is controlled externally apart from the most basic of stateful operations.
 */
interface IPropsReviews extends IDefaultInput, IImagesInput, IClasses {
    reviews?: IReviewDefault[] | IReviewFake[];
    sending?: any;
    showNumber?: number;
    title?: string;
    stars?: number;
    submit: any;   
    isNoMoreReviews?: boolean;
}
interface IStateReviews {
    reviewsToPass: review[];
    reviewsFormInputName: string;
    reviewsFormInputEmail: string;
    reviewsFormInputReview: string;
}