import { render } from "enzyme";
import * as React from "react";
import Greeting from "../Greeting"

describe("Greeting.js", () => {
  it("renders correctly", () => {  
    const wrapper = render(
      <Greeting />,
    );
  
    expect(wrapper).toMatchSnapshot();
  });

  it("shows brief description", () => {  
    const wrapper = render(
      <Greeting />,
    );
  
    expect(wrapper.text()).toContain("Welcome to PTO Calculator");
  });
})
