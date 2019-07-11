class CreateEmploymentHistories < ActiveRecord::Migration[5.2]
  def change
    create_table :employment_histories do |t|
      t.integer :employee_id
      t.string :position
      t.date :start_date
      t.date :end_date

      t.timestamps
    end
  end
end
