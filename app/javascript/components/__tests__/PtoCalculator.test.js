import { render, mount } from "enzyme";
import React from "react";
import PtoCalculator from "../PtoCalculator";
import 'react-datepicker/dist/react-datepicker.css';

describe("PtoCalculator.js", () => {
  it("renders correctly", () => {  
    const wrapper = render(
      <PtoCalculator />,
    );
  
    expect(wrapper).toMatchSnapshot();
  });

  it("contains only PtoForm", () => {  
    const wrapper = mount(
      <PtoCalculator />,
    );

    const ptoForm = wrapper.find('form');

    expect(ptoForm).toHaveLength(1);
  });

  it("displays response after calculations", () => {
    const data = {
      data: {
        response: 24
      }
    }

    const wrapper = mount(
      <PtoCalculator />,
    );

    expect(wrapper.html()).not.toContain('24 PTO hours');

    wrapper.instance().changePtoHours(data);

    expect(wrapper.html()).toContain('24 PTO hours');
  });
});
