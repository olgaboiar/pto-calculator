import { mount } from "enzyme";
import * as React from "react";
import App from "../App"

const appState = {
  user: {},
  employee: {
    start_date: null,
    position: null
  }  
}

describe("App.js", () => {
  it("renders correctly", () => {
    const wrapper = mount(
      <App appState={appState} />, { attachToDocument: true }
    );
  
    expect(wrapper).toMatchSnapshot();
  });

//   it("contains greeting and description", () => {  
//     const wrapper = mount(
//       <App />,
//     );
  
//     const description = wrapper.find('[data-testid="description"]');
//     const greeting = wrapper.find('[data-testid="greeting"]');
//     expect(description).toHaveLength(1);
//     expect(greeting).toHaveLength(1);
//   });
})
