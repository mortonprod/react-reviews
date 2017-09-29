/**
 * This file will ne placed in the dist folder.
 * It will render each type of import statement.
 */
import * as React from "react";
import * as ReactDOM from "react-dom";
import {Reviews} from "./reviews";
import reviewsCreator from "./reviewsCreator";
// import excImg from "./images/exc.svg";
// import ReviewsPresentation from "./reviewsPresentation";

const reviews: review[] = [
    {
        date: new Date(1995, 11, 17),
        dislikes: 10,
        likes: 3,
        message: "This is an example review. It talk about this and that and then this again. Then it move on to that and this again....",
        name: "Alexander Morton",
        pic: "./images/account.svg",
        stars: 3,
        verified: true,
    },
];
function submit(input: IOutputReviewPresentation): any {
    return null;
}

const reviewsObj = reviewsCreator(reviews);

ReactDOM.render(
    <Reviews
        headerImg={"./images/006-network.svg"}
        exclamationImg={"./images/001-exclamation-mark.svg"}
        likeImg={"./images/005-dislike.svg"}
        dislikeImg={"./images/004-like.svg"}
        sendImg={"./images/001-envelope.svg"}
        notVerifiedImg={"./images/error.svg"}
        verifiedImg={"./images/checked.svg"}
        fullStarImg={"./images/003-star.svg"}
        hollowStarImg={"./images/002-star-1.svg "}
        reviews={reviewsObj}
        submit={submit}
    />,
    document.getElementById("root"),
);
