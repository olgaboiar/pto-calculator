When(/^I go to the homepage$/) do
  visit root_path
end
  
Then(/^I should see the welcome message$/) do
  expect(page).to have_content("Welcome to PTO Calculator")
end

Then(/^I should see app description$/) do
  expect(page).to have_content("The only tool that brings your vacation closer!")
end