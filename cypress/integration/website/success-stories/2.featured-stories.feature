Feature: Success Stories

  Background: 
    Given Visit "/results/success-stories/" #Common
    Given I scroll to featured stories section​​
    Then I must see slider
    Then I can see slide at "1" place is active
    Then I must see Big image, before-after image, info, button watch video of slide "1"

  Scenario: TC_FeaturedStories​_01: Visit success stories page, ở Featured Stories section: click slider Next/Previous: hiển thị video tương ứng với từng slider
    When I click "next" at slider
    Then I can see slide at "2" place is active
    Then I must see Big image, before-after image, info, button watch video of slide "2"
    When I click "next" at slider
    Then I can see slide at "3" place is active
    Then I must see Big image, before-after image, info, button watch video of slide "3"
    When I click "next" at slider
    Then I can see slide at "4" place is active
    Then I must see Big image, before-after image, info, button watch video of slide "4"
    When I click "next" at slider
    Then I can see slide at "1" place is active
    Then I must see Big image, before-after image, info, button watch video of slide "1"
    When I click "prev" at slider
    Then I can see slide at "4" place is active
    Then I must see Big image, before-after image, info, button watch video of slide "4"
    When I click "prev" at slider
    Then I can see slide at "3" place is active
    Then I must see Big image, before-after image, info, button watch video of slide "3"
    When I click "prev" at slider
    Then I can see slide at "2" place is active
    Then I must see Big image, before-after image, info, button watch video of slide "2"
    When I click "prev" at slider
    Then I can see slide at "1" place is active
    Then I must see Big image, before-after image, info, button watch video of slide "1"

  Scenario: TC_FeaturedStories​_02: Visit success stories page, ở Featured Stories section: click Slide Dot: hiển thị video tương ứng với từng dot
    When I click dot at "3" place of slider
    Then I can see slide at "3" place is active
    Then I must see Big image, before-after image, info, button watch video of slide "3"
    When I click dot at "4" place of slider
    Then I can see slide at "4" place is active
    Then I must see Big image, before-after image, info, button watch video of slide "4"
    When I click dot at "2" place of slider
    Then I can see slide at "2" place is active
    Then I must see Big image, before-after image, info, button watch video of slide "2"
    When I click dot at "1" place of slider
    Then I can see slide at "1" place is active
    Then I must see Big image, before-after image, info, button watch video of slide "1"

  Scenario: TC_FeaturedStories​_03: Visit success stories page, ở Featured Stories section: click Watch Story button và popup Watch lightbox video Next/Previous: hiển thị video tương ứng với từng slider 
    When I click watch story video
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
    Then In popup video, I can see slide at "1" place is active
    Then In popup video, I must see video of slide "1"
    When In popup video, I click "prev" at slider
    Then In popup video, I can see slide at "4" place is active
    Then In popup video, I must see video of slide "4"
    When In popup video, I click "prev" at slider
    Then In popup video, I can see slide at "3" place is active
    Then In popup video, I must see video of slide "3"
    When In popup video, I click "prev" at slider
    Then In popup video, I can see slide at "2" place is active
    Then In popup video, I must see video of slide "2"
    When In popup video, I click "prev" at slider
    Then In popup video, I can see slide at "1" place is active
    Then In popup video, I must see video of slide "1"
    When I click close popup lightbox video
    Then I do not see popup lightbox video​
