import { render, mount } from 'enzyme';
import * as React from 'react';
import moment from 'moment';
import EmploymentHistoryForm from '../EmploymentHistoryForm';

describe('EmploymentHistoryForm.js', () => {
  const validEmployment = {
    position: 'crafter',
    start_date: moment('2019-01-01').toDate(),
    end_date: moment('2019-02-01').toDate(),
  };
    
  const invalidEmployment = {
    position: 'crafter',
    start_date: moment('2019-05-01').toDate(),
    end_date: moment('2019-02-01').toDate(),
  };

  const user = {
    user: {
      id: 56,
    },
    profile: {
      start_date: moment('2019-01-01').toDate(),
    },
    pto: 12,
    employment: [{validEmployment}],
  };

  const message = 'test message';

  it('renders correctly', () => {
    const wrapper = render(
      <EmploymentHistoryForm user={user} message={message} />,
    );

    expect(wrapper).toMatchSnapshot();
  });

  it('contains InputSelect, InputDate, and Submit Button', () => {
    const wrapper = mount(
      <EmploymentHistoryForm user={user} message={message} />,
    );

    const inputSelect = wrapper.find('[data-testid="position"]');
    const inputDate = wrapper.find('[data-testid="startDate"]');
    const button = wrapper.find('button');

    expect(inputSelect).toHaveLength(1);
    expect(inputDate).toHaveLength(2);
    expect(button).toHaveLength(1);
  });

  it('returns true if employment history is valid', () => {
    const wrapper = mount(
      <EmploymentHistoryForm user={user} message={message} />,
    );

    expect(wrapper.instance().checkDateValidation([validEmployment])).toBe(true);
  });

  it('returns false if employment history is invalid', () => {
    const wrapper = mount(
      <EmploymentHistoryForm user={user} message={message} />,
    );

    expect(wrapper.instance().checkDateValidation([invalidEmployment])).toBe(false);
  });

  it('returns false if at least one record in history array is invalid', () => {
    const wrapper = mount(
      <EmploymentHistoryForm user={user} message={message} />,
    );

    expect(wrapper.instance().checkDateValidation([validEmployment, invalidEmployment])).toBe(false);
  });

  it('calls generateUniqueKey for rendering employment history', () => {
    const wrapper = mount(
      <EmploymentHistoryForm user={user} message={message} />,
    );

    expect(wrapper.instance().generateUniqueKey()).not.toBeNull();
    expect(wrapper.instance().generateUniqueKey()).toBeGreaterThan(1);
  });
});
