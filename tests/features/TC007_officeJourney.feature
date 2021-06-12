Feature: Office Journey Feature

  Scenario: Office Journey Feature
  As a user
  I can log into the covid app
  So that I can verify that office journey features are loaded

    Given I have navigated to covid app page as "Michelle"

    When I click on button "Go to the office"
    Then I should see the modal header "You have entered the office.."

    When I click on button "Start"
    Then I should see the modal header "Time's Up!"

    When I click on button "Return Home"
    Then I should see the welcome text "Choose your battle field Test"


