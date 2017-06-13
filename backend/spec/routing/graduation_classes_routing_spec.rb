require "rails_helper"

RSpec.describe GraduationClassesController, type: :routing do
  describe "routing" do

    it "routes to #index" do
      expect(:get => "/graduation_classes").to route_to("graduation_classes#index")
    end


    it "routes to #show" do
      expect(:get => "/graduation_classes/1").to route_to("graduation_classes#show", :id => "1")
    end


    it "routes to #create" do
      expect(:post => "/graduation_classes").to route_to("graduation_classes#create")
    end

    it "routes to #update via PUT" do
      expect(:put => "/graduation_classes/1").to route_to("graduation_classes#update", :id => "1")
    end

    it "routes to #update via PATCH" do
      expect(:patch => "/graduation_classes/1").to route_to("graduation_classes#update", :id => "1")
    end

    it "routes to #destroy" do
      expect(:delete => "/graduation_classes/1").to route_to("graduation_classes#destroy", :id => "1")
    end

  end
end
