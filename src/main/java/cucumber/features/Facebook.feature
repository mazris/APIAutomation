Feature: Facebook Login Validation

  Scenario Outline: Login Button Validation
    Given I browse to facebook
    Then I write <userName> and <Password>
    And I click login
    And I close the browser

    Examples:
      | userName | Password |
      | user001  | abcd1234 |
      | user002  | abcd1234 |

  Scenario: UI Validation
    Given I browse to facebook
    When I validate all header buttons
    Then I close the browser

