# frozen_string_literal: true

class Calculator
  def initialize(date_helper)
    @date_helper = date_helper
  end

  def calculate(starting_date, rate)
    months = @date_helper.get_working_month_amount(starting_date)
    (months * rate).round 
  end
end
