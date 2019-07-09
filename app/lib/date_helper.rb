# frozen_string_literal: true

require 'date'

class DateHelper
  def initialize
    @current_date = current_date
  end

  def current_date
    Date.today
  end

  def get_working_month_amount(starting_date, graduation_date = @current_date)
    graduation_date.month - starting_date.month
  end

  def same_month?(starting_date, graduation_date)
    graduation_date.month == starting_date.month
  end
end
