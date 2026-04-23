Feature: Login functionality

  Scenario: User logs in with valid credentials
    Given user is on login page
    When user enters username "admin@example.com" and password "admin123"
    Then user should be redirected to dashboard