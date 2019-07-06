import { shallow, render } from "enzyme";
import * as React from "react";
import Description from "../Description"

describe("Description.js", () => {
  it("renders correctly", () => {  
    const wrapper = shallow(
      <Description />,
    );
  
    expect(wrapper).toMatchSnapshot();
  });

  it("shows brief description", () => {  
    const wrapper = render(
      <Description />,
    );
  
    expect(wrapper.text()).toContain("The only tool that brings your vacation closer!");
  });
})
