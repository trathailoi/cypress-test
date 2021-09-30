Feature: location

  Background: 
    Given Visit "https://bosley-develop.box.carbon8test.com/locations" #Common
    Given I scroll to gallery section​​
    Then I must see slider
    Then I can see slide at "1" place is active
    Then I must see Big image, info, and link location of slide "1"

  Scenario: TC_Gallery_01: Visit location page, ở gallery section: click slider Next: hiển thị video tương ứng với từng slider
    Then Slide from slide "2" to slide "36" should work correctly when click "next"
    When I click "next" at slider
    Then I can see slide at "1" place is active
    Then I must see Big image, info, and link location of slide "1"

  Scenario: TC_Gallery_02: Visit location page, ở gallery section: click slider Previous: hiển thị video tương ứng với từng slider
    Then Slide from slide "36" to slide "2" should work correctly when click "prev"
    Then I can see slide at "1" place is active
    Then I must see Big image, info, and link location of slide "1"
    When I click "prev" at slider
    Then I can see slide at "36" place is active
    Then I must see Big image, info, and link location of slide "36"