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
  
  Scenario Outline: TC_BeforeAfterFilter_02: filter Before After Gallery by HAIR LOSS
    When I click filter on the right side
    Then I must see an expanded filter section
    When I choose option "<option>" of Hair Loss to filter
    And I click Apply Filters button
    Then I must see a collapsed filter section
    And I see filter option "<option>" show in headline
    And Url query produce = "<option>" is added
    And I must see list Before After Gallery Men have "<countItem>" items
    Examples:
      | option              | countItem |
      | Minimal             | 20        |
      | Moderate            | 41        |
      | Advanced            | 6        |

  Scenario: TC_BeforeAfterFilter_03: reset filter Before After Gallery 
    Given I click filter on the right side
    Then I must see an expanded filter section
    When I choose option "FUE" to filter 
    And I choose option "FUT" to filter
    And I choose option "SMP" to filter
    And I choose option "Eyebrow Restoration" to filter
    And I choose option "LLLT" to filter
    And I choose option "PRP" to filter
    And I choose option "BosleyMD​" to filter
    And I choose option "BosleyRx​" to filter
    And I choose option "BioGraft​" to filter
    And I choose option "Minimal" of Hair Loss to filter    
    And I choose option "Moderate" of Hair Loss to filter
    And I choose option "Advanced" of Hair Loss to filter
    And I click Apply Filters button
    Then I must see a collapsed filter section
    And I see filter option "FUE" show in headline
    And I see filter option "FUT" show in headline
    And I see filter option "SMP" show in headline
    And I see filter option "Eyebrow Restoration" show in headline
    And I see filter option "LLLT" show in headline
    And I see filter option "PRP" show in headline
    And I see filter option "BosleyMD​" show in headline
    And I see filter option "BosleyRx​" show in headline
    And I see filter option "BioGraft​" show in headline    
    And I see filter option "Minimal" show in headline
    And I see filter option "Moderate" show in headline
    And I see filter option "Advanced" show in headline
    And Url query produce = "FUE" is added
    And Url query produce = "FUT" is added
    And Url query produce = "SMP" is added
    And Url query produce = "Eyebrow Restoration" is added
    And Url query produce = "LLLT" is added
    And Url query produce = "PRP" is added
    And Url query produce = "BosleyMD​" is added
    And Url query produce = "BosleyRx​" is added
    And Url query produce = "BioGraft​" is added
    And Url query produce = "Minimal" is added
    And Url query produce = "Moderate" is added
    And Url query produce = "Advanced" is added
    When I click filter on the right side
    And I click Reset Filters button
    Then I must see a collapsed filter section
    And Url query produce = "FUE" is removed
    And Url query produce = "FUT" is removed
    And Url query produce = "SMP" is removed
    And Url query produce = "Eyebrow Restoration" is removed
    And Url query produce = "LLLT" is removed
    And Url query produce = "PRP" is removed
    And Url query produce = "BosleyMD​" is removed
    And Url query produce = "BosleyRx​" is removed
    And Url query produce = "BioGraft​" is removed
    And Url query produce = "Minimal" is removed
    And Url query produce = "Moderate" is removed
    And Url query produce = "Advanced" is removed
    And I do not see applied filters headline
    And I must see list Before After Gallery Men have "66" items
    When I click filter on the right side
    Then I must see an expanded filter section
    And All option is not checked

 Scenario: TC_BeforeAfterFilter_04: remove filter Before After Gallery 
    Given I click filter on the right side
    Then I must see an expanded filter section
    When I choose option "FUE" to filter
    And I choose option "FUT" to filter
    And I choose option "SMP" to filter
    And I choose option "Eyebrow Restoration" to filter
    And I choose option "LLLT" to filter
    And I choose option "PRP" to filter
    And I choose option "BosleyMD​" to filter
    And I choose option "BosleyRx​" to filter
    And I choose option "BioGraft​" to filter
    And I choose option "Minimal" of Hair Loss to filter
    And I choose option "Moderate" of Hair Loss to filter
    And I choose option "Advanced" of Hair Loss to filter
    And I click Apply Filters button
    Then I must see a collapsed filter section
    And I see filter option "FUE" show in headline
    And I see filter option "FUT" show in headline
    And I see filter option "SMP" show in headline
    And I see filter option "Eyebrow Restoration" show in headline
    And I see filter option "LLLT" show in headline
    And I see filter option "PRP" show in headline
    And I see filter option "BosleyMD​" show in headline
    And I see filter option "BosleyRx​" show in headline
    And I see filter option "BioGraft​" show in headline
    And I see filter option "Minimal" show in headline
    And I see filter option "Moderate" show in headline
    And I see filter option "Advanced" show in headline
    And Url query produce = "FUE" is added
    And Url query produce = "FUT" is added
    And Url query produce = "SMP" is added
    And Url query produce = "Eyebrow Restoration" is added
    And Url query produce = "LLLT" is added
    And Url query produce = "PRP" is added
    And Url query produce = "BosleyMD​" is added
    And Url query produce = "BosleyRx​" is added
    And Url query produce = "BioGraft​" is added
    And Url query produce = "Minimal" is added
    And Url query produce = "Moderate" is added
    And Url query produce = "Advanced" is added
    When I click x icon at filter option "FUE"
    Then Url query produce = "FUE" is removed
    When I click x icon at filter option "FUT"
    Then Url query produce = "FUT" is removed
    When I click x icon at filter option "SMP"
    Then Url query produce = "SMP" is removed
    When I click x icon at filter option "Eyebrow Restoration"
    Then Url query produce = "Eyebrow Restoration" is removed
    When I click x icon at filter option "LLLT"
    Then Url query produce = "LLLT" is removed
    When I click x icon at filter option "PRP"
    Then Url query produce = "PRP" is removed
    When I click x icon at filter option "BosleyMD​"
    Then Url query produce = "BosleyMD​" is removed
    When I click x icon at filter option "BosleyRx​"
    Then Url query produce = "BosleyRx​" is removed
    When I click x icon at filter option "BioGraft​"
    Then Url query produce = "BioGraft​" is removed
    When I click x icon at filter option "Minimal"
    Then Url query produce = "Minimal" is removed
    When I click x icon at filter option "Moderate"
    Then Url query produce = "Moderate" is removed
    When I click x icon at filter option "Advanced"
    Then Url query produce = "Advanced" is removed
    And I do not see applied filters headline
    And I must see list Before After Gallery Men have "66" items
    When I click filter on the right side
    Then I must see an expanded filter section
    And All option is not checked