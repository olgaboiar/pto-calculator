# frozen_string_literal: true

require 'spec_helper'
require_relative '../app/lib/calculator'
require_relative '../app/lib/static_data'

describe Calculator do
  before do
    @date_helper = DateHelper.new()
    @calculator = Calculator.new(@date_helper)
    allow(@date_helper).to receive(:get_current_date).and_return Date.new(2019,7,1)
  end

  describe '#calculate' do
    it 'should return 2 if an employee started on June 1st' do
      start_date = Date.new(2019,6,1)
      actual = @calculator.calculate(start_date, StaticData::APPRENTICE_RATE)
      expect(actual).to eq(4)
    end

    it 'should return 80 if a crafter started on Jan 1st' do
      start_date = Date.new(2019,1,1)
      actual = @calculator.calculate(start_date, StaticData::CRAFTER_RATE)
      expect(actual).to eq(80)
    end
  end
end
