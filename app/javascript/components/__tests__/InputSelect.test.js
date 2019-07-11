import { shallow, mount } from 'enzyme';
import * as React from 'react';
import InputSelect from '../InputSelect'

describe('InputSelect.js', () => {
  const testOptions = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
  ]

  it('renders correctly', () => {
    const wrapper = shallow(
      <InputSelect options={testOptions} />,
    );
  
    expect(wrapper).toMatchSnapshot();
  });

  it('displays a default value', () => {
    const wrapper = mount(
      <InputSelect 
        options={testOptions}
        value={testOptions[1].value}
      />);
    
    expect(wrapper.html()).toContain('Strawberry');
  });
})
