Feature: App Feature

  Scenario: As a user
  I can log into the app
  So that I can verify that office features are loaded

    Given I am on the "app" page
    And I enter "Test" into warrior name
    And I click on button "Start your journey Test"
    Then I should see the welcome text "Choose your battle field Test"

    When I click on button "Go to the office"
    Then I should see the modal header "You have entered the office.."

    When I close the modal dialog
    Then I should see the paragraph header "At the Office"
    And I click on button "Use your superhero Social Distance and notify your Manager."
    And I should see the modal header "That is correct!"

    # When I close the modal dialog
    # Then I should see the paragraph header "At the Office"
    # And I click on button "Keep it to yourself, do not draw attention, and pretend you did not notice!"
    # And I should see the modal header "That doesn"


