# frozen_string_literal: true

class Calculator
  def initialize(date_today)
    @date_today = date_today
  end

  def calculate(employment_history)
    accrued_pto = 0
    employment_history.each do |record|
      start_date = record.start_date
      end_date = (record.end_date.nil? ? @date_today : record.end_date)
      accrued_pto += calculate_pto(start_date, end_date, record.position)
    end
    accrued_pto
  end

  private

  def calculate_pto(start_date, end_date, position)
    months = count_working_month_amount(start_date, end_date)
    (months * StaticData::RATES[position.to_sym]).round
  end

  def count_working_month_amount(start_date, end_date)
    end_date.month - start_date.month
  end
end
