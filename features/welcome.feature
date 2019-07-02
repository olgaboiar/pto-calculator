Feature: Welcoming description
  As a user
  I want to be greeted when I visit the app
  And see some brief description of what the app does
  So that I have a better experience

  @javascript
  Scenario: User sees the welcome message and info
    When I go to the homepage
    Then I should see the welcome message
    And I should see app description