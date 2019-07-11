import { render, mount } from "enzyme";
import * as React from "react";
import moment from "moment";
import EmployeeView from "../EmployeeView";

describe("EmployeeView.js", () => {
  const user = {
    user: {
      id: 56
    },
    profile: {
      start_date: moment("2019-01-01").toDate(),
    },
    pto: 12,
    employment: [{}]
  }

  it("renders correctly", () => {  
    const wrapper = render(
      <EmployeeView currentUser={user} />,
    );
  
    expect(wrapper).toMatchSnapshot();
  });

  it("contains Log out Button", () => {  
    const wrapper = mount(
      <EmployeeView currentUser={user} />,
    );

    expect(wrapper.html()).toContain("Logout");
  });

  it("contains Profile and Pto", () => {  
    const wrapper = render(
      <EmployeeView currentUser={user} />,
    );
  
    const employment = wrapper.find('[data-testid="employment"]');
    const pto = wrapper.find('[data-testid="pto"]');

    expect(employment).toHaveLength(1);
    expect(pto).toHaveLength(1);
  });
})
