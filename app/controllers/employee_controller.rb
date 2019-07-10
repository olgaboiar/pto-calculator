# frozen_string_literal: true

class EmployeeController < ApplicationController
  def profile_update
    employee = Employee.find_by(user_id: params[:user_id])
    employee.update(employee_params)
  end

  def history_update
    initial = params[:initial_ids]
    params[:entries].each do |param|
        if param[:id]
            initial.delete(param[:id])
            history_entry  = EmploymentHistory.find(param[:id])
            history_entry.update(employee_id: params[:employee_id], position: param[:position], start_date: param[:start_date], end_date: param[:end_date])
        else
            EmploymentHistory.create(employee_id: params[:employee_id], position: param[:position], start_date: param[:start_date], end_date: param[:end_date])
        end
    end
    users_to_delete = EmploymentHistory.where(id: initial)
    users_to_delete.delete_all
  end

  def employee_params
    params.permit(:user_id, :location)
  end
end
