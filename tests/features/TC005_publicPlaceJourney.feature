Feature: Public Place Journey Feature

  Scenario: Public Place Journey
  As a user
  I can navigate to the covid app bus features
  So that I can verify that public place features are loaded

    Given I have navigated to covid app page as "Michael"

    When I click on button "Go to a public place"
    Then I should see the modal header "You are seated at a restaurant.."

    When I click on button "Start"
    Then I should see the modal header "Time's Up!"

    When I click on button "Return Home"
    Then I should see the welcome text "Choose your battle field Test"


