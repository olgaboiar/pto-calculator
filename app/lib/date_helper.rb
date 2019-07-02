# frozen_string_literal: true
require 'date'

class DateHelper
    def initialize()
  
    end
  
  #   attr_reader :board, :last_move, :markers
  
    def get_current_date
      Date.today()
    end

    def get_working_month_amount(starting_date)
      current_date = get_current_date()
      current_date.month - starting_date.month
    end
  end
  