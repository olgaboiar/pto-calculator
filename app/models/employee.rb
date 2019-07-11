# frozen_string_literal: true

class Employee < ApplicationRecord
  validates :user_id, presence: true
  belongs_to :user, class_name: 'User'
  has_many :employment_history, class_name: 'EmploymentHistory'

  after_create :create_employment_history

  def create_employment_history
    EmploymentHistory.create(employee_id: id)
  end
end
