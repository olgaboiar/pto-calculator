import { render, mount } from "enzyme";
import React from "react";
import moment from "moment";
import InputDate from "../InputDate";
import 'react-datepicker/dist/react-datepicker.css';

describe("InputDate.js", () => {
  it("renders correctly", () => {  
    const wrapper = render(
      <InputDate />,
    );
  
    expect(wrapper).toMatchSnapshot();
  });

  it("displays an initial value", () => {
    const initialDate = moment("2019-01-01").toDate();

    const wrapper = mount(
      <InputDate 
        startDate={initialDate}
        onChange={jest.fn()}
      />);
    const input = wrapper.find("input");

    expect(input.props().value).toEqual("01/01/2019");
  });
});
