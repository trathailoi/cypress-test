Feature: Before After - load more

  Scenario: TC_BeforeAfter_LoadMore_01: Load page hiện 8 hình, click load more => show thêm 8 item
  Given Visit "/results/before-after-gallery-men" #Common
  Given I scroll to Before-After​ section
  Then I must see list Before After Gallery Men have "8" items
  When I click load more
  Then I must see list Before After Gallery Men have "16" items
  And I must see load more button
  When I click load more
  Then I must see list Before After Gallery Men have "24" items
  And I must see load more button
  When I click load more
  Then I must see list Before After Gallery Men have "32" items
  And I must see load more button
  When I click load more
  Then I must see list Before After Gallery Men have "40" items
  And I must see load more button
  When I click load more
  Then I must see list Before After Gallery Men have "48" items
  And I must see load more button
  When I click load more
  Then I must see list Before After Gallery Men have "56" items
  And I must see load more button
  When I click load more
  Then I must see list Before After Gallery Men have "64" items
  And I must see load more button
  When I click load more
  Then I must see list Before After Gallery Men have "66" items
  And I must not see load more button