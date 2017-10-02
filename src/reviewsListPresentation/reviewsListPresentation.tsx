import * as React from "react";
import {ReviewPresentation} from "./reviewPresentation";
import "./reviewsListPresentationStyles.scss";

/**
 * It will deal with putting the reviews nicely on the screen.
 * It is subscribed to the review store to update when needed.
 * Seems silly to update the full list for a single review change but react 
 * should handle it with it's diff engine and giving each element a unique key.
 */
class ReviewsListPresentation extends React.Component<IPropsReviewsListPresentation> {
    public static defaultProps = {
    };
    constructor(props: any) {
        super(props);
        props.reviews.forEach((el: any) => {
            el.subscribe(this.setState.bind(this));
        });
    }
    public render() {
        const list: any[] = [];
        for (let i = 0; i < this.props.reviews.length; i++) {
            list.push(
                <div key={i}>
                    <ReviewPresentation
                        review={this.props.reviews[i]}
                        reviewClass={this.props.reviewsListItemClass}
                        excImg={this.props.exclamationImg}
                        likeImg={this.props.likeImg}
                        dislikeImg={this.props.dislikeImg}
                        notVerifiedImg={this.props.notVerifiedImg}
                        verifiedImg={this.props.verifiedImg}
                        fullStarImg={this.props.fullStarImg}
                        hollowStarImg={this.props.hollowStarImg}
                    />
                </div>,
            );
        }
        return (
            <div>
                {list}
            </div>
        );
    }

}

export default ReviewsListPresentation;
