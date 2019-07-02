# frozen_string_literal: true

require 'spec_helper'
require_relative '../app/lib/date_helper'

describe DateHelper do
  before do
    @date_helper = DateHelper.new()
  end

  describe '#get_current_date' do
    it 'should return current date' do
      actual = @date_helper.get_current_date()
      expect(actual).to eq(Date.today)
    end
  end

  describe '#get_working_month_amount' do
    it 'should return 1 for starting date Jun 1st' do
      allow(@date_helper).to receive(:get_current_date).and_return Date.new(2019,7,1)
      starting_date = Date.new(2019,6,1)
      actual = @date_helper.get_working_month_amount(starting_date)
      expect(actual).to eq(1)
    end

    it 'should return 6 for starting date Jan 1st' do
      allow(@date_helper).to receive(:get_current_date).and_return Date.new(2019,7,1)
      starting_date = Date.new(2019,1,1)
      actual = @date_helper.get_working_month_amount(starting_date)
      expect(actual).to eq(6)
    end
  end
end
