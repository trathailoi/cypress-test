Feature: FAQ Feature - Tab

  Scenario: TC_FAQ​_01: Visit FAQ page, click switch Tab: hiển thị list QA tương ứng với từng Tab
    Given Visit "https://bosley-develop.box.carbon8test.com/why-bosley/faq/" #Common
    Given I scroll to Tab module section
    Given Fake admin ajax api get "general" tab data
    When I click tab "general"
    # Then I can see loading icon
    Then Tab "general" is active
    Given Wait for fetch data
    # Then I do not see loading icon
    And I can see tab "general" content
    Given Fake admin ajax api get "procedure" tab data
    When I click tab "procedure"
    # Then I can see loading icon
    Then Tab "procedure" is active
    Given Wait for fetch data
    # Then I do not see loading icon
    And I can see tab "procedure" content
    Given Fake admin ajax api get "cost-financing" tab data
    When I click tab "cost-financing"
    # Then I can see loading icon
    Then Tab "cost-financing" is active
    Given Wait for fetch data
    # Then I do not see loading icon
    And I can see tab "cost-financing" content
    Given Fake admin ajax api get "revitalizer" tab data
    When I click tab "revitalizer"
    # Then I can see loading icon
    Then Tab "revitalizer" is active
    Given Wait for fetch data
    # Then I do not see loading icon
    And I can see tab "revitalizer" content

  Scenario Outline: TC_FAQ​_02: Visit FAQ page, click expand/colapse QA Tab: hiển thị hoặc ẩn câu trả lời
    Given Visit "https://bosley-develop.box.carbon8test.com/why-bosley/faq/" #Common
    Given I scroll to Tab module section
    Given Fake admin ajax api get "general" tab data
    When I click tab "general"
    # Then I can see loading icon
    Then Tab "general" is active
    Given Wait for fetch data
    # Then I do not see loading icon
    And I can see tab "general" content
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