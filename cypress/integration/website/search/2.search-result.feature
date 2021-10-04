Feature: Search Result Page

	Background:
		Given Visit "/search-result/" #Common	

	Scenario Outline: TC_SearchResult_01: Visit search result page, input keyword & press enter & click Show More
		When Input "<keyword>" on search box
		And Press enter on keyboard
		Then I must see list results have "Website page" section
		And I must see list results have "Blog Posts" section
		When I click Show More button on "Website Page" section
		Then I must see list results have more 6 items on "Website Page" section
		When I click Show More button on "Blog Posts" section
		Then I must see list results have more 6 items on "Blog Posts" section
		Examples:
			| keyword |
			| hair    |

	Scenario Outline: TC_SearchResult_02: Visit search result page, input keyword & click Icon Search & click Show More
		When Input "<keyword>" on search box
		And Click Search icon on search box
		Then I must see list results have "Website page" section
		And I must see list results have "Blog Posts" section
		When I click Show More button on "Website Page" section
		Then I must see list results have more 6 items on "Website Page" section
		When I click Show More button on "Blog Posts" section
		Then I must see list results have more 6 items on "Blog Posts" section
		Examples:
			| keyword |
			| hair    |

	Scenario: TC_SearchResult_03: Visit search result page, click View all featured offers
		# Scenario này chị copy giống Scenario Outline: TC_ViewOffer_01 nhen Thắng, e xem sửa chỗ nào thì sửa rồi xóa comment này nha
		When I click View All Offer​s
		Then I must see popup expand at right-side
		Then I can scroll content​ at popup expand
		When I click click "<clickSelector>"
		Then Popup expand is closed
		Examples:
			| clickSelector             |
			| close button at top-right |
			| outside                   |