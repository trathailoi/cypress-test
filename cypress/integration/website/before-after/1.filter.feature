Feature: Filter

  Background:
    Given Visit "https://bosley-develop.box.carbon8test.com/results/before-after-gallery-men" #Common
    Given I must see list before after have "66" items

  Scenario Outline: TC_Filter_01: filter before after success
    Given I click filter in right side
    Then Filter div is expand
    When I choose option "<option>"
    And I click Apply Filters button
    Then Filter div is collapse
    And I see filter option "<option>" show in headline
    Given I must see list before after have "<countItem>" items
    Examples:
      | option              | countItem |
      | FUE                 | 20        |
      | FUT                 | 21        |
      | SMP                 | 6         |
      | Eyebrow Restoration | 20        |
      | LLLT                | 20        |
      | PRP                 | 0         |
      | BosleyMD​            | 26        |
      | BosleyRx​            | 20        |
      | BioGraft​            | 0         |

  Scenario Outline: TC_Filter_02: reset filter before after
    Given I click filter in right side
    Then Filter div is expand
    When I choose option "<option>"
    And I click Apply Filters button
    Then Filter div is collapse
    And I see filter option "<option>" show in headline
    Given I must see list before after have "<countItem>" items
    When I click filter in right side
    And I click Reset Filters button
    Then Filter div is collapse
    And I do not see filter option "<option>" show in headline
    Given I must see list before after have "66" items
    When I click filter in right side
    Then Filter div is expand
    Then All option is not checked
    Examples:
      | option              | countItem |
      | FUE                 | 20        |
      | FUT                 | 21        |
      | SMP                 | 6         |
      | Eyebrow Restoration | 20        |
      | LLLT                | 20        |
      | PRP                 | 0         |
      | BosleyMD​            | 26        |
      | BosleyRx​            | 20        |
      | BioGraft​            | 0         |

  Scenario Outline: TC_Filter_03: remove filter before after
    Given I click filter in right side
    Then Filter div is expand
    When I choose option "<option>"
    And I click Apply Filters button
    Then Filter div is collapse
    And I see filter option "<option>" show in headline
    Given I must see list before after have "<countItem>" items
    When I click x icon at filter option "<option>"
    Given I must see list before after have "66" items
    When I click filter in right side
    Then Filter div is expand
    Then Option "<option>" is not checked
    Examples:
      | option              | countItem |
      | FUE                 | 20        |
      | FUT                 | 21        |
      | SMP                 | 6         |
      | Eyebrow Restoration | 20        |
      | LLLT                | 20        |
      | PRP                 | 0         |
      | BosleyMD​            | 26        |
      | BosleyRx​            | 20        |
      | BioGraft​            | 0         |