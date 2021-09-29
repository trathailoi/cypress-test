Feature: List success stories

  Background:
    Given Visit "https://bosley-develop.box.carbon8test.com/results/success-stories/" #Common
    Given I scroll to List success stories

  Scenario: TC_SuccessStories​_01: Visit success stories page, click Watch Story button và popup slider Next: hiển thị video tương ứng với từng slider and load more
    When I click watch "1" story video
    Then I must see popup lightbox video​
    Then In popup video, I must see slider
    Then In popup video, I can see slide at "1" place is active
    Then In popup video, I must see video of slide "1"
    When In popup video, I click "next" at slider
    Then In popup video, I can see slide at "2" place is active
    Then In popup video, I must see video of slide "2"
    When In popup video, I click "next" at slider
    Then In popup video, I can see slide at "3" place is active
    Then In popup video, I must see video of slide "3"
    When In popup video, I click "next" at slider
    Then In popup video, I can see slide at "4" place is active
    Then In popup video, I must see video of slide "4"
    When In popup video, I click "next" at slider
    Then In popup video, I can see slide at "5" place is active
    Then In popup video, I must see video of slide "5"
    When In popup video, I click "next" at slider
    Then In popup video, I can see slide at "6" place is active
    Then In popup video, I must see video of slide "6"
    When In popup video, I click "next" at slider
    Then In popup video, I can see slide at "7" place is active
    Then In popup video, I must see video of slide "7"
    When In popup video, I click "next" at slider
    Then In popup video, I can see slide at "8" place is active
    Then In popup video, I must see video of slide "8"
    Given Fake admin ajax api
    When In popup video, I click "next" at slider
    Given Wait for Admin Ajax "1" times #Common
    Then paged-start query params has been added to url
    # wait for js running :(((((
    Given Wait "3000" ms
    Then In popup video, I can see slide at "9" place is active
    Then In popup video, I must see video of slide "9"
    When In popup video, I click "next" at slider
    Then In popup video, I can see slide at "10" place is active
    Then In popup video, I must see video of slide "10"
    When In popup video, I click "next" at slider
    Then In popup video, I can see slide at "11" place is active
    Then In popup video, I must see video of slide "11"
    When In popup video, I click "next" at slider
    Then In popup video, I can see slide at "12" place is active
    Then In popup video, I must see video of slide "12"
    When In popup video, I click "next" at slider
    Then In popup video, I can see slide at "13" place is active
    Then In popup video, I must see video of slide "13"
    When In popup video, I click "next" at slider
    Then In popup video, I can see slide at "14" place is active
    Then In popup video, I must see video of slide "14"
    When In popup video, I click "next" at slider
    Then In popup video, I can see slide at "15" place is active
    Then In popup video, I must see video of slide "15"
    When In popup video, I click "next" at slider
    Then In popup video, I can see slide at "16" place is active
    Then In popup video, I must see video of slide "16"
    When In popup video, I click "next" at slider
    Then In popup video, I can see slide at "17" place is active
    Then In popup video, I must see video of slide "17"
    When I click close popup lightbox video
    Then I do not see popup lightbox video​

  Scenario: TC_SuccessStories​_02: Visit success stories page, click Show more button: hiển thị thêm list các stories còn lại
    Then I must see list success stories have "8" items
    Given Fake admin ajax api
    When I click show more button
    Given Wait for Admin Ajax "1" times #Common
    Then I must see list success stories have "17" items
    And paged-start query params has been added to url
    And I do not see button show more