require 'rails_helper'

RSpec.describe "FrequencyDays", type: :request do
  describe "GET /frequency_days" do
    it "works! (now write some real specs)" do
      get frequency_days_path
      expect(response).to have_http_status(200)
    end
  end
end
