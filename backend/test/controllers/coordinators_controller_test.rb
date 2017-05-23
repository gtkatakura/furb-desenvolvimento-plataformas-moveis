require 'test_helper'

class CoordinatorsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @coordinator = coordinators(:one)
  end

  test "should get index" do
    get coordinators_url, as: :json
    assert_response :success
  end

  test "should create coordinator" do
    assert_difference('Coordinator.count') do
      post coordinators_url, params: { coordinator: { user_id: @coordinator.user_id } }, as: :json
    end

    assert_response 201
  end

  test "should show coordinator" do
    get coordinator_url(@coordinator), as: :json
    assert_response :success
  end

  test "should update coordinator" do
    patch coordinator_url(@coordinator), params: { coordinator: { user_id: @coordinator.user_id } }, as: :json
    assert_response 200
  end

  test "should destroy coordinator" do
    assert_difference('Coordinator.count', -1) do
      delete coordinator_url(@coordinator), as: :json
    end

    assert_response 204
  end
end
