class GraduationSemestersController < ApplicationController
  before_action :authenticate_user!
  before_action :set_graduation_semester, only: [:show, :update, :destroy]

  # GET /graduation_semesters
  def index
    @graduation_semesters = GraduationSemester.all

    render json: @graduation_semesters
  end

  # GET /graduation_semesters/1
  def show
    render json: @graduation_semester
  end

  # POST /graduation_semesters
  def create
    @graduation_semester = GraduationSemester.new(graduation_semester_params)

    if @graduation_semester.save
      render json: @graduation_semester, status: :created, location: @graduation_semester
    else
      render json: @graduation_semester.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /graduation_semesters/1
  def update
    if @graduation_semester.update(graduation_semester_params)
      render json: @graduation_semester
    else
      render json: @graduation_semester.errors, status: :unprocessable_entity
    end
  end

  # DELETE /graduation_semesters/1
  def destroy
    @graduation_semester.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_graduation_semester
      @graduation_semester = GraduationSemester.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def graduation_semester_params
      params.require(:graduation_semester).permit(:number, :graduation_class_id)
    end
end
