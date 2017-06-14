class FrequencyDaysController < ApplicationController
  before_action :authenticate_user!
  before_action :set_frequency_day, only: [:show, :update, :destroy]

  # GET /frequency_days
  def index
    @frequency_days = FrequencyDay.where(period_discipline_id: params[:period_discipline_id])

    render json: @frequency_days
  end

  # GET /frequency_days/1
  def show
    render json: @frequency_day
  end

  # POST /frequency_days
  def create
    @frequency_day = FrequencyDay.new(frequency_day_params)

    if @frequency_day.save
      render json: @frequency_day, status: :created, location: @frequency_day
    else
      render json: @frequency_day.errors.full_messages, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /frequency_days/1
  def update
    if @frequency_day.update(frequency_day_params)
      render json: @frequency_day
    else
      render json: @frequency_day.errors.full_messages, status: :unprocessable_entity
    end
  end

  # DELETE /frequency_days/1
  def destroy
    @frequency_day.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_frequency_day
      @frequency_day = FrequencyDay.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def frequency_day_params
      params.require(:frequency_day).permit(:date, :period_discipline_id)
    end
end
