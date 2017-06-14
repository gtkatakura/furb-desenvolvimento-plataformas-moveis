class CoordinatorsController < ApplicationController
  before_action :authenticate_user!
  before_action :set_coordinator, only: [:show, :update, :destroy]

  # GET /coordinators
  def index
    @coordinators = Coordinator.all
    render json: @coordinators
  end

  # GET /coordinators/1
  def show
    render json: @coordinator
  end

  # POST /coordinators
  def create
    @coordinator = Coordinator.new(coordinator_params)

    if @coordinator.save
      render json: @coordinator, status: :created, location: @coordinator
    else
      render json: @coordinator.errors.full_messages, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /coordinators/1
  def update
    if @coordinator.update(coordinator_params)
      render json: @coordinator
    else
      render json: @coordinator.errors, status: :unprocessable_entity
    end
  end

  # DELETE /coordinators/1
  def destroy
    @coordinator.destroy
    render json: true
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_coordinator
      @coordinator = Coordinator.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def coordinator_params
      params.require(:coordinator).permit(:user_id)
    end
end
