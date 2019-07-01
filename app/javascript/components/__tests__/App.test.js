import { shallow, render } from "enzyme";
import * as React from "react";
import App from "../App"

describe("App.js", () => {
    it("renders correctly", () => {  
      const wrapper = shallow(
        <App
        />,
      );
  
       expect(wrapper).toMatchSnapshot();

       expect(wrapper.text()).toContain("Hello World from React!");
    });

    it("shows Hello World", () => {  
        const wrapper = render(
          <App
          />,
        );
  
         expect(wrapper.text()).toContain("Hello World from React!");
      });
})