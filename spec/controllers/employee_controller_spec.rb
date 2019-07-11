# frozen_string_literal: true

require 'spec_helper'

RSpec.describe EmployeeController do
  before do
    @user = User.create(
      email: 'test@example.com',
      password: 'password123',
      password_confirmation: 'password123'
    )
    sign_in(@user)
  end

  describe 'POST profile_update' do
    context 'with valid attributes' do
      it 'updates employee in the database' do
        post :profile_update, params: { user_id: @user.id, location: 'LA' }
        employee = Employee.find_by(user_id: @user.id)
        expect(employee.location).to eq('LA')
      end

      it 'responses with 204 status' do
        post :profile_update, params: { user_id: @user.id, location: 'LA' }
        expect(response.status).to eq 204
      end
    end
  end
end
