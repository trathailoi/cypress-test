Feature: Filter

  Background:
    Given Visit "https://bosley-develop.box.carbon8test.com/results/before-after-gallery-men" #Common
    And I must see list before after have "82" items

  Scenario Outline: TC_Before_After_Filter_01: filter before after success
    Given I click filter in right side
    Then Filter div is expand
    When I choose option "<option>"
    And I click Apply Filters button
    Then Filter div is collapse
    And I see filter option "<option>" show in headline
    And Url query produce = "<option>" is added
    And I must see list before after have "<countItem>" items
    Examples:
      | option              | countItem |
      | FUE                 | 24        |
      | FUT                 | 25        |
      | SMP                 | 18        |
      | Eyebrow Restoration | 25        |
      | LLLT                | 24        |
      | PRP                 | 3         |
      | BosleyMD​            | 39        |
      | BosleyRx​            | 20        |
      | BioGraft​            | 0         |

  Scenario: TC_Before_After_Filter_02: reset filter before after
    Given I click filter in right side
    Then Filter div is expand
    When I choose option "FUE" 
    When I choose option "FUT" 
    When I choose option "SMP" 
    When I choose option "Eyebrow" 
    When I choose option "LLLT" 
    When I choose option "PRP" 
    When I choose option "BosleyMD​" 
    When I choose option "BosleyRx​" 
    When I choose option "BioGraft​" 
    And I click Apply Filters button
    Then Filter div is collapse
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
    When I click filter in right side
    And I click Reset Filters button
    Then Filter div is collapse
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
    And I must see list before after have "82" items
    When I click filter in right side
    Then Filter div is expand
    Then All option is not checked

  Scenario Outline: TC_Before_After_Filter_03: remove filter before after
    Given I click filter in right side
    Then Filter div is expand
    When I choose option "FUE" 
    When I choose option "FUT" 
    When I choose option "SMP" 
    When I choose option "Eyebrow" 
    When I choose option "LLLT" 
    When I choose option "PRP" 
    When I choose option "BosleyMD​" 
    When I choose option "BosleyRx​" 
    When I choose option "BioGraft​" 
    And I click Apply Filters button
    Then Filter div is collapse
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
    And I must see list before after have "82" items
    When I click filter in right side
    Then Filter div is expand
    Then All option is not checked