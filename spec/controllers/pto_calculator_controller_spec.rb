# frozen_string_literal: true

require 'spec_helper'

RSpec.describe PtoCalculatorController do
  context 'signed in user' do
    before do
      @user = User.create(
        email: 'test@8thlight.com',
        password: 'password123',
        password_confirmation: 'password123'
      )
      sign_in(@user)
      get :index
    end

    describe 'GET index' do
      it 'assigns @user, @employee, @employment, @pto' do
        expect(assigns(:user)).to eq(@user)
        expect(assigns(:employee).user_id).to eq(@user.id)
        expect(assigns(:employment).length).to eq(1)
        expect(assigns(:pto)).to eq(0)
      end

      it 'renders the index template' do
        expect(response).to render_template('index')
      end
    end
  end

  context 'not signed in user' do
    before do
      get :index
    end

    describe 'GET index' do
      it 'does not assign @user, @employee, @employment, @pto' do
        expect(assigns(:user)).to eq(nil)
        expect(assigns(:employee)).to eq(nil)
        expect(assigns(:employment)).to eq(nil)
        expect(assigns(:pto)).to eq(nil)
      end

      it 'renders the index template' do
        expect(response).to render_template('index')
      end
    end
  end
end
