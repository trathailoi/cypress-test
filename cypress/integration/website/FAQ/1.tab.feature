Feature: FAQ Feature - Tab

  Scenario: TC_FAQ​_01: Visit FAQ page, click switch Tab: hiển thị list QA tương ứng với từng Tab
    Given Visit "/why-bosley/faq/" #Common
    Given I scroll to Tab module section
    Given Fake admin ajax api get "hair-transplant" tab data
    When I click tab "hair-transplant"
    # Then I can see loading icon
    Then Tab "hair-transplant" is active
    Given Wait for fetch data
    # Then I do not see loading icon
    And I can see tab "hair-transplant" content
    Given Fake admin ajax api get "about-bosley" tab data
    When I click tab "about-bosley"
    # Then I can see loading icon
    Then Tab "about-bosley" is active
    Given Wait for fetch data
    # Then I do not see loading icon
    And I can see tab "about-bosley" content
    Given Fake admin ajax api get "cost-financing" tab data
    When I click tab "cost-financing"
    # Then I can see loading icon
    Then Tab "cost-financing" is active
    Given Wait for fetch data
    # Then I do not see loading icon
    And I can see tab "cost-financing" content
    Given Fake admin ajax api get "low-level-laser-therapy" tab data
    When I click tab "low-level-laser-therapy"
    # Then I can see loading icon
    Then Tab "low-level-laser-therapy" is active
    Given Wait for fetch data
    # Then I do not see loading icon
    And I can see tab "low-level-laser-therapy" content

  Scenario Outline: TC_FAQ​_02: Visit FAQ page, click expand/colapse QA Tab: hiển thị hoặc ẩn câu trả lời
    Given Visit "/why-bosley/faq/" #Common
    Given I scroll to Tab module section
    Given Fake admin ajax api get "hair-transplant" tab data
    When I click tab "hair-transplant"
    # Then I can see loading icon
    Then Tab "hair-transplant" is active
    Given Wait for fetch data
    # Then I do not see loading icon
    And I can see tab "hair-transplant" content
    When I click "<clickOpenSelector>" of all FAQ item
    Then I can see content of all FAQ item
    When I click "<clickCloseSelector>" of all FAQ item
    Then I do not see content of all FAQ item
    Examples:
      | clickOpenSelector | clickCloseSelector |
      | icon +            | icon -             |
      | icon +            | title              |
      | title             | icon -             |
      | title             | title              |