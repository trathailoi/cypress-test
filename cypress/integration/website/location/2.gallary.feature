Feature: Page Location - Gallery section
  Test view Gallery Slider by click Next/Previous icon

  Background: 
    Given Visit "https://bosley-develop.box.carbon8test.com/locations" #Common
    And I scroll to gallery section​​
    Then I must see slider
    And I can see slide at "1" place is active
    And I must see Image, State, and link location of slide "1"

  Scenario: TC_Gallery_01: Visit location page, ở gallery section: click Next icon: hiển thị gallery tương ứng với từng slide
    Then I must see correctly display content from slide "2" to slide "36" when every time I click "next" icon
    When I click "next" at slider
    Then I can see slide at "1" place is active
    And I must see Image, State, and link location of slide "1"

  Scenario: TC_Gallery_02: Visit location page, ở gallery section: click Previous icon: hiển thị gallery tương ứng với từng slide
    Then I must see correctly display content from slide "36" to slide "1" when every time I click "prev" icon
    When I click "prev" at slider
    Then I can see slide at "36" place is active
    And I must see Image, State, and link location of slide "36"