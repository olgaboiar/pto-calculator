# frozen_string_literal: true

class Calculator
  def initialize(date_helper)
    @date_helper = date_helper
  end

  def calculate(start_date, graduation_date, current_position, starting_position)
    if graduated?(current_position, starting_position) and !@date_helper.same_month?(start_date, graduation_date)
      return calculate_dif_rates(start_date, graduation_date, current_position, starting_position)
    end
      calculate_single_rate(start_date, current_position)
  end

  private
  def graduated?(current_position, starting_position)
    starting_position != current_position
  end

  def calculate_single_rate(date, position)
    return nil if date == nil
    months = @date_helper.get_working_month_amount(date)
    (months * StaticData::RATES[position.to_sym]).round 
  end

  def calculate_dif_rates(start_date, graduation_date, current_position, starting_position)
    first_month = @date_helper.get_working_month_amount(start_date, graduation_date)
    pto1 = (first_month * StaticData::RATES[starting_position.to_sym]).round 
    second_month = @date_helper.get_working_month_amount(graduation_date)
    pto2 = (second_month * StaticData::RATES[current_position.to_sym]).round 
    pto1 + pto2
  end
end
