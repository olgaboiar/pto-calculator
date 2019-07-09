# frozen_string_literal: true

require 'spec_helper'
require_relative '../app/lib/date_helper'

describe DateHelper do
  before do
    @date_helper = DateHelper.new
  end

  describe '#current_date' do
    it 'should return current date' do
      actual = @date_helper.current_date
      expect(actual).to eq(Date.today)
    end
  end

  describe '#get_working_month_amount' do
    it 'should return 1 for starting date Jun 1st' do
      allow(@date_helper).to receive(:current_date).and_return Date.new(2019, 7, 1)
      starting_date = Date.new(2019, 6, 1)
      actual = @date_helper.get_working_month_amount(starting_date)
      expect(actual).to eq(1)
    end

    it 'should return 6 for starting date Jan 1st' do
      allow(@date_helper).to receive(:current_date).and_return Date.new(2019, 7, 1)
      starting_date = Date.new(2019, 1, 1)
      actual = @date_helper.get_working_month_amount(starting_date)
      expect(actual).to eq(6)
    end

    it 'should return 1 for starting date Apr 1st and Graduation day May 1st' do
      starting_date = Date.new(2019, 4, 1)
      graduation_date = Date.new(2019, 5, 1)
      actual = @date_helper.get_working_month_amount(starting_date, graduation_date)
      expect(actual).to eq(1)
    end

    it 'should return 4 for starting date Jan 21st and Graduation day May 1st' do
      starting_date = Date.new(2019, 1, 21)
      graduation_date = Date.new(2019, 5, 1)
      actual = @date_helper.get_working_month_amount(starting_date, graduation_date)
      expect(actual).to eq(4)
    end
  end

  describe '#gsame_month?' do
    it 'should return true if staring date month and graduation date month are same' do
      starting_date = Date.new(2019, 6, 1)
      graduation_date = Date.new(2019, 6, 15)
      actual = @date_helper.same_month?(starting_date, graduation_date)
      expect(actual).to be true
    end

    it 'should return false if staring date month and graduation date month are not same' do
      starting_date = Date.new(2019, 1, 1)
      graduation_date = Date.new(2019, 6, 1)
      actual = @date_helper.same_month?(starting_date, graduation_date)
      expect(actual).to be false
    end
  end
end
