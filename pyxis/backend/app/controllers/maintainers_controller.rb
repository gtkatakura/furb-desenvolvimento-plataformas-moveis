class MaintainersController < ApplicationController
  before_action :authenticate_user!
  before_action :set_maintainer, only: [:show, :update, :destroy]

  # GET /maintainers
  def index
    @maintainers = Maintainer.all

    render json: @maintainers
  end

  # GET /maintainers/1
  def show
    render json: @maintainer
  end

  # POST /maintainers
  def create
    @maintainer = Maintainer.new(maintainer_params)

    if @maintainer.save
      render json: @maintainer, status: :created, location: @maintainer
    else
      render json: @maintainer.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /maintainers/1
  def update
    if @maintainer.update(maintainer_params)
      render json: @maintainer
    else
      render json: @maintainer.errors, status: :unprocessable_entity
    end
  end

  # DELETE /maintainers/1
  def destroy
    @maintainer.destroy
    render json: true
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_maintainer
      @maintainer = Maintainer.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def maintainer_params
      puts params
      params.require(:maintainer).permit(:user_id)
    end
end
