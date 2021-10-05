Feature: Before After - Hear Their Stories

  Scenario Outline: TC_BeforeAfter_HearTheirStories_01 Click Image or Watch story => Open lightbox
    Given Visit "/results/before-after-gallery-men" #Common
    Given I scroll to Hear Their Stories section
    When I click to "<clickSelector>" at "<video>" story
    Then I must see popup lightbox video​
    Then In popup video, I must see slider
    Then In popup video, I can see slide at "<video>" place is active
    When I click close popup lightbox video
    Then I do not see popup lightbox video​
    Examples:
      | clickSelector | video |
      | image         | 1     |
      | link watch    | 1     |
      | image         | 2     |
      | link watch    | 2     |
      | image         | 3     |
      | link watch    | 3     |

  Scenario: TC_BeforeAfter_HearTheirStories_02 Click Image or Watch story => Open lightbox: popup slider -> button Next: hiển thị video tương ứng với từng slider 
    Given Visit "/results/before-after-gallery-men" #Common
    Given I scroll to Hear Their Stories section
    When I click to "link watch" at "1" story
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
    Then In popup video, I can see slide at "1" place is active
    Then In popup video, I must see video of slide "1"
    When I click close popup lightbox video
    Then I do not see popup lightbox video​

  Scenario: TC_BeforeAfter_HearTheirStories_02 Click Image or Watch story => Open lightbox: popup slider -> button PREVIOUS: hiển thị video tương ứng với từng slider 
    Given Visit "/results/before-after-gallery-men" #Common
    Given I scroll to Hear Their Stories section
    When I click to "link watch" at "1" story
    Then I must see popup lightbox video​
    Then In popup video, I must see slider
    Then In popup video, I can see slide at "1" place is active
    Then In popup video, I must see video of slide "1"
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