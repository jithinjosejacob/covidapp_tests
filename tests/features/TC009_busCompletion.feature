Feature: App Feature

  Scenario: As a user
  I can log into the app
  So that I can verify that bus features are loaded

    Given I am on the "app" page
    And I enter "Test" into warrior name
    And I click on button "Start your journey Test"
    Then I should see the welcome text "Choose your battle field Test"

    When I click on button "Take the bus"
    Then I should see the modal header "You have taken the public bus.."

    When I click on button "Start"
    And I click on button "Use your superheroes Mask and sanitizer while traveling on public transport and clean your hands regularly."
    And I click on button "Check your final score"
    Then I should see the paragraph header "COVID-19 THE GAME - LEADERBOARD"
    