# frozen_string_literal: true

Rails.application.routes.draw do
  devise_for :users
  root 'pto_calculator#index'
  post 'employee/profile/update', to: 'employee#profile_update'
  post 'employee/history/update', to: 'employment_history#history_update'
end
