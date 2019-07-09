# frozen_string_literal: true

class Employee < ApplicationRecord
  validates :user_id, presence: true
  belongs_to :user
end
