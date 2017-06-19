require 'rails_helper'

RSpec.describe "PeriodDays", type: :request do
  describe "GET /period_days" do
    it "works! (now write some real specs)" do
      get period_days_path
      expect(response).to have_http_status(200)
    end
  end
end
