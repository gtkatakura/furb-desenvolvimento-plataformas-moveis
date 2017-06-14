require 'rails_helper'

RSpec.describe "BeaconPresences", type: :request do
  describe "GET /beacon_presences" do
    it "works! (now write some real specs)" do
      get beacon_presences_path
      expect(response).to have_http_status(200)
    end
  end
end
