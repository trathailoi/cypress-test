Feature: Location reviews

  Scenario: TC_Location_Reviews_01: Load more
    Given Visit "https://bosley-develop.box.carbon8test.com/locations/beverly-hills/" #Common
    Given I scroll to Review Section
    Then I must see list review have "10" items
    Given Fake api load more with show load more is "true"
    When I click load more
    Then I see loading icon and button load more is disabled
    Given Wait for api load more
    Then I do not see loading icon and button load more is active
    Then I must see list review have "20" items
    And I must see load more button
    Given Fake api load more with show load more is "false"
    When I click load more
    Then I see loading icon and button load more is disabled
    Given Wait for api load more
    Then I do not see loading icon and button load more is active
    Then I must see list review have "30" items
    And I do not see load more button
