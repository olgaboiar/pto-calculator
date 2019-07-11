import { render } from 'enzyme';
import * as React from 'react';
import Pto from '../Pto'

describe('Pto.js', () => {
  const user = {
    pto: 12
  }

  it('renders correctly', () => {  
    const wrapper = render(
      <Pto user={user}/>,
    );
  
    expect(wrapper).toMatchSnapshot();
  });

  it('shows amount of PTO hours', () => {  
    const wrapper = render(
      <Pto user={user}/>,
    );
  
    expect(wrapper.text()).toContain('12');
  });
})
