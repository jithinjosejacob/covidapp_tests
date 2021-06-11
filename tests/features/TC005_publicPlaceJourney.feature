Feature: App Feature

  Scenario: As a user
  I can log into the app
  So that I can verify that public place features are loaded

    Given I am on the "app" page
    And I enter "Test" into warrior name
    And I click on button "Start your journey Test"
    Then I should see the welcome text "Choose your battle field Test"

    When I click on button "Go to a public place"
    Then I should see the modal header "You are seated at a restaurant.."

    When I click on button "Start"
    # Time's Up whole text passing will result in invalid locator,just use substring Time.
    Then I should see the modal header "Time"

    When I click on button "Return Home"
    Then I should see the welcome text "Choose your battle field Test"


