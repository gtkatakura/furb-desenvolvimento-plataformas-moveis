require "rails_helper"

RSpec.describe BeaconPresencesController, type: :routing do
  describe "routing" do

    it "routes to #index" do
      expect(:get => "/beacon_presences").to route_to("beacon_presences#index")
    end


    it "routes to #show" do
      expect(:get => "/beacon_presences/1").to route_to("beacon_presences#show", :id => "1")
    end


    it "routes to #create" do
      expect(:post => "/beacon_presences").to route_to("beacon_presences#create")
    end

    it "routes to #update via PUT" do
      expect(:put => "/beacon_presences/1").to route_to("beacon_presences#update", :id => "1")
    end

    it "routes to #update via PATCH" do
      expect(:patch => "/beacon_presences/1").to route_to("beacon_presences#update", :id => "1")
    end

    it "routes to #destroy" do
      expect(:delete => "/beacon_presences/1").to route_to("beacon_presences#destroy", :id => "1")
    end

  end
end
