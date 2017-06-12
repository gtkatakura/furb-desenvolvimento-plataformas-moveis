require 'rails_helper'

describe CoordinatorsController, type: :controller do

  let(:user) { User.create!(email: 'test@test.com', password: '123456789') }
  let(:auth_headers) { user.create_new_auth_token }

  before { request.headers.merge!(auth_headers) }

  let(:valid_attributes) { { user_id: user.id } }
  let(:invalid_attributes) { { user_id: nil } }

  describe 'GET #index' do
    it "returns a success response" do
      coordinator = Coordinator.create! valid_attributes
      get :index, params: {}
      expect(response).to be_success
    end
  end

  describe "GET #show" do
    it "returns a success response" do
      coordinator = Coordinator.create! valid_attributes
      get :show, params: {id: coordinator.to_param}
      expect(response).to be_success
    end
  end

  describe "POST #create" do
    context "with valid params" do
      it "creates a new Coordinator" do
        expect {
          post :create, params: {coordinator: valid_attributes}
        }.to change(Coordinator, :count).by(1)
      end

      it 'renders a JSON response with the new coordinator' do

        post :create, params: {coordinator: valid_attributes}
        expect(response).to have_http_status(:created)
        expect(response.content_type).to eq('application/json')
        expect(response.location).to eq(coordinator_url(Coordinator.last))
      end
    end

    context "with invalid params" do
      it "renders a JSON response with errors for the new coordinator" do

        post :create, params: {coordinator: invalid_attributes}
        expect(response).to have_http_status(:unprocessable_entity)
        expect(response.content_type).to eq('application/json')
      end
    end
  end

  describe "PUT #update" do
    context "with valid params" do
      let(:new_attributes) {
        skip("Add a hash of attributes valid for your model")
      }

      it "updates the requested coordinator" do
        coordinator = Coordinator.create! valid_attributes
        put :update, params: {id: coordinator.to_param, coordinator: new_attributes}
        coordinator.reload
        skip("Add assertions for updated state")
      end

      it "renders a JSON response with the coordinator" do
        coordinator = Coordinator.create! valid_attributes

        put :update, params: {id: coordinator.to_param, coordinator: valid_attributes}
        expect(response).to have_http_status(:ok)
        expect(response.content_type).to eq('application/json')
      end
    end

    context "with invalid params" do
      it "renders a JSON response with errors for the coordinator" do
        coordinator = Coordinator.create! valid_attributes

        put :update, params: {id: coordinator.to_param, coordinator: invalid_attributes}
        expect(response).to have_http_status(:unprocessable_entity)
        expect(response.content_type).to eq('application/json')
      end
    end
  end

  describe "DELETE #destroy" do
    it "destroys the requested coordinator" do
      coordinator = Coordinator.create! valid_attributes
      expect {
        delete :destroy, params: {id: coordinator.to_param}
      }.to change(Coordinator, :count).by(-1)
    end
  end

end
