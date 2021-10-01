Feature: Footer
  Test submit form "Thanks for subscribing"

  Background:
    Given Visit home page #Common
    And I scroll to footer​ section

  Scenario: TC_Footer_01: Visit homepage, input form: Submit form "Thanks for subscribing" thành công
    When I input First Name, Last Name, Phone​
    Given Fake admin ajax api
    When I click subscribe button​
    Then I can see subcribe button is disabled and loading icon
    Given Wait for Admin Ajax "1" times #Common
    Then I can see subcribe button is active and loading icon hidden
    And I must see popup form Thanks for subscribing
    When I input Email, Street Address, Zipcode, chọn Man or Woman​
    And I click Send Info Kit button​
    Then I can see send kit button is disabled and loading icon
    Given Wait for Admin Ajax "2" times #Common
    Then I can see send kit button is active and loading icon hidden
    And I must see thank you message

  Scenario: TC_Footer_02: Visit homepage, không input form: Submit form "Subscribe" không thành công
    When I click subscribe button​
    Then I can see red error in subcribe form

  Scenario: TC_Footer_03: Visit homepage, input form: Submit form "Thanks for subscribing" không thành công
    When I input First Name, Last Name, Phone​
    Given Fake admin ajax api
    When I click subscribe button​
    Then I can see subcribe button is disabled and loading icon
    Given Wait for Admin Ajax "1" times #Common
    Then I can see subcribe button is active and loading icon hidden
    And I must see popup form Thanks for subscribing
    When I click Send Info Kit button​
    Then I can see red error in popup form