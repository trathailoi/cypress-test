Feature: Large Banner

  Scenario: TC_LargeBanner_01: Visit Hair-transplant, Play video: open lightbox​ and click X icon
    Given Visit "https://bosley-develop.box.carbon8test.com/hair-transplant/" #Common
    Given I scroll to lightbox area
    When I click lightbox video area
    Then I must see lightbox video
    When I click close button at top-right
    Then Lightbox video closed

  Scenario: TC_LargeBanner_02: Visit Hair-transplant, Play video: open lightbox​ and click outside box
    Given Visit "https://bosley-develop.box.carbon8test.com/hair-transplant/" #Common
    Given I scroll to lightbox area
    When I click lightbox video area
    Then I must see lightbox video
    When I click outside
    Then Lightbox video closed