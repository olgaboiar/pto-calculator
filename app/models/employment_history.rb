# frozen_string_literal: true

class EmploymentHistory < ApplicationRecord
  validates :user_id, presence: true
  belongs_to :user
end
