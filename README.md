# 8th Light PTO Calculator

8th Light internal tool for easy PTO hours calculation.

[![CircleCI](https://circleci.com/gh/olgaboiar/pto-calculator/tree/master.svg?style=svg)](https://circleci.com/gh/olgaboiar/pto-calculator/tree/master)

## Prerequisites

- Ruby 2.5.3
- Rails 5.2.3
- Postgresql 9.2 or later (https://postgresapp.com/ for Mac users)
- Node
- Yarn

You may need to use an Ruby version manager like rvm to get the right version.

## Setup

- `gem install bundler`
- `gem install rails`
- `bundle install`
- `bundle exec rake db:create`
- `bundle exec rake db:schema:load`
- `yarn install`

## Running

- `rails s`

Visit: http://localhost:3000/

## Login

Since this app is designed as 8th Light internal tool, you can sign up only with company domain email

## Tests

- Backend: `rspec`
- Frontend: `yarn test`
- Regenerate Jest Snapshots: `yarn test:gensnapshots`

To set up testing DB:

- `bundle exec rake db:migrate RAILS_ENV=test`
