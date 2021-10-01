Feature: Before after

  Scenario Outline: TC_BeforeAfter​_01: Visit Internal page, click Image: Check show hide popup
    Given Visit "/internal/" #Common
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

  Scenario: TC_BeforeAfter​_02: Visit Internal page, click Image next/prev: hiển thị Big image và content tương ứng
    Given Visit "/internal/" #Common
    Given I scroll to Before-After​ section
    When I click image at "1" place
    Then I must see opened popup
    Then In popup image, I must see slider
    Then In popup image, I can see slide at "1" place is active and image of slide
    When In popup image, I click "next" at slider
    Then In popup image, I can see slide at "2" place is active and image of slide
    When In popup image, I click "next" at slider
    Then In popup image, I can see slide at "1" place is active and image of slide
    When In popup image, I click "prev" at slider
    Then In popup image, I can see slide at "2" place is active and image of slide
    When In popup image, I click "prev" at slider
    Then In popup image, I can see slide at "1" place is active and image of slide
    When I click "close button at top-right" for close
    Then Popup must be closed
