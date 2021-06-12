Feature: Bus Journey Feature

  Scenario: Bus Journey Options
  As a user
  I can navigate to the covid app bus features
  So that I can verify that bus journey features are loaded

    Given I have navigated to covid app page as "Rose"

    When I click on button "Take the bus"
    Then I should see the modal header "You have taken the public bus.."

    When I close the modal dialog
    Then I should see the paragraph header "Inside the Bus"

    When I click on button '<button_text>'
    Then I should see the modal header "That is correct!"
  
  Examples:
    | button_text                                                                      |
    | Use your superheroes                                                             |
    # Commenting this option as text keeps changing
    #| Please consider travelling during peak times, when more help is available to you |

