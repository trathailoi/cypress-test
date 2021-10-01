Feature: Homepage banner
  Test slider on Homepage banner

  Background:
    Given Visit home page #Common
    Then I must see slider on Homepage banner
    And I can see slide at "1" place is active
    And I must see Big image, before-after image, disclaimer box, badge icon​ of slide "1"

  Scenario: TC_Banner_01: Visit homepage, banner click Slider​ next/prev: hiển thị Big image, before-after image, disclaimer box, badge icon tương ứng
    When I click "next" at slider
    Then I can see slide at "2" place is active
    And I must see Big image, before-after image, disclaimer box, badge icon​ of slide "2"
    When I click "next" at slider
    Then I can see slide at "1" place is active
    And I must see Big image, before-after image, disclaimer box, badge icon​ of slide "1"
    When I click "prev" at slider
    Then I can see slide at "2" place is active
    And I must see Big image, before-after image, disclaimer box, badge icon​ of slide "2"
    When I click "prev" at slider
    Then I can see slide at "1" place is active
    And I must see Big image, before-after image, disclaimer box, badge icon​ of slide "1"

  Scenario: TC_Banner_02: Visit homepage, banner click Dot: hiển thị Big image, before-after image, disclaimer box, badge icon tương ứng
    When I click dot at "2" place of slider
    Then I can see slide at "2" place is active
    And I must see Big image, before-after image, disclaimer box, badge icon​ of slide "2"
    When I click dot at "1" place of slider
    Then I can see slide at "1" place is active
    And I must see Big image, before-after image, disclaimer box, badge icon​ of slide "1"