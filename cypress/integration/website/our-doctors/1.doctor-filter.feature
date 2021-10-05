Feature: Filter Our Doctor

  Background:
    Given Visit "/why-bosley/our-doctors/" #Common
    And I must see list Bosley Doctors have "33" items

  Scenario: TC_DoctorFilter_01: filter Bosley Doctors by Location
    When I click filter on the right side
    Then I must see the dropdown displayed
    When I choose option "Atlanta" to filter
    Then I must see the dropdown closed
    And I must see list Bosley Doctors have "2" items
    When I click filter on the right side
    Then I must see the dropdown displayed
    When I choose option "Beverly Hills" to filter
    Then I must see the dropdown closed
    And I must see list Bosley Doctors have "3" items
    When I click filter on the right side
    Then I must see the dropdown displayed
    When I choose option "Filter by Location" to filter
    Then I must see the dropdown closed
    And I must see list Bosley Doctors have "33" items