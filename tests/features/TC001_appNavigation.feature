Feature: App Navigation Feature

  Scenario: App Navigation
  As a user
  I can navigate to the covid app
  So that I can verify that landing page is loaded correctly
  
    Given I am on the "app" page
    
    When I enter "Test" into warrior name
    And I click on button "Start your journey Test"
    Then I should see the welcome text "Choose your battle field Test"