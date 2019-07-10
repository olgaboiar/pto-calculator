# frozen_string_literal: true

class EmploymentHistoryController < ApplicationController
  def history_update
    initial_records = params[:initial_ids]
    params[:entries].each do |param|
      if param[:id]
        initial_records.delete(param[:id])
        update_employment_record(params[:employee_id], param)
      else
        EmploymentHistory.create(employee_id: params[:employee_id], position: param[:position], start_date: param[:start_date], end_date: param[:end_date])
      end
    end
    delete_employment_records(initial_records)
  end

  private

  def delete_employment_records(ids)
    records_to_delete = EmploymentHistory.where(id: ids)
    records_to_delete.delete_all
  end

  def update_employment_record(employee_id, params)
    record  = EmploymentHistory.find(params[:id])
    record.update(employee_id: employee_id, position: params[:position], start_date: params[:start_date], end_date: params[:end_date])
  end
end
