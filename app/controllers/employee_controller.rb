# frozen_string_literal: true

class EmployeeController < ApplicationController
  def update
    employee = Employee.find_by(user_id: params[:user_id])
    employee.update(employee_params)
  end

  def employee_params
    params.permit(:user_id, :location, :start_date, :current_position, :starting_position, :graduation_date)
  end
end
    