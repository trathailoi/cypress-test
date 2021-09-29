Feature: Search Result Page

	Background:
		Given Visit "https://bosley-develop.box.carbon8test.com/search-result/" #Common

	# Scenario Outline: TC_SearchResult_01: Visit search result page, input keyword & press enter but don't select options => show error message
	# 	When Input "<keyword>" on search box
	# 	And Press enter on keyboard
	# 	Then I can not submit form and I see error message
	# 	Examples:
	# 		| keyword |
	# 		| hair    |

	Scenario Outline: TC_SearchResult_02: Visit search result page, input keyword & press enter & filter list results by sections Website Page & Blog Posts
		When I check "Website Page" options
		When I check "Blog Posts" options
		When Input "<keyword>" on search box
		And Press enter on keyboard
		Then I must see list results have "Website page" section
		And I must see list results have "Blog Posts" section
		When I uncheck "Website Page" options
		Then I must see list results have "Blog Posts" section
		And I don't see list results have "Website Page" section
		And I can't uncheck "Blog Posts" options
		Given Wait "3000" ms
		When I uncheck "Blog Posts" options
		Then I must see list results have "Website page" section
		And I don't see list results have "Blog Posts" section
		And I can't uncheck "Website Page" options
		Examples:
			| keyword |
			| hair    |

	# Scenario Outline: TC_SearchResult_03: Visit search result page, input keyword & click Icon Search & filter list results by sections Website Page & Blog Posts
	# 	When I check "Website Page" options
	# 	When I check "Blog Posts" options
	# 	When Input "<keyword>" on search box
	# 	And Click Search icon on search box
	# 	Then I must see list results have "Website page" section
	# 	And I must see list results have "Blog Posts" section
	# 	When I uncheck "Website Page" options
	# 	Then I must see list results have "Blog Posts" section
	# 	And I don't see list results have "Website Page" section
	# 	And I can't uncheck "Blog Posts" options
	# 	When I uncheck "Blog Posts" options
	# 	Then I must see list results have "Website page" section
	# 	And I don't see list results have "Blog Posts" section
	# 	And I can't uncheck "Website Page" options
	# 	Examples:
	# 		| keyword |
	# 		| hair    |

	# Scenario Outline: TC_SearchResult_03: Visit search result page, input keyword & press enter & click Show More
	# 	When I check "Website Page" options
	# 	When I check "Blog Posts" options
	# 	When Input "<keyword>" on search box
	# 	And Press enter on keyboard
	# 	Then I must see list results have "Website page" section
	# 	And I must see list results have "Blog Posts" section
	# 	When I click Show More button on "Website Page" section
	# 	Then I must see list results have more 6 items on "Website Page" section
	# 	When I click Show More button on "Blog Posts" section
	# 	Then I must see list results have more 6 items on "Blog Posts" section
	# 	Examples:
	# 		| keyword |
	# 		| hair    |

	# Scenario Outline: TC_SearchResult_04: Visit search result page, input keyword & click Icon Search & click Show More
	# 	When I check "Website Page" options
	# 	When I check "Blog Posts" options
	# 	When Input "<keyword>" on search box
	# 	And Click Search icon on search box
	# 	Then I must see list results have "Website page" section
	# 	And I must see list results have "Blog Posts" section
	# 	When I click Show More button on "Website Page" section
	# 	Then I must see list results have more 6 items on "Website Page" section
	# 	When I click Show More button on "Blog Posts" section
	# 	Then I must see list results have more 6 items on "Blog Posts" section
	# 	Examples:
	# 		| keyword |
	# 		| hair    |

	# Scenario: TC_SearchResult_05: Visit search result page, click View all featured offers
	# 	# Scenario này chị copy giống Scenario Outline: TC_ViewOffer_01 nhen Thắng, e xem sửa chỗ nào thì sửa rồi xóa comment này nha
	# 	When I click View All Offer​s
	# 	Then I must see popup expand at right-side
	# 	Then I can scroll content​ at popup expand
	# 	When I click click "<clickSelector>"
	# 	Then Popup expand is closed
	# 	Examples:
	# 		| clickSelector             |
	# 		| close button at top-right |
	# 		| outside                   |