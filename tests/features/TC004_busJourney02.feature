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

    When I close the modal dialog
    Then I should see the paragraph header "Inside the Bus"
    # Single quotes issue
    And I click on button "Use your superheroes"
     # Single quotes issue
    And I should see the modal header "That is correct!"

    # When I close the modal dialog
    # Then I should see the paragraph header "Inside the Bus"
    # And I click on button "Move to another seat immediately and report it to the driver!"
    # Then I should see the modal header "That is correct!"

