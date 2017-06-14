class PeriodDisciplinesController < ApplicationController
  # before_action :authenticate_user!
  before_action :set_period_discipline, only: [:show, :update, :destroy]

  # GET /period_disciplines
  def index
    @period_disciplines = PeriodDiscipline
      .includes(:discipline)
      .where(graduation_semester_id: params[:graduation_semester_id])

    @period_disciplines = @period_disciplines.map do |period_discipline|
      {
        id: period_discipline.id,
        graduation_semester_id: period_discipline.graduation_semester_id,
        period_start: period_discipline.period_start,
        period_end: period_discipline.period_end,
        instructor_id: period_discipline.instructor_id,
        created_at: period_discipline.created_at,
        updated_at: period_discipline.updated_at,
        discipline: {
          id: period_discipline.discipline.id,
          name: period_discipline.discipline.name
        }
      }
    end

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
      render json: @period_discipline.errors.full_messages, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /period_disciplines/1
  def update
    if @period_discipline.update(period_discipline_params)
      render json: @period_discipline
    else
      render json: @period_discipline.errors.full_messages, status: :unprocessable_entity
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
      params.require(:period_discipline).permit(:graduation_semester_id, :discipline_id, :instructor_id, period: [:start, :end])
    end
end
