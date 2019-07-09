# frozen_string_literal: true

class CreateEmployees < ActiveRecord::Migration[5.2]
  def change
    create_table :employees do |t|
      t.integer :user_id
      t.string :location
      t.date :start_date
      t.string :current_position
      t.string :starting_position
      t.date :graduation_date

      t.timestamps
    end
  end
end
