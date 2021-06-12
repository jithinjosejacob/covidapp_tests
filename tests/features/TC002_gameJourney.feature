Feature: Game Journey Feature

  Scenario: Game Journey
  As a user
  I can navigate to the covid app game features
  So that I can verify that game features are loaded

    Given I have navigated to covid app page as "Sekhar"

    When I click on button "Are you game?"
    Then I should see the modal header "You are in a battlefield..."

    When I click on button "Start"
    Then I should see the modal header "Oh no!"

