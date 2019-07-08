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
});
