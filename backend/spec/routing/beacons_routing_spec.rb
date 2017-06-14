require "rails_helper"

RSpec.describe BeaconsController, type: :routing do
  describe "routing" do

    it "routes to #index" do
      expect(:get => "/beacons").to route_to("beacons#index")
    end


    it "routes to #show" do
      expect(:get => "/beacons/1").to route_to("beacons#show", :id => "1")
    end


    it "routes to #create" do
      expect(:post => "/beacons").to route_to("beacons#create")
    end

    it "routes to #update via PUT" do
      expect(:put => "/beacons/1").to route_to("beacons#update", :id => "1")
    end

    it "routes to #update via PATCH" do
      expect(:patch => "/beacons/1").to route_to("beacons#update", :id => "1")
    end

    it "routes to #destroy" do
      expect(:delete => "/beacons/1").to route_to("beacons#destroy", :id => "1")
    end

  end
end
