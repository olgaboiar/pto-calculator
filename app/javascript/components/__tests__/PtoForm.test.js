import { render, mount } from "enzyme";
import React from "react";
import PtoForm from "../PtoForm";
import 'react-datepicker/dist/react-datepicker.css';

describe("PtoForm.js", () => {
  it("renders correctly", () => {  
    const wrapper = render(
      <PtoForm />,
    );
  
    expect(wrapper).toMatchSnapshot();
  });

  it("contains InputSelect, InputDate, and Submit Button", () => {  
    const wrapper = mount(
      <PtoForm
      />,
    );

    const inputSelect = wrapper.find('[data-testid="position"]');
    const inputDate = wrapper.find('[data-testid="startDate"]');
    const button = wrapper.find('button');

    expect(inputSelect).toHaveLength(1);
    expect(inputDate).toHaveLength(1);
    expect(button).toHaveLength(1);
  });
});
