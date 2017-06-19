require "rails_helper"

RSpec.describe PeriodDaysController, type: :routing do
  describe "routing" do

    it "routes to #index" do
      expect(:get => "/period_days").to route_to("period_days#index")
    end


    it "routes to #show" do
      expect(:get => "/period_days/1").to route_to("period_days#show", :id => "1")
    end


    it "routes to #create" do
      expect(:post => "/period_days").to route_to("period_days#create")
    end

    it "routes to #update via PUT" do
      expect(:put => "/period_days/1").to route_to("period_days#update", :id => "1")
    end

    it "routes to #update via PATCH" do
      expect(:patch => "/period_days/1").to route_to("period_days#update", :id => "1")
    end

    it "routes to #destroy" do
      expect(:delete => "/period_days/1").to route_to("period_days#destroy", :id => "1")
    end

  end
end
