require 'rails_helper'

RSpec.describe "Coordinators", type: :request do
  describe "GET /coordinators" do
    it "works! (now write some real specs)" do
      get coordinators_path
      expect(response).to have_http_status(200)
    end
  end
end
