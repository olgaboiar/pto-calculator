json.extract! user, :id, :name, :current_position, :start_date, :location, :created_at, :updated_at
json.url user_url(user, format: :json)
