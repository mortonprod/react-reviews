import {shallow, mount} from "enzyme";
import * as React from "react";
import ReactDOM from 'react-dom';
import {ReviewPresentation} from "../dist/lib-esm/reviewsListPresentation/reviewPresentation/";

const EXCIMG = "EXCIMG";
const LIKEIMG = "LIKEIMG";
const DISLIKEIMG = "DISLIKEIMG";
const NOTVERIMG = "NOTVERIMG";
const VERIMG = "VERIMG";
const FULLIMG = "FULLIMG";
const HOLLOWIMG = "HOLLOWIMG";

const review = {
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
}

it("renders without crashing", ()=>{
    const div = document.createElement('div');
    ReactDOM.render(
        <ReviewPresentation
        review={review}
        reviewClass={""}
        excImg={""}
        likeImg={""}
        dislikeImg={""}
        notVerifiedImg={""}
        verifiedImg={""}
        fullStarImg={""}
        hollowStarImg={""}
    />, div);
})

it("It should pass the right class", ()=>{
    const wrapper = shallow(
        <ReviewPresentation
            review={review}
            reviewClass={"reviewClass"}
            excImg={""}
            likeImg={""}
            dislikeImg={""}
            notVerifiedImg={""}
            verifiedImg={""}
            fullStarImg={""}
            hollowStarImg={""}
        />
    );
    expect(wrapper.find(".reviewClass").length).toBe(1);
})

it("It should pass the imgs", ()=>{

    const wrapper = shallow(
        <ReviewPresentation
            review={review}
            reviewClass={""}
            excImg={EXCIMG}
            likeImg={LIKEIMG}
            dislikeImg={DISLIKEIMG}
            notVerifiedImg={NOTVERIMG}
            verifiedImg={VERIMG}
            fullStarImg={FULLIMG}
            hollowStarImg={HOLLOWIMG}
        />
    );
    expect(wrapper.find('img').filterWhere((item) => {
        return item.prop('src') === EXCIMG;
      }).length).toBe(1);
      expect(wrapper.find('img').filterWhere((item) => {
        return item.prop('src') === LIKEIMG;
      }).length).toBe(1);
      expect(wrapper.find('img').filterWhere((item) => {
        return item.prop('src') === DISLIKEIMG;
      }).length).toBe(1);
      expect(wrapper.find('img').filterWhere((item) => {
        return item.prop('src') === NOTVERIMG;
      }).length).toBe(0);
      expect(wrapper.find('img').filterWhere((item) => {
        return item.prop('src') === VERIMG;
      }).length).toBe(1);
})

it("It should change image on verified", ()=>{
        review.verified = false;  
        const wrapper = shallow(
            <ReviewPresentation
                review={review}
                reviewClass={""}
                excImg={EXCIMG}
                likeImg={LIKEIMG}
                dislikeImg={DISLIKEIMG}
                notVerifiedImg={NOTVERIMG}
                verifiedImg={VERIMG}
                fullStarImg={FULLIMG}
                hollowStarImg={HOLLOWIMG}
            />
        );
        expect(wrapper.find('img').filterWhere((item) => {
            return item.prop('src') === VERIMG;
        }).length).toBe(0);
        expect(wrapper.find('img').filterWhere((item) => {
            return item.prop('src') === NOTVERIMG;
          }).length).toBe(1);
    })