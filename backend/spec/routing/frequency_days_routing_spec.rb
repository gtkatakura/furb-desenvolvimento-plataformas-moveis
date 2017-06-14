require "rails_helper"

RSpec.describe FrequencyDaysController, type: :routing do
  describe "routing" do

    it "routes to #index" do
      expect(:get => "/frequency_days").to route_to("frequency_days#index")
    end


    it "routes to #show" do
      expect(:get => "/frequency_days/1").to route_to("frequency_days#show", :id => "1")
    end


    it "routes to #create" do
      expect(:post => "/frequency_days").to route_to("frequency_days#create")
    end

    it "routes to #update via PUT" do
      expect(:put => "/frequency_days/1").to route_to("frequency_days#update", :id => "1")
    end

    it "routes to #update via PATCH" do
      expect(:patch => "/frequency_days/1").to route_to("frequency_days#update", :id => "1")
    end

    it "routes to #destroy" do
      expect(:delete => "/frequency_days/1").to route_to("frequency_days#destroy", :id => "1")
    end

  end
end
