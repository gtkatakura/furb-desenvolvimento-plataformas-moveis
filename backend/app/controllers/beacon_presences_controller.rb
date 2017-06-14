class BeaconPresencesController < ApplicationController
  before_action :authenticate_user!
  before_action :set_beacon_presence, only: [:show, :update, :destroy]

  # GET /beacon_presences
  def index
    @beacon_presences = BeaconPresence.all

    render json: @beacon_presences
  end

  # GET /beacon_presences/1
  def show
    render json: @beacon_presence
  end

  # POST /beacon_presences
  def create
    @beacon_presence = BeaconPresence.new(beacon_presence_params)

    if @beacon_presence.save
      render json: @beacon_presence, status: :created, location: @beacon_presence
    else
      render json: @beacon_presence.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /beacon_presences/1
  def update
    if @beacon_presence.update(beacon_presence_params)
      render json: @beacon_presence
    else
      render json: @beacon_presence.errors, status: :unprocessable_entity
    end
  end

  # DELETE /beacon_presences/1
  def destroy
    @beacon_presence.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_beacon_presence
      @beacon_presence = BeaconPresence.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def beacon_presence_params
      params.require(:beacon_presence).permit(:beacon_id, :user_id)
    end
end
