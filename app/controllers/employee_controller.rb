# frozen_string_literal: true

class EmployeeController < ApplicationController
  def profile_update
    employee = Employee.find_by(user_id: params[:user_id])
    employee.update(employee_params)
  end

  def employee_params
    params.permit(:user_id, :location)
  end
end
