Feature: Location Page - Share Api

  Scenario: TC_Location_01: Visit Location Page: Allow alert popup and show location (fake)
    Given Visit Location Page and fake location
    Given I scroll to map section
    Then I must see my location refill on searchbox
    And I must see the distance in miles and sort from nearest to farthest

  Scenario: TC_Location_02: Visit Location Page: Block alert popup and find location (not fake)
    Given Visit "/locations" #Common
    Given I scroll to map section
		Then I must see list location sort alphabet by name
    And I can't see the distance in miles

	Scenario: TC_Location_03: Visit Location Page: Click 1 location ở list và zoom marker hiển thị ở map
    Given Visit "/locations" #Common
    Given I scroll to map section
    Given Wait for map loaded
		When I click location at "1" place in the list
    And I must see location "1" is zoom on a map
    When I click location at "2" place in the list
    And I must see location "2" is zoom on a map
    When I click location at "3" place in the list
    And I must see location "3" is zoom on a map
    When I click location at "4" place in the list
    And I must see location "4" is zoom on a map
    When I click location at "5" place in the list
    And I must see location "5" is zoom on a map
    When I click location at "50" place in the list
    And I must see location "50" is zoom on a map
    When I click location at "73" place in the list
    And I must see location "73" is zoom on a map
    When I click location at "20" place in the list
    And I must see location "20" is zoom on a map
    When I click location at "34" place in the list
    And I must see location "34" is zoom on a map
    When I click location at "1" place in the list
    And I must see location "1" is zoom on a map

	Scenario: TC_Location_04: Visit Location Page: Click zoom marker hiển thị ở map và active location tương ứng
    Given Visit "/locations" #Common
    Given I scroll to map section
    Given Wait for map loaded
		When I click marker at place "1" on map
    And I must see this location is active on the list
    When I click marker at place "2" on map
    And I must see this location is active on the list
    When I click marker at place "3" on map
    And I must see this location is active on the list
    When I click marker at place "4" on map
    And I must see this location is active on the list
    When I click marker at place "5" on map
    And I must see this location is active on the list
    When I click marker at place "50" on map
    And I must see this location is active on the list
    When I click marker at place "73" on map
    And I must see this location is active on the list
    When I click marker at place "20" on map
    And I must see this location is active on the list
    When I click marker at place "34" on map
    And I must see this location is active on the list
    When I click marker at place "1" on map
    And I must see this location is active on the list

	Scenario: TC_Location_05: Visit Location Page: input address để search location
    Given Visit "/locations" #Common
    Given I scroll to map section
    Given Wait for map loaded
		When I input "Vietnam" on search box
    Then I must see the suggest list of search "Vietnam" by Google
		When I select 1 address on the suggest list
		Then I must see the distance in miles and sort from nearest to farthest
		And I must see this address is zoom on a map
