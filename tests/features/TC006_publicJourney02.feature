Feature: App Feature

  Scenario: As a user
  I can log into the app
  So that I can verify that public features are loaded

    Given I am on the "app" page
    And I enter "Test" into warrior name
    And I click on button "Start your journey Test"
    Then I should see the welcome text "Choose your battle field Test"

    When I click on button "Go to a public place"
    Then I should see the modal header "You are seated at a restaurant.."

    # Closing modal dialog failed in the tests
    When I close the modal dialog
    Then I should see the paragraph header "At the Restaurant"
    And I click on button "move away immediately call the police!"
    And I should see the modal header "That doesn"

    When I close the modal dialog
    Then I should see the paragraph header "At the Restaurant"
    # Single quotes issue
    And I click on button "Use your super hero sanitizer"
     # Single quotes issue
    And I should see the modal header "That is correct!"
