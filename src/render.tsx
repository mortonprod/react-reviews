/**
 * This file will ne placed in the dist folder.
 * It will render each type of import statement.
 */
import * as React from "react";
import * as ReactDOM from "react-dom";
//import Reviews from "./reviews.tsx";
import ReviewsPresentation from "./reviewsPresentation";

ReactDOM.render(
    <ReviewsPresentation/>,
    document.getElementById("root"),
);
