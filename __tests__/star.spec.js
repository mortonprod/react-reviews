import {shallow, mount} from "enzyme";
import * as React from "react";
import {Stars} from "../dist/lib-esm/reviewsListPresentation/reviewPresentation/stars";
import {getStars} from "../dist/lib-esm/reviewsListPresentation/reviewPresentation/stars"

it('should render the correct source of the stars', () => {
    const IMAGE_PATH_FULL = "full_test";
    const IMAGE_PATH_HOLLOW = "hollow_test";    
    const stars = getStars(IMAGE_PATH_FULL,IMAGE_PATH_HOLLOW,5,3,()=>{});
    const wrapper = shallow(
        <div>
            {stars}
        </div>
    );
    expect(wrapper.find('img').filterWhere((item) => {
        return item.prop('src') === IMAGE_PATH_FULL;
      }).length).toBe(3);
      expect(wrapper.find('img').filterWhere((item) => {
        return item.prop('src') === IMAGE_PATH_HOLLOW;
      }).length).toBe(2);
});