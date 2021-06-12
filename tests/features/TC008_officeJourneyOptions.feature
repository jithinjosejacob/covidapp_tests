Feature: Office Journey Options Feature

  Scenario: Office Journey Options
  As a user
  I can log into the covid app
  So that I can verify that office journey option features are loaded

    Given I have navigated to covid app page as "Nisha"

    When I click on button "Go to the office"
    Then I should see the modal header "You have entered the office.."

    When I close the modal dialog
    Then I should see the paragraph header "At the Office"

    When I click on button "<button_text>"
    And I should see the modal header "That is correct!"

   Examples:
      | button_text                                                                 |
      | Use your superhero Social Distance and notify your Manager.                 |
      | Keep it to yourself, do not draw attention, and pretend you did not notice! |

