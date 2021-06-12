Feature: Public Journey Options Feature

  Scenario: Public Journey Options
  As a user
  I can log into the app
  So that I can verify that public features are loaded

    Given I have navigated to covid app page as "Roger"

    When I click on button "Go to a public place"
    Then I should see the modal header "You are seated at a restaurant.."

    When I close the modal dialog
    Then I should see the paragraph header "At the Restaurant"
    
    When I click on button "<button_text>"
    Then I should see the modal header "<header_text>"

   Examples:
      | button_text                            | header_text               |
      | Use your super hero sanitizer          | That is correct!          |
      | move away immediately call the police! | That doesn't sound right! |
