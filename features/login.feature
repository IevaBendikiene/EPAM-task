Feature: Login functionality on SauceDemo

  Scenario: Test Login form with empty credentials
    Given I am on the SauceDemo login page
    When I enter credentials and clear them
    And I click the login button
    Then I should see the error message "Username is required"

  Scenario: Test Login form with username only
    Given I am on the SauceDemo login page
    When I enter a username and clear the password
    And I click the login button
    Then I should see the error message "Password is required"

  Scenario: Test Login form with valid credentials
    Given I am on the SauceDemo login page
    When I enter valid credentials
    And I click the login button
    Then I should be logged in and see the title "Swag Labs"