Feature: Basic PTO Calculation
  As a user
  I want to be able to know how many PTO days I have
  So that I can plan my vacation

  @skip_scenario
  @javascript
  Scenario: Crafter checks PTO balance
    Given I am on the homepage
    And I set my role to crafter
    And I set my start day to Jan 1st this year
    When I click the Calculate button
    Then I should see how many PTO hours I have