# frozen_string_literal: true

require 'date'

class DateHelper
  def get_current_date
    Date.today()
  end

  def get_working_month_amount(starting_date)
    current_date = get_current_date()
    d = Date.parse(starting_date)
    current_date.month - d.month
  end
end
  