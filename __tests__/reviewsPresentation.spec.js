import {shallow, mount} from "enzyme";
import * as React from "react";
import Reviews from "../dist";

it('should render the reviews component', () => {
    const wrapper = shallow(
        <Reviews>Hello Jest!</Reviews>
    );
    expect(1).toBe(1);
});