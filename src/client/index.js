"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require('react');
var ReactDOM = require('react-dom');
var reviewsPresentation_1 = require('./reviewsPresentation');
var Reviews = (function (_super) {
    __extends(Reviews, _super);
    function Reviews(props) {
        _super.call(this, props);
        this.sendingClass = "";
        this.counterToShow = 1;
    }
    Reviews.prototype.componentWillUpdate = function () {
    };
    Reviews.prototype.componentWillMount = function () {
        var temp = [];
        for (var i = 0; i < this.props.showNumber; i++) {
            temp.push(this.props.reviews[i]);
        }
        this.setState({
            titleStyle: "",
            initialStars: 0,
            reviewsToPass: temp
        });
    };
    Reviews.prototype.init = function () {
        console.log("Over");
        this.setState({
            titleStyle: "animated bounce",
            initialStars: 0,
            reviewsToPass: this.state.reviewsToPass
        });
        for (var i = 0; i < 7; i++) {
            (function (i) {
                setTimeout(function () {
                    var temp;
                    if (i === 6) {
                        temp = 0;
                    }
                    else {
                        temp = i;
                    }
                    this.setState({
                        titleStyle: "animated bounce",
                        initialStars: temp
                    });
                    console.log("i: " + i);
                }.bind(this), 1000 * i);
            }.bind(this))(i);
        }
    };
    Reviews.prototype.showHandler = function (more) {
        console.log("more :" + more);
        if (more) {
            this.counterToShow += 1;
            var tempLength = void 0;
            if (this.props.showNumber * this.counterToShow <= this.props.reviews.length) {
                tempLength = this.props.showNumber * this.counterToShow;
            }
            else {
                tempLength = this.props.reviews.length;
            }
            var temp = [];
            for (var i = 0; i < tempLength; i++) {
                temp.push(this.props.reviews[i]);
            }
            this.setState({
                titleStyle: "",
                initialStars: 0,
                reviewsToPass: temp
            });
        }
        else {
            var tempLength = void 0;
            if (this.props.showNumber <= this.state.reviewsToPass.length) {
                tempLength = this.props.showNumber;
            }
            else {
                tempLength = this.state.reviewsToPass.length;
            }
            var temp = this.state.reviewsToPass;
            for (var i = 0; i < tempLength; i++) {
                temp.pop();
            }
            this.setState({
                titleStyle: "",
                initialStars: 0,
                reviewsToPass: temp
            });
        }
    };
    Reviews.prototype.render = function () {
        return (React.createElement("div", {onMouseOver: this.init.bind(this)}, React.createElement(reviewsPresentation_1.default, {reviews: this.state.reviewsToPass, submit: this.props.sendReviewToServer, titleStyle: this.state.titleStyle, initialStars: this.state.initialStars, showHandler: this.showHandler.bind(this)})));
    };
    Reviews.defaultProps = {
        reviews: [
            { name: "Alex1", stars: 4, message: "Something like a message" },
            { name: "Alex2", stars: 4, message: "Something like a message" },
            { name: "Alex3", stars: 4, message: "Something like a message" },
            { name: "Alex4", stars: 4, message: "Something like a message" },
            { name: "Alex5", stars: 4, message: "Something like a message" },
            { name: "Alex6", stars: 4, message: "Something like a message" },
            { name: "Alex7", stars: 4, message: "Something like a message" },
            { name: "Alex8", stars: 4, message: "Something like a message" },
            { name: "Alex9", stars: 4, message: "Something like a message" },
            { name: "Alex10", stars: 4, message: "Something like a message" },
            { name: "Alex11", stars: 4, message: "Something like a message" },
            { name: "Alex12", stars: 4, message: "Something like a message" }
        ],
        sendReviewToServer: null,
        sending: false,
        showNumber: 5
    };
    return Reviews;
}(React.Component));
ReactDOM.render(React.createElement(Reviews, null), document.getElementById('root'));
