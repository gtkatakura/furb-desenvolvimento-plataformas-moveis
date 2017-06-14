class GraduationClassesController < ApplicationController
  before_action :authenticate_user!
  before_action :set_graduation_class, only: [:show, :update, :destroy]

  # GET /graduation_classes
  def index
    @graduation_classes = GraduationClass.all

    render json: @graduation_classes
  end

  # GET /graduation_classes/1
  def show
    render json: @graduation_class
  end

  # POST /graduation_classes
  def create
    @graduation_class = GraduationClass.new(graduation_class_params)

    if @graduation_class.save
      render json: @graduation_class, status: :created, location: @graduation_class
    else
      render json: @graduation_class.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /graduation_classes/1
  def update
    if @graduation_class.update(graduation_class_params)
      render json: @graduation_class
    else
      render json: @graduation_class.errors, status: :unprocessable_entity
    end
  end

  # DELETE /graduation_classes/1
  def destroy
    @graduation_class.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_graduation_class
      @graduation_class = GraduationClass.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def graduation_class_params
      params.require(:graduation_class).permit(:year, :semesters, :course_id)
    end
end
