Feature: Page Detail Location - Doctor section
  Test view Doctors by click Next/Previous icon

  Background: 
    Given Visit "/locations/denver/​" #Common
    And I scroll to doctors section​​    

  Scenario: TC_DoctorLocation_01: Visit location detail page, ở Doctor section: click Next/Previous icon: hiển thị gallery tương ứng với từng slide
    Then I must see slider
    And The "prev" icon cannot click
    And I must see the info of Doctor "1" is displayed
    And I must see the info of Doctor "2" is displayed
    And I must see the info of Doctor "3" is displayed
    And I must see the info of Doctor "4" is hidden
    When I click "next" at slider
    Then I must see the info of Doctor "1" is hidden
    And I must see the info of Doctor "2" is displayed
    And I must see the info of Doctor "3" is displayed
    And I must see the info of Doctor "4" is displayed
    And The "next" icon cannot click
    When I click "prev" at slider
    And I must see the info of Doctor "1" is displayed
    And I must see the info of Doctor "2" is displayed
    And I must see the info of Doctor "3" is displayed
    And I must see the info of Doctor "4" is hidden

  Scenario: TC_DoctorLocation_02: Visit location detail page, ở Doctor section: click Dot icon: hiển thị gallery tương ứng với từng Dot
    Then I must see slider
    And I must see slide at "1" place is active
    And I must see the info of Doctor "1" is displayed
    And I must see the info of Doctor "2" is displayed
    And I must see the info of Doctor "3" is displayed
    And I must see the info of Doctor "4" is hidden
    When I click dot at "2" place of slider
    Then I must see the info of Doctor "1" is hidden
    And I must see the info of Doctor "2" is displayed
    And I must see the info of Doctor "3" is displayed
    And I must see the info of Doctor "4" is displayed    
    When I click dot at "1" place of slider
    And I must see the info of Doctor "1" is displayed
    And I must see the info of Doctor "2" is displayed
    And I must see the info of Doctor "3" is displayed
    And I must see the info of Doctor "4" is hidden