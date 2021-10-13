Feature: Page Get Info Kit
  Test Submit form "Get my free info kit" 

  Background: 
    Given Clear window session #Common
    And Visit Get Info Kit page #Common

  Scenario: TC_GetInfoKit_01: Visit Get Info Kit page, input form: Submit form "Get a free info kit" thành công
    When I input info to Get Info Kit form
    Given Fake admin ajax api #Common
    When I click Get My Free Info Kit button​
    Then I see loading icon and button is disabled
    Given Wait for Admin Ajax "1" times #Common
    Then I must redirect to Scheduler page with param Thank You

  Scenario Outline: TC_GetInfoKit_02: Visit Get Info Kit page, không input/invalid input form: Submit form "Get a free information kit" không thành công    
    When I input info to Get Info Kit form with name is "<firstName>" "<lastName>" "<email>" "<phone>" "<street>" "<zipcode>" "<gender>"
    And I click Get My Free Info Kit button​
    Then I can see red error in dynamic form
    Examples:
      | firstName | lastName | email                  | phone        | street             | zipcode | gender |
      | Julian    | Jones    |                        |              | 1962 Rinehart Road |         | Man    |
      | Julian    | Jones    | mymail                 | 7864         | 1962 Rinehart Road | 0       | Man    |
      | Julian    | Jones    | mymail@@               | 786-416-579  | 1962 Rinehart Road | 123456  | Man    |
      | Sen       | Vo       | sen.vo                 | 786-416-5792 | Test               | 11111   | Woman  |
      | Julian    | Jones    | mymail.ourearth.com    | 786-416-5794 | 1962 Rinehart Road | 91356   | Man    |
      | Julian    | Jones    | mymail@.com.my         | 786-416-5794 | 1962 Rinehart Road | 91356   | Man    |
      | Julian    | Jones    | @you.me.net            | 786-416-5794 | 1962 Rinehart Road | 91356   | Man    |
      | Julian    | Jones    | mymail123@gmail.b      | 786-416-5794 | 1962 Rinehart Road | 91356   | Man    |
      | Julian    | Jones    | mymail@.org.org        | 786-416-5794 | 1962 Rinehart Road | 91356   | Man    |
      | Julian    | Jones    | .mymail@mysite.org     | 786-416-5794 | 1962 Rinehart Road | 91356   | Man    |
      | Julian    | Jones    | mymail()*@gmail.com    | 786-416-5794 | 1962 Rinehart Road | 91356   | Man    |
      | Julian    | Jones    | mymail..1234@yahoo.com | 786-416-5794 | 1962 Rinehart Road | 91356   | Man    |

  Scenario: TC_GetInfoKit_03: Visit Get Info Kit page, input Street Address Info: Hiển thị GG suggest, chọn địa chỉ thì chỉ còn address, k còn city, state, zipcode​
    When I input info to Get Info Kit form with address is "1 Apple Park Way, Cupertino, CA, USA"
    Then I must see GG suggestion is displayed
    And I must see the first GG suggestion is "1 Apple Park Way, Cupertino, CA, USA>"
    When I press Tab on the keyboard
    Then I must see the street address field has value equal "1 Apple Park Way, Cupertino, CA, USA"
    And I must see GG suggestion is closed
    When I clear the street address field and input address is "1 Apple Park Way, Cupertino, CA, USA"
    Then I must see GG suggestion is displayed
    And I must see the first GG suggestion is "1 Apple Park Way, Cupertino, CA, USA"
    When I press Arrow down and Enter on the keyboard
    Then I must see the street address field has value equal "1 Apple Park Way"
    And I must see GG suggestion is closed