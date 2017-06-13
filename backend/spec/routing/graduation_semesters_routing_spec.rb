require "rails_helper"

RSpec.describe GraduationSemestersController, type: :routing do
  describe "routing" do

    it "routes to #index" do
      expect(:get => "/graduation_semesters").to route_to("graduation_semesters#index")
    end


    it "routes to #show" do
      expect(:get => "/graduation_semesters/1").to route_to("graduation_semesters#show", :id => "1")
    end


    it "routes to #create" do
      expect(:post => "/graduation_semesters").to route_to("graduation_semesters#create")
    end

    it "routes to #update via PUT" do
      expect(:put => "/graduation_semesters/1").to route_to("graduation_semesters#update", :id => "1")
    end

    it "routes to #update via PATCH" do
      expect(:patch => "/graduation_semesters/1").to route_to("graduation_semesters#update", :id => "1")
    end

    it "routes to #destroy" do
      expect(:delete => "/graduation_semesters/1").to route_to("graduation_semesters#destroy", :id => "1")
    end

  end
end
