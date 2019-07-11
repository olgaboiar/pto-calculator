import { render } from 'enzyme';
import * as React from 'react';
import GuestView from '../GuestView';

describe('GuestView.js', () => {
  it('renders correctly', () => {
    const wrapper = render(
      <GuestView />,
    );

    expect(wrapper).toMatchSnapshot();
  });

  it('shows link to sign in', () => {
    const wrapper = render(
      <GuestView />,
    );

    const link = wrapper.find('a');
    expect(link).toHaveLength(1);
    expect(link.html()).toEqual('Please log in to be able to see your PTO');
  });
});
