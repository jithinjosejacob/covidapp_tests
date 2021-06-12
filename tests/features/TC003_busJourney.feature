Feature: Bus Journey Feature

  Scenario: Bus Journey
  As a user
  I can navigate to the covid app bus features
  So that I can verify that bus features are loaded

    Given I have navigated to covid app page as "Raja"

    When I click on button "Take the bus"
    Then I should see the modal header "You have taken the public bus.."

    When I click on button "Start"
    Then I should see the modal header "Time's Up!"

    When I click on button "Return Home"
    Then I should see the welcome text "Choose your battle field Test"


