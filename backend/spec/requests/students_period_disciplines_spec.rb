require 'rails_helper'

RSpec.describe "StudentsPeriodDisciplines", type: :request do
  describe "GET /students_period_disciplines" do
    it "works! (now write some real specs)" do
      get students_period_disciplines_path
      expect(response).to have_http_status(200)
    end
  end
end
