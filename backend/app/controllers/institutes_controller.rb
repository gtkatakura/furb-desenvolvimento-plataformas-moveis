class InstitutesController < ApplicationController
  before_action :authenticate_user!
  before_action :set_institute, only: [:show, :update, :destroy]

  # GET /institutes
  def index
    @institutes = Institute.all

    render json: @institutes
  end

  # GET /institutes/1
  def show
    render json: @institute
  end

  # POST /institutes
  def create
    @institute = Institute.new(institute_params)

    if @institute.save
      render json: @institute, status: :created, location: @institute
    else
      render json: @institute.errors.full_messages, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /institutes/1
  def update
    if @institute.update(institute_params)
      render json: @institute
    else
      render json: @institute.errors.full_messages, status: :unprocessable_entity
    end
  end

  # DELETE /institutes/1
  def destroy
    @institute.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_institute
      @institute = Institute.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def institute_params
      params.require(:institute).permit(:name, :maintainer_id)
    end
end
