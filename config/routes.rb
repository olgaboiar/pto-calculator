# frozen_string_literal: true

Rails.application.routes.draw do
  resources :users
  root 'pto_calculator#index'
  post 'calculate', to: 'pto_calculator#calculate'
end
