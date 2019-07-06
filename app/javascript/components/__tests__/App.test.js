import { mount } from "enzyme";
import * as React from "react";
import App from "../App"

describe("App.js", () => {
  it("renders correctly", () => {
    const wrapper = mount(
      <App />, { attachToDocument: true }
    );
  
    expect(wrapper).toMatchSnapshot();
  });

  it("contains greeting and description", () => {  
    const wrapper = mount(
      <App />,
    );
  
    const description = wrapper.find('[data-testid="description"]');
    const greeting = wrapper.find('[data-testid="greeting"]');
    expect(description).toHaveLength(1);
    expect(greeting).toHaveLength(1);
  });
})
