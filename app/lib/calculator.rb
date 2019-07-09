# frozen_string_literal: true

class Calculator
  def initialize(date_helper)
    @date_helper = date_helper
  end

  def calculate(start_date, end_date, position, start_position)
    if graduated?(position, start_position) && !@date_helper.same_month?(start_date, end_date)
      return calculate_dif_rates(start_date, end_date, position, start_position)

    end
    calculate_single_rate(start_date, position)
  end

  private

  def graduated?(position, start_position)
    start_position != position
  end

  def calculate_single_rate(date, position)
    return nil if date .nil?

    months = @date_helper.get_working_month_amount(date)
    (months * StaticData::RATES[position.to_sym]).round
  end

  def calculate_dif_rates(start_date, end_date, position, start_position)
    first_month = @date_helper.get_working_month_amount(start_date, end_date)
    pto1 = (first_month * StaticData::RATES[start_position.to_sym]).round
    second_month = @date_helper.get_working_month_amount(end_date)
    pto2 = (second_month * StaticData::RATES[position.to_sym]).round
    pto1 + pto2
  end
end
