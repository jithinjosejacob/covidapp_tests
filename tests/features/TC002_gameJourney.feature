Feature: App Feature

  Scenario: As a user
  I can log into the app
  So that I can verify that game features are loaded

    Given I am on the "app" page
    And I enter "Test" into warrior name
    And I click on button "Start your journey Test"
    Then I should see the welcome text "Choose your battle field Test"

    When I click on button "Are you game?"
    Then I should see the modal header "You are in a battlefield..."

    When I click on button "Start"
    Then I should see the modal header "Oh no!"

