# frozen_string_literal: true

require 'test_helper'

class PtoCalculatorControllerTest < ActionDispatch::IntegrationTest
  test 'should get index' do
    pto_calculator_index_url = "/"
    get pto_calculator_index_url
    assert_response :success
  end
end
