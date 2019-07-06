Given(/^I am on the homepage$/) do
  visit root_path
  save_and_open_page
end

Given(/^I set my role to crafter$/) do
  visit root_path
end

Given(/^I set my start day to Jan 1st this year$/) do
  visit root_path
end
  
When(/^I click the Calculate button$/) do
  visit root_path
end
  
Then(/^I should see how many PTO hours I have$/) do
  visit root_path
end
