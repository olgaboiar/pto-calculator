# frozen_string_literal: true

require 'spec_helper'

RSpec.describe EmploymentHistoryController do
  before do
    @user = User.create(
      email: 'test@8thlight.com.com',
      password: 'password123',
      password_confirmation: 'password123'
    )
    sign_in(@user)
    employee = Employee.find_by(user_id: @user.id)
    @update_params = {
      employee_id: employee.id,
      entries: [{
        id: @user.id,
        employee_id: employee.id,
        position: 'apprentice',
        start_date: '2019-07-11'
      }],
      initial_ids: [30, 33, 34]
    }
  end

  describe 'POST profile_update' do
    context 'with valid attributes' do
      it 'creates an instance of EmploymentHistoryManager' do
        post :history_update, params: @update_params
        expect(assigns(:manager)).to be
      end

      it 'responses with 204 status' do
        post :history_update, params: @update_params
        expect(response.status).to eq 204
      end
    end
  end
end
