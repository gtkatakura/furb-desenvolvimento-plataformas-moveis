require "rails_helper"

RSpec.describe StudentsPeriodDisciplinesController, type: :routing do
  describe "routing" do

    it "routes to #index" do
      expect(:get => "/students_period_disciplines").to route_to("students_period_disciplines#index")
    end


    it "routes to #show" do
      expect(:get => "/students_period_disciplines/1").to route_to("students_period_disciplines#show", :id => "1")
    end


    it "routes to #create" do
      expect(:post => "/students_period_disciplines").to route_to("students_period_disciplines#create")
    end

    it "routes to #update via PUT" do
      expect(:put => "/students_period_disciplines/1").to route_to("students_period_disciplines#update", :id => "1")
    end

    it "routes to #update via PATCH" do
      expect(:patch => "/students_period_disciplines/1").to route_to("students_period_disciplines#update", :id => "1")
    end

    it "routes to #destroy" do
      expect(:delete => "/students_period_disciplines/1").to route_to("students_period_disciplines#destroy", :id => "1")
    end

  end
end
