# frozen_string_literal: true

class EmploymentHistoryManager
  def bulk_update_employment_history(params)
    initial_records = params[:initial_ids]
    params[:entries].each do |param|
      update_or_create_record(params[:employee_id], param, initial_records)
    end
    delete_employment_records(initial_records)
  end

  def update_or_create_record(employee_id, params, initial_records)
    if params[:id]
      initial_records.delete(params[:id])
      update_employment_record(employee_id, params)
    else
      create_employment_record(employee_id, params)
    end
  end

  def create_employment_record(employee_id, params)
    EmploymentHistory.create(
      employee_id: employee_id,
      position: params[:position],
      start_date: params[:start_date],
      end_date: params[:end_date]
    )
  end

  def delete_employment_records(ids)
    records_to_delete = EmploymentHistory.where(id: ids)
    records_to_delete.delete_all
  end

  def update_employment_record(employee_id, params)
    record = EmploymentHistory.find(params[:id])
    record.update(
      employee_id: employee_id,
      position: params[:position],
      start_date: params[:start_date],
      end_date: params[:end_date]
    )
  end
end
