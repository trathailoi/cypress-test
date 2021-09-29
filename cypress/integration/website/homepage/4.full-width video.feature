Feature: Full width video

  Scenario: TC_FullVideo_01: Visit homepage, Play video: open lightbox​ and click X icon
    Given Visit home page #Common
    Given I scroll to Full-Width Video section​
    When I click Play Video button​
    Then I must see lightbox video​
    When I click close button at top-right
    Then Lightbox video must be closed

  Scenario: TC_FullVideo_02: Visit homepage, Play video: open lightbox​ and click outside box
    Given Visit home page #Common
    Given I scroll to Full-Width Video section​
    When I click Play Video button​
    Then I must see lightbox video​
    When I click outside
    Then Lightbox video must be closed

  # chưa tìm ra solution cho action trên iframe
  # Scenario: Pause video​
  #   Given Visit home page #Common
  #   Given I scroll to Full-Width Video section​
  #   When I click Play Video button​
  #   Then I must see lightbox video​
  #   When I Click Pause Video button​
  #   Then Lightbox video must be paused