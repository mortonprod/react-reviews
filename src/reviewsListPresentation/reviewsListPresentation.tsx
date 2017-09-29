import * as React from "react";
import {ReviewPresentation} from "./reviewPresentation";
import "./reviewsListPresentationStyles.scss";

/**
 * This component will take a list of reviews and put them on the screen.
 * It's only job is comparing the last list and smoothly transitioning.
 */
class ReviewsListPresentation extends React.Component<IPropsReviewsListPresentation> {
    public static defaultProps = {
    };
    constructor(props: any) {
        super(props);
    }
    /**
     * This function will render the full component.
     * It will render everything from the props and attach eventhandlers from the props.
     */
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
