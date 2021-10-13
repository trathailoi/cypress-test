Feature: Dynamic Form
  Test Submit form "Get a free information kit" 

  Background: 
    Given Clear window session #Common
    And Visit home page #Common

Scenario: TC_DynamicForm_01: Visit homepage, input Dynamic form: Submit form "Get a free information kit" thành công
    When I scroll to Dynamic Form​ section
    And I input info to dynamic form
    Given Fake admin ajax api #Common
    When I click Get My Free Info Kit button​
    Then I see loading icon and button is disabled
    Given Wait for Admin Ajax "1" times #Common
    Then I must redirect to Scheduler page with param Thank You
    # Then Section Dynamic form is hidden
    # And I must see section Schedule​
    # When Refresh window #Common
    # Then Section Dynamic form is hidden
    # And I must see section Schedule​

  Scenario Outline: TC_DynamicForm_02: Visit homepage, không input/invalid input Dynamic form: Submit form "Get a free information kit" không thành công
    Given I scroll to Dynamic Form​ section
    When I input info to dynamic form with name is "<firstName>" "<lastName>" "<email>" "<phone>" "<street>" "<zipcode>" "<gender>"
    And I click Get My Free Info Kit button​
    Then I can see red error in dynamic form
    Examples:
      | firstName | lastName | email                  | phone        | street             | zipcode | gender |
      | Julian    | Jones    |                        | 786-416-5794 | 1962 Rinehart Road |         | Man    |
      | Julian    | Jones    | mymail                 | 786-416-5794 | 1962 Rinehart Road | 0       | Man    |
      | Julian    | Jones    | mymail@@               | 786-416-5794 | 1962 Rinehart Road | 123456  | Man    |
      | Sen       | Vo       | sen.vo                 | 786-416-5792 | Test               | 11111   | Woman  |
      | Julian    | Jones    | mymail.ourearth.com    | 786-416-5794 | 1962 Rinehart Road | 91356   | Man    |
      | Julian    | Jones    | mymail@.com.my         | 786-416-5794 | 1962 Rinehart Road | 91356   | Man    |
      | Julian    | Jones    | @you.me.net            | 786-416-5794 | 1962 Rinehart Road | 91356   | Man    |
      | Julian    | Jones    | mymail123@gmail.b      | 786-416-5794 | 1962 Rinehart Road | 91356   | Man    |
      | Julian    | Jones    | mymail@.org.org        | 786-416-5794 | 1962 Rinehart Road | 91356   | Man    |
      | Julian    | Jones    | .mymail@mysite.org     | 786-416-5794 | 1962 Rinehart Road | 91356   | Man    |
      | Julian    | Jones    | mymail()*@gmail.com    | 786-416-5794 | 1962 Rinehart Road | 91356   | Man    |
      | Julian    | Jones    | mymail..1234@yahoo.com | 786-416-5794 | 1962 Rinehart Road | 91356   | Man    |