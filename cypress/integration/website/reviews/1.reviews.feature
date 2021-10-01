Feature: Reviews

  Scenario Outline: TC_Reviews​_01: Visit Customer Reviews page, select Filter option: hiển thị content list review tương ứng
    Given Visit "/why-bosley/bosley-reviews/" #Common
    Given Fake admin ajax api get "<filter>"
    When I change filter to "<filter>" value
    Then I can see loading icon
    Given Wait for fetch data
    Then I do not see loading icon
    Then I must see list "<filter>" review
    Examples:
      | filter        |
      | Albany        |
      | Cincinnati    |
      | Washington DC |

  Scenario: TC_Reviews​_01: Visit Customer Reviews page, select Show more: hiển thị thêm 10 items tiếp theo 
    Given Visit "/why-bosley/bosley-reviews/" #Common
    # fetch lại data all
    Given Fake admin ajax api get "All"
    When I change filter to "All" value
    Then I can see loading icon
    Given Wait for fetch data
    Then I do not see loading icon
    Then I must see list "All" review
    Given Fake admin ajax api get "Show More"
    When I click show more
    Then I can see loading icon after show more
    Given Wait for fetch data
    Then I do not see loading icon after show more
    Then I must see list "Show More" review