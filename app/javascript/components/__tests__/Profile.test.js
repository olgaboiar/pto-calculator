import { render } from "enzyme";
import * as React from "react";
import moment from "moment";
import Profile from "../Profile";

describe("Profile.js", () => {
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
      <Profile user={user} message={message} />,
    );
  
    expect(wrapper).toMatchSnapshot();
  });

  it("shows amount of Profile form", () => {  
    const wrapper = render(
      <Profile user={user} message={message} />,
    );
    const form = wrapper.find('form');
    expect(form).toHaveLength(1);
    expect(form.text()).toContain(message);
  });
})
