# frozen_string_literal: true

class PtoCalculatorController < ApplicationController
  before_action :create_calculator

  def index
    if user_signed_in?
      @user = current_user
      @employee = Employee.find_by(user_id: @user.id)
      @employment = @employee.employment_history
      @pto = @calculator.calculate(@employment)

    else
      @user = nil
    end
  end

  private

  def create_calculator
    date_today = Date.today
    @calculator = Calculator.new(date_today)
  end
end
