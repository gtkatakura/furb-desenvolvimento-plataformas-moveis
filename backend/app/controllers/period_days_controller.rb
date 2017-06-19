class PeriodDaysController < ApplicationController
  before_action :authenticate_user!
  before_action :set_period_day, only: [:show, :update, :destroy]

  # GET /period_days
  def index
    @period_days = PeriodDay.where(institute_id: params[:institute_id])

    render json: @period_days
  end

  # GET /period_days/1
  def show
    render json: @period_day
  end

  # POST /period_days
  def create
    @period_day = PeriodDay.new(period_day_params)

    if @period_day.save
      render json: @period_day, status: :created, location: @period_day
    else
      render json: @period_day.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /period_days/1
  def update
    if @period_day.update(period_day_params)
      render json: @period_day
    else
      render json: @period_day.errors, status: :unprocessable_entity
    end
  end

  # DELETE /period_days/1
  def destroy
    @period_day.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_period_day
      @period_day = PeriodDay.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def period_day_params
      params.require(:period_day).permit(:institute_id, :name, :class_time, :interval_time, :start_of_class)
    end
end
