# frozen_string_literal: true

class EmploymentHistory < ApplicationRecord
  validates :employee_id, presence: true
  belongs_to :employee
end
