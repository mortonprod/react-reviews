/**
 * This file will be placed in the dist folder.
 * It can get the only the default views or it can call the node server to get more fake data.
 * It will only render the object when the data has been recieved.
 */
import axios from "axios";
import * as React from "react";
import * as ReactDOM from "react-dom";
import reviewsCreator from "./factory/reviewsCreator";
import {Reviews} from "./reviews";

const reviews: review[] = [
    {
        date: new Date(1995, 11, 17),
        dislikes: 10,
        likes: 3,
        message: "This is an example review. It talk about this and that and then this again. Then it move on to that and this again.... Maybe we should talk about this. Wait we have this also to mention and then something else again. This is very long indeed. But maybe we are not done yet. Maybe we need to write some more....",
        name: "Alexander Morton",
        pic: "./images/account.svg",
        reports: 0,
        stars: 3,
        verified: true,
    },
];
function submit(input: IOutputReviewPresentation): any {
    return null;
}
new Promise((resolve, reject) => {
    if (process.env.REVIEW_TYPE === "fake") {
        axios.get("http://localhost:3000/fakes").then((response) => {
            resolve(reviewsCreator("fake", reviews, response.data.results));
          })
          .catch((error) => {
            resolve(reviewsCreator("default", reviews));
          });
    }else {
        resolve(reviewsCreator("default", reviews));
    }
}).then((result: IReviewDefault[] | IReviewFake[]) => {
    ReactDOM.render(
        <Reviews
            headerImg={"./images/006-network.svg"}
            exclamationImg={"./images/001-exclamation-mark.svg"}
            likeImg={"./images/004-like.svg"}
            dislikeImg={"./images/005-dislike.svg"}
            sendImg={"./images/001-envelope.svg"}
            notVerifiedImg={"./images/error.svg"}
            verifiedImg={"./images/checked.svg"}
            fullStarImg={"./images/003-star.svg"}
            hollowStarImg={"./images/002-star-1.svg "}
            reviews={result}
            submit={submit}
        />,
        document.getElementById("root"),
    );
});
