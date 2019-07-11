import { mount } from 'enzyme';
import * as React from 'react';
import App from '../App'

const appState = {
  user: {},
  employee: {
    start_date: null,
    position: null
  },
  employment: [{}]
}

describe('App.js', () => {
  it('renders correctly', () => {
    const wrapper = mount(
      <App appState={appState} />, { attachToDocument: true }
    );
  
    expect(wrapper).toMatchSnapshot();
  });
})
