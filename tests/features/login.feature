Feature: App Feature

  Scenario: As a user
  I can log into the app
  So that I can verify that all features are loaded

    Given I am on the app page
    And I enter a user into warrior name
    And I click on button "Start your journey"
    Then I should see the welcome text "Choose your battle field"
