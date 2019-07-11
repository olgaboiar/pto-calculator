# frozen_string_literal: true

require 'date'
require 'rails_helper'
require 'spec_helper'
require_relative '../app/lib/calculator'
require_relative '../app/lib/accrual_rate'

describe Calculator do
  before do
    date_today = Date.new(2019, 7, 1)
    @calculator = Calculator.new(date_today)
  end

  def self.test_calculate(pto, employment_history)
    it "return correct #{pto} for an employee with a certain #{employment_history})" do
      expect(@calculator.calculate(employment_history)).to eq(pto)
    end
  end

  describe '#calculate for an apprentice who has not graduated yet' do
    test_calculate 4, [EmploymentHistory.new(employee_id: 1, position: 'apprentice', start_date: Date.new(2019, 6, 30))]
    test_calculate 24, [EmploymentHistory.new(employee_id: 1, position: 'apprentice', start_date: Date.new(2019, 1, 30))]
    test_calculate 24, [EmploymentHistory.new(employee_id: 1, position: 'apprentice', start_date: Date.new(2019, 1, 1))]
    test_calculate 0, [EmploymentHistory.new(employee_id: 1, position: 'apprentice', start_date: Date.new(2019, 7, 1))]
    test_calculate 0, [EmploymentHistory.new(employee_id: 1, position: 'apprentice', start_date: Date.new(2019, 7, 30))]
  end

  describe '#calculate for a crafter who as a crafter' do
    test_calculate 13, [EmploymentHistory.new(employee_id: 1, position: 'crafter', start_date: Date.new(2019, 6, 30))]
    test_calculate 80, [EmploymentHistory.new(employee_id: 1, position: 'crafter', start_date: Date.new(2019, 1, 30))]
    test_calculate 80, [EmploymentHistory.new(employee_id: 1, position: 'crafter', start_date: Date.new(2019, 1, 1))]
    test_calculate 0, [EmploymentHistory.new(employee_id: 1, position: 'crafter', start_date: Date.new(2019, 7, 15))]
  end

  describe '#calculate for a crafter who started as apprentice' do
    test_calculate 80, [EmploymentHistory.new(employee_id: 1, position: 'apprentice', start_date: Date.new(2019, 1, 1), end_date: Date.new(2019, 1, 20)), EmploymentHistory.new(employee_id: 1, position: 'crafter', start_date: Date.new(2019, 1, 20))]
    test_calculate 71, [EmploymentHistory.new(employee_id: 1, position: 'apprentice', start_date: Date.new(2019, 1, 1), end_date: Date.new(2019, 2, 1)), EmploymentHistory.new(employee_id: 1, position: 'crafter', start_date: Date.new(2019, 2, 1))]
    test_calculate 71, [EmploymentHistory.new(employee_id: 1, position: 'apprentice', start_date: Date.new(2019, 1, 1), end_date: Date.new(2019, 2, 15)), EmploymentHistory.new(employee_id: 1, position: 'crafter', start_date: Date.new(2019, 2, 15))]
    test_calculate 71, [EmploymentHistory.new(employee_id: 1, position: 'apprentice', start_date: Date.new(2019, 1, 31), end_date: Date.new(2019, 2, 15)), EmploymentHistory.new(employee_id: 1, position: 'crafter', start_date: Date.new(2019, 2, 15))]
    test_calculate 61, [EmploymentHistory.new(employee_id: 1, position: 'apprentice', start_date: Date.new(2019, 1, 1), end_date: Date.new(2019, 3, 30)), EmploymentHistory.new(employee_id: 1, position: 'crafter', start_date: Date.new(2019, 3, 30))]
    test_calculate 4, [EmploymentHistory.new(employee_id: 1, position: 'apprentice', start_date: Date.new(2019, 6, 30), end_date: Date.new(2019, 7, 1)), EmploymentHistory.new(employee_id: 1, position: 'crafter', start_date: Date.new(2019, 7, 1))]
    test_calculate 0, [EmploymentHistory.new(employee_id: 1, position: 'apprentice', start_date: Date.new(2019, 7, 1), end_date: Date.new(2019, 7, 2)), EmploymentHistory.new(employee_id: 1, position: 'crafter', start_date: Date.new(2019, 7, 2))]
  end

  describe '#calculate for an employee who started more than a year ago' do
    test_calculate 72, [EmploymentHistory.new(employee_id: 1, position: 'apprentice', start_date: Date.new(2018, 1, 1))]
    test_calculate 239, [EmploymentHistory.new(employee_id: 1, position: 'crafter', start_date: Date.new(2018, 1, 1))]
    test_calculate 119, [EmploymentHistory.new(employee_id: 1, position: 'apprentice', start_date: Date.new(2018, 1, 1), end_date: Date.new(2019, 2, 15)), EmploymentHistory.new(employee_id: 1, position: 'crafter', start_date: Date.new(2019, 2, 15))]
    test_calculate 230, [EmploymentHistory.new(employee_id: 1, position: 'apprentice', start_date: Date.new(2018, 1, 31), end_date: Date.new(2018, 2, 15)), EmploymentHistory.new(employee_id: 1, position: 'crafter', start_date: Date.new(2018, 2, 15))]
  end
end
