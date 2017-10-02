import * as React from "react";
import {Stars} from "./stars";
const starNumber = 5;
/**
 * Pass a review object, classname and images.
 * The component does not control its updates.
 */
export default function ReviewPresentation(props: IReviewPresentation) {
    let verifiedComp = null as any;
    if (props.review.verified) {
        verifiedComp = (
            <img title={"Verified User"} src={props.verifiedImg} alt={"Verified"}/>
        );
    }else {
        verifiedComp = (
            <img title={"Unverified User"} src={props.notVerifiedImg} alt={"Not Verified"}/>
        );
    }
    return (
        <article className={props.reviewClass}>
            <div className="">
                <img src={props.review.pic} alt={"Account"}/>
                <h4>{props.review.name} </h4>
                <Stars
                    fullStarImg={props.fullStarImg}
                    number={starNumber}
                    hollowStarImg={props.hollowStarImg}
                    canChange={false}
                    numberFilled={props.review.stars}
                />
            </div>
            <div className="">
                <p>{props.review.message}</p>
                <label>{props.review.date.getUTCDate()}/{props.review.date.getMonth()}/{props.review.date.getFullYear()}</label>
            </div>
            <div className="">
                <img title={"Like this review"} onClick={props.review.likeFunc} src={props.likeImg} alt={"Like"}/>
                <label>{props.review.likes} </label>
                <img title={"Dislike this review"} onClick={props.review.dislikeFunc} src={props.dislikeImg} alt={"Dislike"}/>
                <label>{props.review.dislikes} </label>
            </div>
            <div>
                <img title={"Report this review"} onClick={props.review.reportFunc} src={props.excImg} alt={"Report"}/>
                {verifiedComp}
            </div>
        </article>
    );
}
