# frozen_string_literal: true

require 'date'
require 'spec_helper'
require_relative '../app/lib/calculator'
require_relative '../app/lib/static_data'

describe Calculator do
  before do
    @date_helper = DateHelper.new
    @calculator = Calculator.new(@date_helper)
    allow(@date_helper).to receive(:current_date).and_return Date.new(2019, 7, 1)
  end

  def self.test_calculate(pto, start_date, graduation_date, current_position, starting_position)
    it "return correct #{pto} for a #{current_position} who started on #{start_date} as #{starting_position} and graduated on #{graduation_date})" do
      expect(@calculator.calculate(start_date, graduation_date, current_position, starting_position)).to eq(pto)
    end
  end

  describe '#calculate for an apprentice who has not graduated yet' do
    test_calculate 4, Date.new(2019, 6, 30), nil, 'apprentice', 'apprentice'
    test_calculate 24, Date.new(2019, 1, 30), nil, 'apprentice', 'apprentice'
    test_calculate 24, Date.new(2019, 1, 1), nil, 'apprentice', 'apprentice'
    test_calculate 0, Date.new(2019, 7, 1), nil, 'apprentice', 'apprentice'
  end

  describe '#calculate for a crafter who as a crafter' do
    test_calculate 13, Date.new(2019, 6, 30), nil, 'crafter', 'crafter'
    test_calculate 80, Date.new(2019, 1, 30), nil, 'crafter', 'crafter'
    test_calculate 0, Date.new(2019, 7, 1), nil, 'crafter', 'crafter'
  end

  describe '#calculate for a crafter who started as apprentice' do
    test_calculate 80, Date.new(2019, 1, 1), Date.new(2019, 1, 20), 'crafter', 'apprentice'
    test_calculate 71, Date.new(2019, 1, 1), Date.new(2019, 2, 1), 'crafter', 'apprentice'
    test_calculate 71, Date.new(2019, 1, 1), Date.new(2019, 2, 15), 'crafter', 'apprentice'
    test_calculate 71, Date.new(2019, 1, 31), Date.new(2019, 2, 15), 'crafter', 'apprentice'
    test_calculate 61, Date.new(2019, 1, 1), Date.new(2019, 3, 30), 'crafter', 'apprentice'
    test_calculate 4, Date.new(2019, 6, 30), Date.new(2019, 7, 1), 'crafter', 'apprentice'
    test_calculate 0, Date.new(2019, 7, 1), Date.new(2019, 7, 2), 'crafter', 'apprentice'
  end
end
