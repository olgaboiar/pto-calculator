# frozen_string_literal: true

require 'rails_helper'
require 'spec_helper'
require_relative '../app/lib/employment_history_manager'
require_relative '../app/lib/accrual_rate'

describe EmploymentHistoryManager do
  before do
    @manager = EmploymentHistoryManager.new

    @user = User.create(
      id: 123321,
      email: 'test1@8thlight.com',
      password: 'password123',
      password_confirmation: 'password123'
    )
  end

  describe '#delete_employment_records(ids)' do
    it 'should delete records with provided ids' do
      employee = Employee.find_by(user_id: @user.id)
      record = EmploymentHistory.create(employee_id: employee.id)

      expect(record).to be_present
      @manager.delete_employment_records([record.id])

      expect { EmploymentHistory.find(record.id) }.to raise_error(ActiveRecord::RecordNotFound)
    end
  end

  describe '#update_employment_record(employee_id, params)' do
    it 'should update records with provided params' do
      employee = Employee.find_by(user_id: @user.id)
      record = EmploymentHistory.create(employee_id: employee.id, position: 'crafter')

      expect(record).to be_present

      @manager.update_employment_record(employee.id, {id: record.id, position: 'apprentice'})
      updated_record = EmploymentHistory.find(record.id)

      expect(updated_record.position).to eq('apprentice')
    end
  end

  describe '#create_employment_record' do
    it 'should create records with provided params' do
      employee = Employee.find_by(user_id: @user.id)
      @manager.create_employment_record(employee.id, {position: 'apprentice'})
      last_record = EmploymentHistory.last

      expect(last_record.employee_id).to eq(employee.id)
      expect(last_record.position).to eq('apprentice')
    end
  end
end
