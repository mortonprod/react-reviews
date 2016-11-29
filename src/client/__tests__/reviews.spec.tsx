import * as React from 'react';
import renderer from 'react-test-renderer';
import Reviews from "../reviews";
const component = renderer.create(
    <Reviews page="http://www.facebook.com">Facebook</Reviews>
);

describe("React-reviews", () => {
    it("can be locked", () => {

    })
    it("can be unlocked", () => {

    })
})
describe("Unlocked react-review ", () =>{
    it("adds animation with mouse hover", () => {

    })
    it("shows the reviews you pass it. ", () => {

    })
    it("updates the number of stars", () => {

    })
    it("removes some reviews when asked ", () => {

    })
    it("adds some reviews when asked", () => {

    })
})