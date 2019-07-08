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
    pto: 12
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

    const button = wrapper.find('a');

    expect(button).toHaveLength(1);
    expect(button.html()).toContain("Logout");
  });

it("contains Profile and Pto", () => {  
    const wrapper = render(
      <EmployeeView currentUser={user} />,
    );
  
    const profile = wrapper.find('[data-testid="profile"]');
    const pto = wrapper.find('[data-testid="pto"]');

    expect(profile).toHaveLength(1);
    expect(pto).toHaveLength(1);
  });
})
