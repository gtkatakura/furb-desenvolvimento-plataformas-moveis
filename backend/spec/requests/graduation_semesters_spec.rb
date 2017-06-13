require 'rails_helper'

RSpec.describe "GraduationSemesters", type: :request do
  describe "GET /graduation_semesters" do
    it "works! (now write some real specs)" do
      get graduation_semesters_path
      expect(response).to have_http_status(200)
    end
  end
end
