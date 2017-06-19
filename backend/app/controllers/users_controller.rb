class UsersController < ApplicationController
  before_action :authenticate_user!

  # GET /users
  def show
    @user = User.find(params[:id])
    render json: @user.as_json.merge(student: @user.student.as_json)
  end
end
