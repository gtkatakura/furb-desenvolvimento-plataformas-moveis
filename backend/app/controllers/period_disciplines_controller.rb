class PeriodDisciplinesController < ApplicationController
  before_action :authenticate_user!
  before_action :set_period_discipline, only: [:show, :update, :destroy]

  # GET /period_disciplines
  def index
    @period_disciplines = PeriodDiscipline.all

    render json: @period_disciplines
  end

  # GET /period_disciplines/1
  def show
    render json: @period_discipline
  end

  # POST /period_disciplines
  def create
    @period_discipline = PeriodDiscipline.new(period_discipline_params)

    if @period_discipline.save
      render json: @period_discipline, status: :created, location: @period_discipline
    else
      render json: @period_discipline.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /period_disciplines/1
  def update
    if @period_discipline.update(period_discipline_params)
      render json: @period_discipline
    else
      render json: @period_discipline.errors, status: :unprocessable_entity
    end
  end

  # DELETE /period_disciplines/1
  def destroy
    @period_discipline.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_period_discipline
      @period_discipline = PeriodDiscipline.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def period_discipline_params
      params.require(:period_discipline).permit(:graduation_semester_id, :discipline_id, :period_start, :period_end, :instructor_id)
    end
end
