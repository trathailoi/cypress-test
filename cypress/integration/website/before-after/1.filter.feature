Feature: Filter

  Background:
    Given Visit "/results/before-after-gallery-men" #Common
    And I must see list Before After Gallery Men have "66" items

  Scenario Outline: TC_BeforeAfterFilter_01: filter Before After Gallery by PROCEDURE and PRODUCT
    When I click filter on the right side
    Then I must see an expanded filter section
    When I choose option "<option>" to filter
    And I click Apply Filters button
    Then I must see a collapsed filter section
    And I see filter option "<option>" show in headline
    And Url query produce = "<option>" is added
    And I must see list Before After Gallery Men have "<countItem>" items
    Examples:
      | option              | countItem |
      | FUE                 | 25        |
      | FUT                 | 31        |
      | SMP                 | 12        |
      | Eyebrow Restoration | 0         |
      | LLLT                | 20        |
      | PRP                 | 0         |
      | BosleyMD​            | 26        |
      | BosleyRx​            | 20        |
      | BioGraft​            | 0         |

  Scenario: TC_BeforeAfterFilter_02: reset filter Before After Gallery 
    Given I click filter on the right side
    Then I must see an expanded filter section
    When I choose option "FUE" to filter 
    When I choose option "FUT" to filter
    When I choose option "SMP" to filter
    When I choose option "Eyebrow" to filter
    When I choose option "LLLT" to filter
    When I choose option "PRP" to filter
    When I choose option "BosleyMD​" to filter
    When I choose option "BosleyRx​" to filter
    When I choose option "BioGraft​" to filter
    And I click Apply Filters button
    Then I must see a collapsed filter section
    And I see filter option "FUE" show in headline
    And I see filter option "FUT" show in headline
    And I see filter option "SMP" show in headline
    And I see filter option "Eyebrow" show in headline
    And I see filter option "LLLT" show in headline
    And I see filter option "PRP" show in headline
    And I see filter option "BosleyMD​" show in headline
    And I see filter option "BosleyRx​" show in headline
    And I see filter option "BioGraft​" show in headline
    And Url query produce = "FUE" is added
    And Url query produce = "FUT" is added
    And Url query produce = "SMP" is added
    And Url query produce = "Eyebrow" is added
    And Url query produce = "LLLT" is added
    And Url query produce = "PRP" is added
    And Url query produce = "BosleyMD​" is added
    And Url query produce = "BosleyRx​" is added
    And Url query produce = "BioGraft​" is added
    When I click filter on the right side
    And I click Reset Filters button
    Then I must see a collapsed filter section
    And Url query produce = "FUE" is removed
    And Url query produce = "FUT" is removed
    And Url query produce = "SMP" is removed
    And Url query produce = "Eyebrow" is removed
    And Url query produce = "LLLT" is removed
    And Url query produce = "PRP" is removed
    And Url query produce = "BosleyMD​" is removed
    And Url query produce = "BosleyRx​" is removed
    And Url query produce = "BioGraft​" is removed
    And I do not see applied filters headline
    And I must see list Before After Gallery Men have "66" items
    When I click filter on the right side
    Then I must see an expanded filter section
    Then All option is not checked

  Scenario Outline: TC_BeforeAfterFilter_03: remove filter Before After Gallery 
    Given I click filter on the right side
    Then I must see an expanded filter section
    When I choose option "FUE" to filter
    When I choose option "FUT" to filter
    When I choose option "SMP" to filter
    When I choose option "Eyebrow" to filter
    When I choose option "LLLT" to filter
    When I choose option "PRP" to filter
    When I choose option "BosleyMD​" to filter
    When I choose option "BosleyRx​" to filter
    When I choose option "BioGraft​" to filter
    And I click Apply Filters button
    Then I must see a collapsed filter section
    And I see filter option "FUE" show in headline
    And I see filter option "FUT" show in headline
    And I see filter option "SMP" show in headline
    And I see filter option "Eyebrow" show in headline
    And I see filter option "LLLT" show in headline
    And I see filter option "PRP" show in headline
    And I see filter option "BosleyMD​" show in headline
    And I see filter option "BosleyRx​" show in headline
    And I see filter option "BioGraft​" show in headline
    And Url query produce = "FUE" is added
    And Url query produce = "FUT" is added
    And Url query produce = "SMP" is added
    And Url query produce = "Eyebrow" is added
    And Url query produce = "LLLT" is added
    And Url query produce = "PRP" is added
    And Url query produce = "BosleyMD​" is added
    And Url query produce = "BosleyRx​" is added
    And Url query produce = "BioGraft​" is added
    When I click x icon at filter option "FUE"
    And Url query produce = "FUE" is removed
    When I click x icon at filter option "FUT"
    And Url query produce = "FUT" is removed
    When I click x icon at filter option "SMP"
    And Url query produce = "SMP" is removed
    When I click x icon at filter option "Eyebrow"
    And Url query produce = "Eyebrow" is removed
    When I click x icon at filter option "LLLT"
    And Url query produce = "LLLT" is removed
    When I click x icon at filter option "PRP"
    And Url query produce = "PRP" is removed
    When I click x icon at filter option "BosleyMD​"
    And Url query produce = "BosleyMD​" is removed
    When I click x icon at filter option "BosleyRx​"
    And Url query produce = "BosleyRx​" is removed
    When I click x icon at filter option "BioGraft​"
    And Url query produce = "BioGraft​" is removed
    And I do not see applied filters headline
    And I must see list Before After Gallery Men have "66" items
    When I click filter on the right side
    Then I must see an expanded filter section
    Then All option is not checked