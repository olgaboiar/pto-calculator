import { render, mount } from "enzyme";
import * as React from "react";
import moment from "moment";
import ProfileForm from "../ProfileForm";

describe("ProfileForm.js", () => {
  const user = {
    user: {
      id: 56
    },
    profile: {
      start_date: moment("2019-01-01").toDate(),
    },
    pto: 12
  }

  const message = "test message";

  it("renders correctly", () => {  
    const wrapper = render(
      <ProfileForm user={user} message={message} />,
    );
  
    expect(wrapper).toMatchSnapshot();
  });

  it("contains InputSelect, InputDate, and Submit Button", () => {  
    const wrapper = mount(
      <ProfileForm user={user} message={message}/>,
    );

    const inputSelect = wrapper.find('[data-testid="position"]');
    const inputDate = wrapper.find('[data-testid="startDate"]');
    const button = wrapper.find('button');

    expect(inputSelect).toHaveLength(3);
    expect(inputDate).toHaveLength(2);
    expect(button).toHaveLength(1);
  });
})
