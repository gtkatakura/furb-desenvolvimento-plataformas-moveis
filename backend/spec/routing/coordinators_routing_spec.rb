require "rails_helper"

RSpec.describe CoordinatorsController, type: :routing do
  describe "routing" do

    it "routes to #index" do
      expect(:get => "/coordinators").to route_to("coordinators#index")
    end


    it "routes to #show" do
      expect(:get => "/coordinators/1").to route_to("coordinators#show", :id => "1")
    end


    it "routes to #create" do
      expect(:post => "/coordinators").to route_to("coordinators#create")
    end

    it "routes to #update via PUT" do
      expect(:put => "/coordinators/1").to route_to("coordinators#update", :id => "1")
    end

    it "routes to #update via PATCH" do
      expect(:patch => "/coordinators/1").to route_to("coordinators#update", :id => "1")
    end

    it "routes to #destroy" do
      expect(:delete => "/coordinators/1").to route_to("coordinators#destroy", :id => "1")
    end

  end
end
