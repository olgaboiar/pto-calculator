# frozen_string_literal: true

require 'test_helper'

class EmployeeTest < ActiveSupport::TestCase
  def setup
    @employee = employees(:valid)
  end

  test 'valid employee' do
    assert @employee.valid?
  end
  
  test 'invalid without user_id' do
    @employee.user_id = nil
    refute @employee.valid?
    assert_not_nil @employee.errors[:user_id]
  end
end
