Feature: Filter Our Doctor

  Background:
    Given Visit "/why-bosley/our-doctors/" #Common
    And I must see list Bosley Doctors have "33" items

  Scenario Outline: TC_DoctorFilter_01: filter Bosley Doctors by Location
    When I click filter on the right side
    Then I must see the dropdown displayed
    When I choose option "<option>" to filter
    Then I must see the dropdown closed
    And I must see list Bosley Doctors have "<countItem>" items
    When I choose option "<option>" to filter
    Examples:
      | option              | countItem |
      | Atlanta             | 2         |
      | Beverly Hills       | 3         |
      | Filter by Location  | 33        |