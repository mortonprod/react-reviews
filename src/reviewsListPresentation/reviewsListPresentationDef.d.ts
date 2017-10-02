interface IPropsReviewsListPresentation {
    reviews: IReviewDefault[] | IReviewFake[];
    reviewsListItemClass: string;
    exclamationImg: string;
    likeImg: string;
    dislikeImg: string;
    notVerifiedImg: string;
    verifiedImg: string;
    fullStarImg: string;
    hollowStarImg: string; 
}