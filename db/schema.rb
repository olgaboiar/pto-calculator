# frozen_string_literal: true

ActiveRecord::Schema.define(version: 2019_07_06_154431) do

  # These are extensions that must be enabled in order to support this database
  enable_extension 'plpgsql'

  create_table 'employees', force: :cascade do |t|
    t.integer 'user_id'
    t.string 'location'
    t.date 'start_date'
    t.string 'current_position'
    t.string 'starting_position'
    t.date 'graduation_date'
    t.datetime 'created_at', null: false
    t.datetime 'updated_at', null: false
  end

  create_table 'users', force: :cascade do |t|
    t.string 'email', default: '', null: false
    t.string 'encrypted_password', default: '', null: false
    t.string 'reset_password_token'
    t.datetime 'reset_password_sent_at'
    t.datetime 'remember_created_at'
    t.datetime 'created_at', null: false
    t.datetime 'updated_at', null: false
    t.index ['email'], name: 'index_users_on_email', unique: true
    t.index ['reset_password_token'], name: 'index_users_on_reset_password_token', unique: true
  end
end
