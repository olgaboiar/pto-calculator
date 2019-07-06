import { render } from "enzyme";
import * as React from "react";
import Pto from "../Pto"

describe("Pto.js", () => {
  it("renders correctly", () => {  
    const wrapper = render(
      <Pto />,
    );
  
    expect(wrapper).toMatchSnapshot();
  });

  it("shows amount of PTO hours", () => {  
    const wrapper = render(
      <Pto ptoHours={12}/>,
    );
  
    expect(wrapper.text()).toContain("12");
  });
})
