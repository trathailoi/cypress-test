Feature: Before after

  Scenario Outline: TC_BeforeAfter​_01: Visit Internal page, click Image: Check show hide popup
    Given Visit "/results/before-after-gallery-men" #Common
    Given I scroll to Before-After​ section
    When I click image at "<image>" place
    Then I must see opened popup
    Then In popup image, I can see slide at "<image>" place is active and image of slide
    When I click "<clickCloseSelector>" for close
    Then Popup must be closed
    Examples:
      | image | clickCloseSelector        |
      | 1     | close button at top-right |
      | 1     | outside                   |
      | 2     | close button at top-right |
      | 2     | outside                   |

  Scenario: TC_BeforeAfter​_02: Visit Internal page, click Image NEXT: hiển thị Big image và content tương ứng
    Given Visit "/results/before-after-gallery-men" #Common
    Given I scroll to Before-After​ section
    When I click image at "1" place
    Then I must see opened popup
    Then In popup image, I must see slider
    Then In popup image, I can see slide at "1" place is active and image of slide
    Then I must see correctly display content from slide "2" to slide "66" when every time I click "next" icon
    When In popup image, I click "next" at slider
    Then In popup image, I can see slide at "1" place is active and image of slide
    When I click "close button at top-right" for close
    Then Popup must be closed

  Scenario: TC_BeforeAfter​_03: Visit Internal page, click Image PREVIOUS: hiển thị Big image và content tương ứng
    Given Visit "/results/before-after-gallery-men" #Common
    Given I scroll to Before-After​ section
    When I click image at "1" place
    Then I must see opened popup
    Then In popup image, I must see slider
    Then In popup image, I can see slide at "1" place is active and image of slide
    Then I must see correctly display content from slide "66" to slide "2" when every time I click "prev" icon
    When In popup image, I click "prev" at slider
    Then In popup image, I can see slide at "1" place is active and image of slide
    When I click "close button at top-right" for close
    Then Popup must be closed
