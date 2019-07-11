# frozen_string_literal: true

require_relative '../rails_helper'

RSpec.describe Employee, type: :model do
  before do
    @user = User.create(
      email: 'test@8thlight.com',
      password: 'password123',
      password_confirmation: 'password123'
    )
  end

  it 'is valid with valid attributes' do
    expect(Employee.new(user_id: @user.id)).to be_valid
  end

  it 'is not valid without an user_id' do
    employee = Employee.new(user_id: nil)
    expect(employee).to_not be_valid
  end

  it 'is not valid without an user_id' do
    assc = described_class.reflect_on_association(:user)
    expect(assc.macro).to eq :belongs_to
  end
end
