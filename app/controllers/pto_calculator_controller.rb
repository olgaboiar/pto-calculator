# frozen_string_literal: true

class PtoCalculatorController < ApplicationController
  before_action :get_calculator, :authenticate_user!

  def index
  end

  def calculate
    hash = { crafter: 13.3, apprentice: 4 }
    start_date = params[:start_date]
    position = params[:position]
    rate = position[:value]
    response = @calculator.calculate(start_date, hash[rate.to_sym])
    render json: { response: response }
  end

  private
  def get_calculator
    date_helper = DateHelper.new()
    @calculator = Calculator.new(date_helper)
  end
end
  