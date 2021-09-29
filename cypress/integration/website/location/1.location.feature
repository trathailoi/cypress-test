Feature: Location Page - Share Api

	# list location assert 73 locations tất cả nha
  Scenario: TC_Location_01: Visit Location Page: Allow alert popup and show location (fake)
    Given Visit Location Page and fake location
    Then I must see my location refill on searchbox
    And I must see the distance in miles and sort from nearest to farthest

  # Scenario: TC_Location_02: Visit Location Page: Block alert popup and find location (not fake)
  #   Given Visit "https://bosley-develop.box.carbon8test.com/locations" #Common
	# 	Then I must see list location sort alphabet by name
  #   And I can't see the distance in miles

	# Scenario: TC_Location_03: Visit Location Page: Click 1 location ở list và zoom marker hiển thị ở map
  #   Given Visit "https://bosley-develop.box.carbon8test.com/locations" #Common
	# 	When I click 1 location on the list
  #   And I must see this location is zoom on a map

	# Scenario: TC_Location_04: Visit Location Page: Click zoom marker hiển thị ở map và active location tương ứng
  #   Given Visit "https://bosley-develop.box.carbon8test.com/locations" #Common
	# 	When I click 1 location on a map
  #   And I must see this location is active on the list

	# Scenario: TC_Location_05: Visit Location Page: input address để search location
  #   Given Visit "https://bosley-develop.box.carbon8test.com/locations" #Common
	# 	When I input address on search box
  #   Then I must see the suggest list of Google
	# 	When I select 1 address on the suggest list
	# 	Then I must see the distance in miles and sort from nearest to farthest
	# 	And I must see this address is zoom on a map
