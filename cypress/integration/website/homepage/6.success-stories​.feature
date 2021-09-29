Feature: Success Stories

  Background:
    Given Visit home page #Common
    Given I scroll to Success Stories section​
    Then I must see slider
    Then I can see slide at "1" place is active
    Then I must see Big image, before-after image, story, button watch video of slide "1"

  Scenario: TC_Stories_01: Visit homepage, Success Stories click Watch video and click Slider​ next/prev: display video tương ứng Slider​ Success Stories
    When I click watch story video
    Then I must see popup lightbox video​
    Then In popup video, I must see slider    
    Then In popup video, I can see slide at "1" place is active and see video of slide
    When In popup video, I click "next" at slider
    Then In popup video, I can see slide at "2" place is active and see video of slide
    When In popup video, I click "next" at slider    
    Then In popup video, I can see slide at "3" place is active and see video of slide
    When In popup video, I click "next" at slider
    Then In popup video, I can see slide at "4" place is active and see video of slide
    When In popup video, I click "next" at slider
    Then In popup video, I can see slide at "5" place is active and see video of slide
    When In popup video, I click "next" at slider
    Then In popup video, I can see slide at "1" place is active and see video of slide    
    When In popup video, I click "prev" at slider
    Then In popup video, I can see slide at "5" place is active and see video of slide
    When In popup video, I click "prev" at slider
    Then In popup video, I can see slide at "4" place is active and see video of slide
    When In popup video, I click "prev" at slider
    Then In popup video, I can see slide at "3" place is active and see video of slide
    When In popup video, I click "prev" at slider
    Then In popup video, I can see slide at "2" place is active and see video of slide
    When In popup video, I click "prev" at slider
    Then In popup video, I can see slide at "1" place is active and see video of slide
    When I click close popup lightbox video
    Then I do not see popup lightbox video​

  Scenario: TC_Stories_02: Visit homepage, Success Stories click Slider​ next/prev: hiển thị Big image, small image, story, button watch video tương ứng Slider​ Success Stories
    When I click "next" at slider
    Then I can see slide at "2" place is active
    Then I must see Big image, before-after image, story, button watch video of slide "2"
    When I click "next" at slider
    Then I can see slide at "3" place is active
    Then I must see Big image, before-after image, story, button watch video of slide "3"
    When I click "next" at slider
    Then I can see slide at "4" place is active
    Then I must see Big image, before-after image, story, button watch video of slide "4"
    When I click "next" at slider
    Then I can see slide at "5" place is active
    Then I must see Big image, before-after image, story, button watch video of slide "5"
    When I click "next" at slider
    Then I can see slide at "1" place is active
    Then I must see Big image, before-after image, story, button watch video of slide "1"
    When I click "prev" at slider
    Then I can see slide at "5" place is active
    Then I must see Big image, before-after image, story, button watch video of slide "5"
    When I click "prev" at slider
    Then I can see slide at "4" place is active
    Then I must see Big image, before-after image, story, button watch video of slide "4"
    When I click "prev" at slider
    Then I can see slide at "3" place is active
    Then I must see Big image, before-after image, story, button watch video of slide "3"
    When I click "prev" at slider
    Then I can see slide at "2" place is active
    Then I must see Big image, before-after image, story, button watch video of slide "2"
    When I click "prev" at slider
    Then I can see slide at "1" place is active
    Then I must see Big image, before-after image, story, button watch video of slide "1"   

  Scenario: TC_Stories_03: Visit homepage, Success Stories click Dot​ next/prev: hiển thị Big image, small image, story, button watch video tương ứng Slider​ Success Stories
    When I click dot at "3" place of slider
    Then I can see slide at "3" place is active
    Then I must see Big image, before-after image, story, button watch video of slide "3"
    When I click dot at "5" place of slider
    Then I can see slide at "5" place is active
    Then I must see Big image, before-after image, story, button watch video of slide "5"
    When I click dot at "2" place of slider
    Then I can see slide at "2" place is active
    Then I must see Big image, before-after image, story, button watch video of slide "2"
    When I click dot at "1" place of slider
    Then I can see slide at "1" place is active
    Then I must see Big image, before-after image, story, button watch video of slide "1"