# frozen_string_literal: true

class EmploymentHistoryController < ApplicationController
  before_action :create_employment_history_manager

  def history_update
    @manager.bulk_update_employment_history(params)
  end

  private

  def create_employment_history_manager
    @manager = EmploymentHistoryManager.new
  end
end
