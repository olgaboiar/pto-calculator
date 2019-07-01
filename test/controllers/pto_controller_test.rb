require 'test_helper'

class PtoControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get pto_index_url
    assert_response :success
  end

end
