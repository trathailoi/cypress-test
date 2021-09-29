Feature: Steps​

  Background:
    Given Visit "https://bosley-develop.box.carbon8test.com/internal/" #Common
    Given I scroll to Step​ section
    Then I must see slider
    Then I can see slide at "1" place is active
    Then I must see Big image, step content of slide "1"
    Then I can see button "prev" is disabled

  Scenario: TC_Steps​_01: Visit Internal page, click Slider​ Steps next/prev: hiển thị Big image và content tương ứng Slider​ Steps
    When I click "next" at slider
    Then I can see slide at "2" place is active
    Then I must see Big image, step content of slide "2"
    When I click "next" at slider
    Then I can see slide at "3" place is active
    Then I must see Big image, step content of slide "3"
    When I click "next" at slider
    Then I can see slide at "4" place is active
    Then I must see Big image, step content of slide "4"
    Then I can see button "next" is disabled
    When I click "prev" at slider
    Then I can see slide at "3" place is active
    Then I must see Big image, step content of slide "3"
    When I click "prev" at slider
    Then I can see slide at "2" place is active
    Then I must see Big image, step content of slide "2"
    When I click "prev" at slider
    Then I can see slide at "1" place is active
    Then I must see Big image, step content of slide "1"
    Then I can see button "prev" is disabled

  Scenario: TC_Steps​_02: Visit Internal page, click Dot next/prev: hiển thị Big image và content tương ứng Slider​ Steps
    When I click dot at "2" place of slider
    Then I can see slide at "2" place is active
    Then I must see Big image, step content of slide "2"
    When I click dot at "3" place of slider
    Then I can see slide at "3" place is active
    Then I must see Big image, step content of slide "3"
    When I click dot at "4" place of slider
    Then I can see slide at "4" place is active
    Then I must see Big image, step content of slide "4"
    Then I can see button "next" is disabled
    When I click dot at "1" place of slider
    Then I can see slide at "1" place is active
    Then I must see Big image, step content of slide "1"
    Then I can see button "prev" is disabled