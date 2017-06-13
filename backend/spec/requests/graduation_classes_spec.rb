require 'rails_helper'

RSpec.describe "GraduationClasses", type: :request do
  describe "GET /graduation_classes" do
    it "works! (now write some real specs)" do
      get graduation_classes_path
      expect(response).to have_http_status(200)
    end
  end
end
