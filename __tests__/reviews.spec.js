import {shallow, mount} from "enzyme";
import * as React from "react";
import ReactDOM from 'react-dom';
import {Reviews} from "../dist/lib-esm/";

const EXCIMG = "EXCIMG";
const LIKEIMG = "LIKEIMG";
const DISLIKEIMG = "DISLIKEIMG";
const NOTVERIMG = "NOTVERIMG";
const VERIMG = "VERIMG";
const FULLIMG = "FULLIMG";
const HOLLOWIMG = "HOLLOWIMG";

const submit = () => {};

const reviews = [{
    date: new Date(1995, 11, 17),
    dislikes: 10,
    likes: 3,
    likeFunc:() => {},
    dislikeFunc: () => {},
    message: "This is an example review. It talk about this and that and then this again. Then it move on to that and this again....",
    name: "Alexander Morton",
    pic: "./images/account.svg",
    stars: 3,
    verified: true,
}]

it("renders without crashing", ()=>{
    const div = document.createElement('div');
    ReactDOM.render(
        <Reviews
            exclamationImg={EXCIMG}
            likeImg={LIKEIMG}
            dislikeImg={DISLIKEIMG}
            notVerifiedImg={NOTVERIMG}
            verifiedImg={VERIMG}
            fullStarImg={FULLIMG}
            hollowStarImg={HOLLOWIMG}
            reviews={reviews}
            submit={submit}
    />, div);
})