require "rails_helper"

RSpec.describe PeriodDisciplinesController, type: :routing do
  describe "routing" do

    it "routes to #index" do
      expect(:get => "/period_disciplines").to route_to("period_disciplines#index")
    end


    it "routes to #show" do
      expect(:get => "/period_disciplines/1").to route_to("period_disciplines#show", :id => "1")
    end


    it "routes to #create" do
      expect(:post => "/period_disciplines").to route_to("period_disciplines#create")
    end

    it "routes to #update via PUT" do
      expect(:put => "/period_disciplines/1").to route_to("period_disciplines#update", :id => "1")
    end

    it "routes to #update via PATCH" do
      expect(:patch => "/period_disciplines/1").to route_to("period_disciplines#update", :id => "1")
    end

    it "routes to #destroy" do
      expect(:delete => "/period_disciplines/1").to route_to("period_disciplines#destroy", :id => "1")
    end

  end
end
