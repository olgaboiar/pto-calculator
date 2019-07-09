# frozen_string_literal: true

require 'test_helper'

class EmployeeControllerTest < ActionDispatch::IntegrationTest
  test 'should update employee' do
    post '/update', params: { user_id: employees(:two).user_id, location: 'LA' }
    actual = Employee.find_by(user_id: employees(:two).user_id).location
    assert_equal 'LA', actual
  end
end
