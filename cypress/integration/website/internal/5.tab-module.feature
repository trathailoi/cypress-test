Feature: Tab module

  Scenario: TC_TabModule​_01: Visit Internal page, on section Tab, click  another Tab: hiển thị image và content tương ứng với từng Tab
    Given Visit "https://bosley-develop.box.carbon8test.com/internal/" #Common
    Given I scroll to Tab module section
    When I click tab "1"
    Then Tab "1" is active
    And I can see tab "1" content
    When I click tab "2"
    Then Tab "2" is active
    And I can see tab "2" content
    When I click tab "3"
    Then Tab "3" is active
    And I can see tab "3" content
    When I click tab "4"
    Then Tab "4" is active
    And I can see tab "4" content
    When I click tab "5"
    Then Tab "5" is active
    And I can see tab "5" content
    When I click tab "6"
    Then Tab "6" is active
    And I can see tab "6" content
    When I click tab "1"
    Then Tab "1" is active
    And I can see tab "1" content