require 'rails_helper'

RSpec.describe "Presences", type: :request do
  describe "GET /presences" do
    it "works! (now write some real specs)" do
      get presences_path
      expect(response).to have_http_status(200)
    end
  end
end
