require 'rails_helper'

RSpec.describe "PeriodDisciplines", type: :request do
  describe "GET /period_disciplines" do
    it "works! (now write some real specs)" do
      get period_disciplines_path
      expect(response).to have_http_status(200)
    end
  end
end
