Feature: Search Result Page

	Background:
		Given Visit "/search-result/" #Common	

	Scenario Outline: TC_SearchResult_01: Visit search result page, input keyword & press enter & click Show More
		When Input "<keyword>" on search box
		And Press enter on keyboard
		Then I must see list results have "Website pages" section have "6" items
		And I must see list results have "Blog Posts" section have "6" items
		Given Fake data load more "Website pages" and "still have" more items
		When I click Show More button on "Website pages" section
		Given Wait for load more
		Then I must see list results have "Website pages" section have "12" items
		And I must see Show More button on "Website pages" section
		Given Fake data load more "Blog Posts" and "still have" more items
		When I click Show More button on "Blog Posts" section
		Given Wait for load more
		Then I must see list results have "Blog Posts" section have "12" items
		And I must see Show More button on "Blog Posts" section
		Given Fake data load more "Website pages" and "no" more items
		When I click Show More button on "Website pages" section
		Given Wait for load more
		Then I must see list results have "Website pages" section have "18" items
		And I must not see Show More button on "Website pages" section
		Given Fake data load more "Blog Posts" and "no" more items
		When I click Show More button on "Blog Posts" section
		Given Wait for load more
		Then I must see list results have "Blog Posts" section have "18" items
		And I must not see Show More button on "Blog Posts" section
		Examples:
			| keyword |
			| hair    |

	Scenario Outline: TC_SearchResult_02: Visit search result page, input keyword & click Icon Search & click Show More
		When Input "<keyword>" on search box
		And Click Search icon on search box
		Then I must see list results have "Website pages" section have "6" items
		And I must see list results have "Blog Posts" section have "6" items
		Given Fake data load more "Website pages" and "still have" more items
		When I click Show More button on "Website pages" section
		Given Wait for load more
		Then I must see list results have "Website pages" section have "12" items
		And I must see Show More button on "Website pages" section
		Given Fake data load more "Blog Posts" and "still have" more items
		When I click Show More button on "Blog Posts" section
		Given Wait for load more
		Then I must see list results have "Blog Posts" section have "12" items
		And I must see Show More button on "Blog Posts" section
		Given Fake data load more "Website pages" and "no" more items
		When I click Show More button on "Website pages" section
		Given Wait for load more
		Then I must see list results have "Website pages" section have "18" items
		And I must not see Show More button on "Website pages" section
		Given Fake data load more "Blog Posts" and "no" more items
		When I click Show More button on "Blog Posts" section
		Given Wait for load more
		Then I must see list results have "Blog Posts" section have "18" items
		And I must not see Show More button on "Blog Posts" section
		Examples:
			| keyword |
			| hair    |

	Scenario Outline: TC_SearchResult_03: Visit search result page, click View all featured offers
		When I click View All Offer​s
		Then I must see popup expand at right-side
		Then I can scroll content​ at popup expand
		When I click click "<clickSelector>"
		Then Popup expand is closed
		Examples:
			| clickSelector             |
			| close button at top-right |
			| outside                   |