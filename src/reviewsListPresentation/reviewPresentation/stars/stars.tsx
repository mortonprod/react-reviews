import * as React from "react";
const starsStyle = {
    marginBottom: "50px",
    marginLeft: "0px",
    marginRight: "0px",
    marginTop: "50px",
};
const starStyle = {
    width: "50px",
};
/**
 * This function will simply produce the HTML for a certain number of stars.
 * It needs the number of stars to create and then the number which should be filled.
 * The hover event will let the parent class know which one is being hovered above.
 */
export function getStars(fullStarImg: string, hollowStarImg: string, numberToCreate: number, numberFilled: number, onHover: any) {
    const stars = [] as any[];
    for (let i = 0; i < numberToCreate; i++) {
        if (i < numberFilled) {
            stars.push(
                // tslint:disable-next-line
                <img onMouseEnter={()=>{onHover(i)}} key={i} style={starStyle} src={fullStarImg} alt={"Full Star"}/>,
            );
        }else {
            stars.push(
                // tslint:disable-next-line
                <img onMouseEnter={()=>{onHover(i)}} key={i} style={starStyle} src={hollowStarImg} alt={"Hollow Star"}/>,
            );
        }
    }
    return stars;
}

/**
 * The component will render a number of stars which are hollow or filled.
 * The number of stars currently selected is passed out of the component with a props function.
 */
export default class Stars extends React.Component<IPropsStar, IStateStar> {
    public static defaultProps = {
      starStyle,
      starsStyle,
    };
    private stars = [] as any;
    constructor(props: IPropsStar) {
        super(props);
        this.onHover = this.onHover.bind(this);
        const stars = getStars(props.fullStarImg, props.hollowStarImg, props.number, props.numberFilled, this.onHover);
        this.state = {stars};
    }
    public onHover(index: number) {
        if (this.props.canChange) {
            const stars = getStars(this.props.fullStarImg, this.props.hollowStarImg, this.props.number, index + 1, this.onHover);
            this.setState({stars});
            this.props.getStarNumber(index + 1);
        }
    }
    public render() {
        return (
            <div style={starsStyle}>
                {this.state.stars}
            </div>
        );
    }

}
