Feature: location

  Background: 
    Given Visit "https://bosley-develop.box.carbon8test.com/locations" #Common
    And I scroll to gallery section​​
    Then I must see slider
    # nên là: I must see slider has "34" slides
    And I can see slide at "1" place is active
    And I must see Big image, info, and link location of slide "1"

  Scenario: TC_Gallery_01: Visit location page, ở gallery section: click slider Next: hiển thị video tương ứng với từng slider
    # chị cần gom lại như thế này nha Thắng:
    # When I click "next" button "33" times
    # Then I can see "33" slides to be activated in order (from slide 2 to slide 34) 
    # And I must see Big image, info, and link location of each slide
    # When I click "next" button one more time
    # Then I can see slide at "1" place is active
    # And I must see Big image, info, and link location of slide "1"    
    When I click "next" at slider
    Then I can see slide at "2" place is active
    Then I must see Big image, info, and link location of slide "2"
    When I click "next" at slider
    Then I can see slide at "3" place is active
    Then I must see Big image, info, and link location of slide "3"
    When I click "next" at slider
    Then I can see slide at "4" place is active
    Then I must see Big image, info, and link location of slide "4"
    When I click "next" at slider
    Then I can see slide at "5" place is active
    Then I must see Big image, info, and link location of slide "5"
    When I click "next" at slider
    Then I can see slide at "6" place is active
    Then I must see Big image, info, and link location of slide "6"
    When I click "next" at slider
    Then I can see slide at "7" place is active
    Then I must see Big image, info, and link location of slide "7"
    When I click "next" at slider
    Then I can see slide at "8" place is active
    Then I must see Big image, info, and link location of slide "8"
    When I click "next" at slider
    Then I can see slide at "9" place is active
    Then I must see Big image, info, and link location of slide "9"
    When I click "next" at slider
    Then I can see slide at "10" place is active
    Then I must see Big image, info, and link location of slide "10"
    When I click "next" at slider
    Then I can see slide at "11" place is active
    Then I must see Big image, info, and link location of slide "11"
    When I click "next" at slider
    Then I can see slide at "12" place is active
    Then I must see Big image, info, and link location of slide "12"
    When I click "next" at slider
    Then I can see slide at "13" place is active
    Then I must see Big image, info, and link location of slide "13"
    When I click "next" at slider
    Then I can see slide at "14" place is active
    Then I must see Big image, info, and link location of slide "14"
    When I click "next" at slider
    Then I can see slide at "15" place is active
    Then I must see Big image, info, and link location of slide "15"
    When I click "next" at slider
    Then I can see slide at "16" place is active
    Then I must see Big image, info, and link location of slide "16"
    When I click "next" at slider
    Then I can see slide at "17" place is active
    Then I must see Big image, info, and link location of slide "17"
    When I click "next" at slider
    Then I can see slide at "18" place is active
    Then I must see Big image, info, and link location of slide "18"
    When I click "next" at slider
    Then I can see slide at "19" place is active
    Then I must see Big image, info, and link location of slide "19"
    When I click "next" at slider
    Then I can see slide at "20" place is active
    Then I must see Big image, info, and link location of slide "20"
    When I click "next" at slider
    Then I can see slide at "21" place is active
    Then I must see Big image, info, and link location of slide "21"
    When I click "next" at slider
    Then I can see slide at "22" place is active
    Then I must see Big image, info, and link location of slide "22"
    When I click "next" at slider
    Then I can see slide at "23" place is active
    Then I must see Big image, info, and link location of slide "23"
    When I click "next" at slider
    Then I can see slide at "24" place is active
    Then I must see Big image, info, and link location of slide "24"
    When I click "next" at slider
    Then I can see slide at "25" place is active
    Then I must see Big image, info, and link location of slide "25"
    When I click "next" at slider
    Then I can see slide at "26" place is active
    Then I must see Big image, info, and link location of slide "26"
    When I click "next" at slider
    Then I can see slide at "27" place is active
    Then I must see Big image, info, and link location of slide "27"
    When I click "next" at slider
    Then I can see slide at "28" place is active
    Then I must see Big image, info, and link location of slide "28"
    When I click "next" at slider
    Then I can see slide at "29" place is active
    Then I must see Big image, info, and link location of slide "29"
    When I click "next" at slider
    Then I can see slide at "30" place is active
    Then I must see Big image, info, and link location of slide "30"
    When I click "next" at slider
    Then I can see slide at "31" place is active
    Then I must see Big image, info, and link location of slide "31"
    When I click "next" at slider
    Then I can see slide at "32" place is active
    Then I must see Big image, info, and link location of slide "32"
    When I click "next" at slider
    Then I can see slide at "33" place is active
    Then I must see Big image, info, and link location of slide "33"
    When I click "next" at slider
    Then I can see slide at "34" place is active
    Then I must see Big image, info, and link location of slide "34"
    When I click "next" at slider
    Then I can see slide at "35" place is active
    Then I must see Big image, info, and link location of slide "35"
    When I click "next" at slider
    Then I can see slide at "36" place is active
    Then I must see Big image, info, and link location of slide "36"
    When I click "next" at slider
    Then I can see slide at "1" place is active
    Then I must see Big image, info, and link location of slide "1"

  Scenario: TC_Gallery_02: Visit location page, ở gallery section: click slider Previous: hiển thị video tương ứng với từng slider
    # chị cần gom lại như thế này nha Thắng
    # When I click "prev" button "33" times
    # Then I can see "33" slides to be activated in order (from slide 34 to slide 2)
    # And I must see Big image, info, and link location of each slide
    # When I click "prev" button one more time
    # Then I can see slide at "1" place is active
    # And I must see Big image, info, and link location of slide "1"
    When I click "prev" at slider
    Then I can see slide at "36" place is active
    Then I must see Big image, info, and link location of slide "36"
    When I click "prev" at slider
    Then I can see slide at "35" place is active
    Then I must see Big image, info, and link location of slide "35"
    When I click "prev" at slider
    Then I can see slide at "34" place is active
    Then I must see Big image, info, and link location of slide "34"
    When I click "prev" at slider
    Then I can see slide at "33" place is active
    Then I must see Big image, info, and link location of slide "33"
    When I click "prev" at slider
    Then I can see slide at "32" place is active
    Then I must see Big image, info, and link location of slide "32"
    When I click "prev" at slider
    Then I can see slide at "31" place is active
    Then I must see Big image, info, and link location of slide "31"
    When I click "prev" at slider
    Then I can see slide at "30" place is active
    Then I must see Big image, info, and link location of slide "30"
    When I click "prev" at slider
    Then I can see slide at "29" place is active
    Then I must see Big image, info, and link location of slide "29"
    When I click "prev" at slider
    Then I can see slide at "28" place is active
    Then I must see Big image, info, and link location of slide "28"
    When I click "prev" at slider
    Then I can see slide at "27" place is active
    Then I must see Big image, info, and link location of slide "27"
    When I click "prev" at slider
    Then I can see slide at "26" place is active
    Then I must see Big image, info, and link location of slide "26"
    When I click "prev" at slider
    Then I can see slide at "25" place is active
    Then I must see Big image, info, and link location of slide "25"
    When I click "prev" at slider
    Then I can see slide at "24" place is active
    Then I must see Big image, info, and link location of slide "24"
    When I click "prev" at slider
    Then I can see slide at "23" place is active
    Then I must see Big image, info, and link location of slide "23"
    When I click "prev" at slider
    Then I can see slide at "22" place is active
    Then I must see Big image, info, and link location of slide "22"
    When I click "prev" at slider
    Then I can see slide at "21" place is active
    Then I must see Big image, info, and link location of slide "21"
    When I click "prev" at slider
    Then I can see slide at "20" place is active
    Then I must see Big image, info, and link location of slide "20"
    When I click "prev" at slider
    Then I can see slide at "19" place is active
    Then I must see Big image, info, and link location of slide "19"
    When I click "prev" at slider
    Then I can see slide at "18" place is active
    Then I must see Big image, info, and link location of slide "18"
    When I click "prev" at slider
    Then I can see slide at "17" place is active
    Then I must see Big image, info, and link location of slide "17"
    When I click "prev" at slider
    Then I can see slide at "16" place is active
    Then I must see Big image, info, and link location of slide "16"
    When I click "prev" at slider
    Then I can see slide at "15" place is active
    Then I must see Big image, info, and link location of slide "15"
    When I click "prev" at slider
    Then I can see slide at "14" place is active
    Then I must see Big image, info, and link location of slide "14"
    When I click "prev" at slider
    Then I can see slide at "13" place is active
    Then I must see Big image, info, and link location of slide "13"
    When I click "prev" at slider
    Then I can see slide at "12" place is active
    Then I must see Big image, info, and link location of slide "12"
    When I click "prev" at slider
    Then I can see slide at "11" place is active
    Then I must see Big image, info, and link location of slide "11"
    When I click "prev" at slider
    Then I can see slide at "10" place is active
    Then I must see Big image, info, and link location of slide "10"
    When I click "prev" at slider
    Then I can see slide at "9" place is active
    Then I must see Big image, info, and link location of slide "9"
    When I click "prev" at slider
    Then I can see slide at "8" place is active
    Then I must see Big image, info, and link location of slide "8"
    When I click "prev" at slider
    Then I can see slide at "7" place is active
    Then I must see Big image, info, and link location of slide "7"
    When I click "prev" at slider
    Then I can see slide at "6" place is active
    Then I must see Big image, info, and link location of slide "6"
    When I click "prev" at slider
    Then I can see slide at "5" place is active
    Then I must see Big image, info, and link location of slide "5"
    When I click "prev" at slider
    Then I can see slide at "4" place is active
    Then I must see Big image, info, and link location of slide "4"
    When I click "prev" at slider
    Then I can see slide at "3" place is active
    Then I must see Big image, info, and link location of slide "3"
    When I click "prev" at slider
    Then I can see slide at "2" place is active
    Then I must see Big image, info, and link location of slide "2"
    When I click "prev" at slider
    Then I can see slide at "1" place is active
    Then I must see Big image, info, and link location of slide "1"
    When I click "prev" at slider
    Then I can see slide at "36" place is active
    Then I must see Big image, info, and link location of slide "36"