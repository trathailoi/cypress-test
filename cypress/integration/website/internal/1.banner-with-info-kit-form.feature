Feature: Banner with info kit form

  Scenario: TC_BannerInternal_01: Visit Internal page, input Info Kit form: Submit form "Info Kit and Gift Certificate" thành công
    Given Visit "/internal/" #Common
    Given Fake admin ajax api
    When I input info to form
    Then I click Get My Free Info Kit button​
    Then I see loading icon and button is disabled
    Given Wait for Admin Ajax "1" times #Common
    Then I must be redirected to scheduler with params kit form thank you
    
  Scenario Outline: TC_BannerInternal_02: Visit Internal page, không input/invalid input Info Kit form: Submit form "Info Kit and Gift Certificate" không thành công
    Given Visit "/internal/" #Common
    When I input info to form with name is "<firstName>" "<lastName>" "<email>" "<phone>" "<street>" "<zipcode>" "<gender>"
    Then I click Get My Free Info Kit button​
    Then I can see red error in form
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