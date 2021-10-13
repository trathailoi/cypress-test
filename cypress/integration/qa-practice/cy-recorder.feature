Feature: Website
	
	Scenario: TC_01: Search on navigation bar: check direct and result
		Given I visit website and search keyword
		Then I must redirect search page with list result

	Scenario: TC_02: Search on navigation bar: check direct and result
		Given I visit Scheduler page
		Then I must see Default Banner and Disclaimer