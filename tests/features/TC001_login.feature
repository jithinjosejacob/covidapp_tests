Feature: App Feature

  Scenario: As a user
  I can log into the app
  So that I can verify that all features are loaded

    Given I am on the "app" page
    And I enter "Test" into warrior name
    And I click on button "Start your journey Test"
    Then I should see the welcome text "Choose your battle field Test"
