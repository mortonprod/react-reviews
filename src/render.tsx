/**
 * This file will ne placed in the dist folder.
 * It will render each type of import statement.
 */
import * as React from "react";
import * as ReactDOM from "react-dom";
import Reviews from "./reviews";
// import excImg from "./images/exc.svg";
// import ReviewsPresentation from "./reviewsPresentation";

ReactDOM.render(
    <Reviews
        headerImg={"./images/006-network.svg"}
        sendImg={"./images/004-like.svg"}
    />,
    document.getElementById("root"),
);
