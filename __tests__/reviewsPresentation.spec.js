import {shallow, mount} from "enzyme";
import * as React from "react";
it('should render a label', () => {
    const wrapper = shallow(
        <label>Hello Jest!</label>
    );
    expect(wrapper).toMatchSnapshot();
});

it('should render a small label', () => {
    const wrapper = shallow(
        <label small>Hello Jest!</label>
    );
    expect(wrapper).toMatchSnapshot();
});

it('should render a grayish label', () => {
    const wrapper = shallow(
        <label light>Hello Jest!</label>
    );
    expect(wrapper).toMatchSnapshot();
});
