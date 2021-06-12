Feature: Completion Message Feature

  Scenario: Completion Message
  As a user
  I can log into the covid app
  So that I can verify that completion message is displayed

    Given I am on the "leaderboard" page
    Then I should see the paragraph header "COVID-19 THE GAME - LEADERBOARD"
    And I should see the table header "user_id"
    And I should see the table header "username"
    And I should see the table header "score"
    