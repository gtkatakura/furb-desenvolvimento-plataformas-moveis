class StudentsPeriodDisciplinesController < ApplicationController
  before_action :set_students_period_discipline, only: [:show, :update, :destroy]

  # GET /students_period_disciplines
  def index
    @students_period_disciplines = StudentsPeriodDiscipline.all

    render json: @students_period_disciplines
  end

  # GET /students_period_disciplines/1
  def show
    render json: @students_period_discipline
  end

  # POST /students_period_disciplines
  def create
    @students_period_discipline = StudentsPeriodDiscipline.new(students_period_discipline_params)

    if @students_period_discipline.save
      render json: @students_period_discipline, status: :created, location: @students_period_discipline
    else
      render json: @students_period_discipline.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /students_period_disciplines/1
  def update
    if @students_period_discipline.update(students_period_discipline_params)
      render json: @students_period_discipline
    else
      render json: @students_period_discipline.errors, status: :unprocessable_entity
    end
  end

  # DELETE /students_period_disciplines/1
  def destroy
    @students_period_discipline.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_students_period_discipline
      @students_period_discipline = StudentsPeriodDiscipline.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def students_period_discipline_params
      params.require(:students_period_discipline).permit(:student_id, :period_discipline_id)
    end
end
