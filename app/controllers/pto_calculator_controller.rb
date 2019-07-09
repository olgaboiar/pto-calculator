# frozen_string_literal: true

class PtoCalculatorController < ApplicationController
  before_action :get_calculator
  before_action :authenticate_user!, only: [:calculate]

  def index
    if user_signed_in?
      @user = current_user
      @employee = Employee.find_by(user_id: @user.id)
      @pto = @calculator.calculate(@employee.start_date, @employee.graduation_date, @employee.current_position, @employee.starting_position)
    else
      @user = nil
    end
  end

  private
  def get_calculator
    date_helper = DateHelper.new()
    @calculator = Calculator.new(date_helper)
  end
end
