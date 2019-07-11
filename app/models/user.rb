# frozen_string_literal: true

class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable

  after_create :create_employee_profile

  validates :email, presence: true, email: true

  private

  def create_employee_profile
    Employee.create(user_id: id)
  end
end
