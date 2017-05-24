require 'test_helper'

class MaintainersControllerTest < ActionDispatch::IntegrationTest
  setup do
    @maintainer = maintainers(:one)
  end

  test "should get index" do
    get maintainers_url, as: :json
    assert_response :success
  end

  test "should create maintainer" do
    assert_difference('Maintainer.count') do
      post maintainers_url, params: { maintainer: { user_id: @maintainer.user_id } }, as: :json
    end

    assert_response 201
  end

  test "should show maintainer" do
    get maintainer_url(@maintainer), as: :json
    assert_response :success
  end

  test "should update maintainer" do
    patch maintainer_url(@maintainer), params: { maintainer: { user_id: @maintainer.user_id } }, as: :json
    assert_response 200
  end

  test "should destroy maintainer" do
    assert_difference('Maintainer.count', -1) do
      delete maintainer_url(@maintainer), as: :json
    end

    assert_response 204
  end
end
