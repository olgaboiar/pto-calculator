# frozen_string_literal: true

require 'test_helper'

class EmploymentHistoryTest < ActiveSupport::TestCase
  def setup
    @employment_history = employment_histories(:valid)
  end

  test 'valid employment_history' do
    assert @employment_history.valid?
  end
      
  test 'invalid without user_id' do
    @employment_history.user_id = nil
    refute @employment_history.valid?
    assert_not_nil @employment_history.errors[:user_id]
  end
end
