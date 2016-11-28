"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require('react');
var ReactCSSTransitionGroup = require('react-addons-css-transition-group');
require("animate.css");
var Rating = require('react-rating');
var ReviewsPresentation = (function (_super) {
    __extends(ReviewsPresentation, _super);
    function ReviewsPresentation(props) {
        _super.call(this, props);
        this.noMoreReviews = false;
        this.ctrls = {};
    }
    ReviewsPresentation.prototype.componentWillMount = function () {
    };
    ReviewsPresentation.prototype.submitHandler = function () {
    };
    ReviewsPresentation.prototype.rateChange = function (rate) {
        console.log("rate change " + rate);
    };
    ReviewsPresentation.prototype.addHandler = function () {
    };
    ReviewsPresentation.prototype.moreHandler = function () {
        if (typeof this.props.showHandler !== "undefined") {
            this.props.showHandler(true);
        }
    };
    ReviewsPresentation.prototype.lessHandler = function () {
        if (typeof this.props.showHandler !== "undefined") {
            this.props.showHandler(false);
        }
    };
    ReviewsPresentation.prototype.componentWillUpdate = function (nextProps, nextState) {
        if (nextProps.reviews.length > 10) {
            this.noMoreReviews = true;
        }
        else {
            this.noMoreReviews = false;
        }
    };
    ReviewsPresentation.prototype.render = function () {
        var _this = this;
        var moreLess;
        if (this.noMoreReviews) {
            moreLess = (React.createElement("div", null, React.createElement("h2", null, "No More Reviews"), React.createElement("button", {onClick: this.lessHandler.bind(this), className: "btn btn-success btn-lg"}, "See Fewer Reviews")));
        }
        else {
            moreLess = (React.createElement("div", null, React.createElement("button", {onClick: this.moreHandler.bind(this), className: "btn btn-success btn-lg"}, "See More Reviews"), React.createElement("button", {onClick: this.lessHandler.bind(this), className: "btn btn-success btn-lg"}, "See Fewer Reviews")));
        }
        var list = [];
        for (var i = 0; i < this.props.reviews.length; i++) {
            list.push(React.createElement("div", {className: "panel panel-primary", key: i}, React.createElement("div", {className: "panel-heading"}, React.createElement("h4", null, this.props.reviews[i].name, " "), React.createElement("h2", null, React.createElement(Rating, {readonly: true, initialRate: this.props.reviews[i].stars, empty: "noVis glyphicon glyphicon-heart", scale: 5, full: "red glyphicon glyphicon-heart"}))), React.createElement("div", {className: "panel-body"}, React.createElement("p", null, this.props.reviews[i].message))));
        }
        console.log("style: " + this.props.titleStyle);
        console.log("initial stars: " + this.props.initialStars);
        return (React.createElement("div", {className: "row text-center"}, React.createElement("h1", {className: this.props.titleStyle}, "Give us a review"), React.createElement("form", {name: "sentMessage", id: "contactForm", noValidate: true}, React.createElement("div", {className: "row control-group"}, React.createElement("div", {className: "form-group col-xs-12 floating-label-form-group controls"}, React.createElement("label", null, "Message"), React.createElement("textarea", {ref: function (input) { return _this.ctrls.message = input; }, defaultValue: "", rows: 5, className: "form-control", placeholder: "Review", id: "message", required: true, "data-validation-required-message": "Please enter a review."}), React.createElement("h2", null, React.createElement(Rating, {initialRate: this.props.initialStars, onChange: this.rateChange.bind(this), placeholder: "noVis", empty: "black glyphicon glyphicon-heart", scale: 5, full: "red glyphicon glyphicon-heart"})))), React.createElement("br", null), React.createElement("div", {id: "success"}), React.createElement("div", {className: "row"}, React.createElement("div", {className: "col-xs-12"}, React.createElement("button", {onClick: this.submitHandler.bind(this), className: "btn btn-success btn-lg"}, "Send!!!")))), React.createElement("div", {className: "row"}, React.createElement("div", {className: "panel-group"}, React.createElement(ReactCSSTransitionGroup, {transitionName: "example", transitionEnterTimeout: 500, transitionLeaveTimeout: 300}, list)), React.createElement("div", {className: "col-xs-12"}, moreLess))));
    };
    ReviewsPresentation.defaultProps = {
        reviews: [],
        submit: null,
        titleStyle: "",
        initialStars: 5,
        moreHandler: null
    };
    return ReviewsPresentation;
}(React.Component));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ReviewsPresentation;
