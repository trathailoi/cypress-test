Feature: Scheduler with valid banner param, invalid crmid param, valid crmid cookie
	Check TH URL có params chứa key/value MATCH với key/value trong CMS, SFID không hợp lệ, Cookies đã có SFID

	Background: Scheduler Page
		Given I want to remove Cookie #Common

	Scenario: TC6_01: Check TH URL có params chứa key/value MATCH với key/value trong CMS, SFID không hợp lệ, Cookies đã có SFID
		Given I set cookie SFID valid
		Given I open Scheduler page with valid banner param, invalid crmid
		Then I can see About you form #CommonPhase1
		And I must see Banner and Disclaimer match with banner value in params

	Scenario Outline: TC6_02: Pass TC6_01 -> Submit form About You #POSITIVE
		Given I set cookie SFID valid
		Given I open Scheduler page with valid banner param, invalid crmid
		Then I can see About you form #CommonPhase1
		And I must see Banner and Disclaimer match with banner value in params
		Given Fake Admin Ajax Api with "fullDropdown" data
		When I enter new user with name is "<firstName>" "<lastName>" "<email>" "<phone>" "<street>" "<zipcode>" "<gender>" #CommonPhase1
		And I submit Next Step button at About you form #CommonPhase1
		Given Wait for Admin Ajax "1" times #Common
		Given Wait for Admin Ajax "2" times #Common
		Then I must see Location form
		And I must see Banner and Disclaimer match with banner value in params
		Examples:
      | firstName | lastName | email                | phone        | street | zipcode | gender |
      | Sen       | Vo       | sen.vo@9thwonder.com | 786-416-5792 | Test   | 91356   | Woman  |

	Scenario Outline: TC6_03: Pass TC6_01 -> Submit form About You > zipcode/email không valid #NEGATIVE
		Given I set cookie SFID valid
		Given I open Scheduler page with valid banner param, invalid crmid
		Then I can see About you form #CommonPhase1
		And I must see Banner and Disclaimer match with banner value in params
		Given Fake Admin Ajax Api with "fullDropdown" data
		When I enter new user with name is "<firstName>" "<lastName>" "<email>" "<phone>" "<street>" "<zipcode>" "<gender>" #CommonPhase1
		And I submit Next Step button at About you form #CommonPhase1
		Then I can see About you form #CommonPhase1
		And I must see Banner and Disclaimer match with banner value in params
		Then I must see validate field has red box-border
		Examples:
      | firstName | lastName | email                  | phone        | street             | zipcode | gender |
      | Sen       | Vo       | sen.vo                 | 786-416-5792 | Test               | 11111   | Woman  |
      | Julian    | Jones    |                        | 786-416-5794 | 1962 Rinehart Road |         | Man    |
      | Julian    | Jones    | mymail                 | 786-416-5794 | 1962 Rinehart Road | 0       | Man    |
      | Julian    | Jones    | mymail@@               | 786-416-5794 | 1962 Rinehart Road | 123456  | Man    |
      | Julian    | Jones    | mymail.ourearth.com    | 786-416-5794 | 1962 Rinehart Road | 91356   | Man    |
      | Julian    | Jones    | mymail@.com.my         | 786-416-5794 | 1962 Rinehart Road | 91356   | Man    |
      | Julian    | Jones    | @you.me.net            | 786-416-5794 | 1962 Rinehart Road | 91356   | Man    |
      | Julian    | Jones    | mymail123@gmail.b      | 786-416-5794 | 1962 Rinehart Road | 91356   | Man    |
      | Julian    | Jones    | mymail@.org.org        | 786-416-5794 | 1962 Rinehart Road | 91356   | Man    |
      | Julian    | Jones    | .mymail@mysite.org     | 786-416-5794 | 1962 Rinehart Road | 91356   | Man    |
      | Julian    | Jones    | mymail()*@gmail.com    | 786-416-5794 | 1962 Rinehart Road | 91356   | Man    |
      | Julian    | Jones    | mymail..1234@yahoo.com | 786-416-5794 | 1962 Rinehart Road | 91356   | Man    |

	Scenario Outline: TC6_04: Pass TC6_02 -> Ở Tab Location, Có data từ SF trả về tương ứng với zipcode của user cho In Person và  Video Consult luôn luôn hiển thị #POSITIVE
		Given I set cookie SFID valid
		Given I open Scheduler page with valid banner param, invalid crmid
		Then I can see About you form #CommonPhase1
		And I must see Banner and Disclaimer match with banner value in params
		Given Fake Admin Ajax Api with "fullDropdown" data
		When I enter new user with name is "<firstName>" "<lastName>" "<email>" "<phone>" "<street>" "<zipcode>" "<gender>" #CommonPhase1
		And I submit Next Step button at About you form #CommonPhase1
		Given Wait for Admin Ajax "1" times #Common
		Given Wait for Admin Ajax "2" times #Common
		Then I must see Location form
		And I must see Banner and Disclaimer match with banner value in params
		Then On Location tab, I must see list valid locations have "1" item
		And On Location tab, I must see Video Consult box have "2" item
		And I must see Previous Button
		And I must see Next Button
		Examples:
      | firstName | lastName | email                | phone        | street | zipcode | gender |
      | Sen       | Vo       | sen.vo@9thwonder.com | 786-416-5792 | Test   | 91356   | Woman  |

	Scenario Outline: TC6_05: Pass TC6_02 -> Ở tab Location không có location nào tương ứng với Zipcode #NEGATIVE
		Given I set cookie SFID valid
		Given I open Scheduler page with valid banner param, invalid crmid
		Then I can see About you form #CommonPhase1
		And I must see Banner and Disclaimer match with banner value in params
		Given Fake Admin Ajax Api with "emptyDropdown" data
		When I enter new user with name is "<firstName>" "<lastName>" "<email>" "<phone>" "<street>" "<zipcode>" "<gender>" #CommonPhase1
		And I submit Next Step button at About you form #CommonPhase1
		Given Wait for Admin Ajax "1" times #Common
		Given Wait for Admin Ajax "2" times #Common
		Then I must see Location form
		And I must see Banner and Disclaimer match with banner value in params
		Then On Location tab, I don't see Location list
		And On Location tab, I must see Video Consult box have "2" item
		And I must see Previous Button
		And I must see Next Button
		Examples:
      | firstName | lastName | email                | phone        | street | zipcode | gender |
      | Sen       | Vo       | sen.vo@9thwonder.com | 786-416-5792 | Test   | 91356   | Woman  |

	Scenario Outline: TC6_06: Pass TC6_02 -> Ở tab Location hiện box Instant Video:(có data)(slot>1)(5mins<=Time<=30mins) #POSITIVE
		Given I set cookie SFID valid
		Given I open Scheduler page with valid banner param, invalid crmid
		Then I can see About you form #CommonPhase1
		And I must see Banner and Disclaimer match with banner value in params
		Given Fake Admin Ajax Api with "fullDropdown" data
		When I enter new user with name is "<firstName>" "<lastName>" "<email>" "<phone>" "<street>" "<zipcode>" "<gender>" #CommonPhase1
		And I submit Next Step button at About you form #CommonPhase1
		Given Wait for Admin Ajax "1" times #Common
		Given Wait for Admin Ajax "2" times #Common
		Then I must see Location form
		And I must see Banner and Disclaimer match with banner value in params
		And The selected location has slot of today > 1 which time I access has condition with next slot 5 mins <= Time <= 30mins
		And I must see Instant Video
		And I must see Previous Button
		And I must see Next Button
		Examples:
      | firstName | lastName | email                | phone        | street | zipcode | gender |
      | Sen       | Vo       | sen.vo@9thwonder.com | 786-416-5792 | Test   | 91356   | Woman  |

	Scenario Outline: TC6_07: Pass TC6_02 -> Ở tab Location Không hiện box Instant Video:(không có data) #NEGATIVE
		Given I set cookie SFID valid
		Given I open Scheduler page with valid banner param, invalid crmid
		Then I can see About you form #CommonPhase1
		And I must see Banner and Disclaimer match with banner value in params
		Given Fake Admin Ajax Api with "emptyDropdown" data
		When I enter new user with name is "<firstName>" "<lastName>" "<email>" "<phone>" "<street>" "<zipcode>" "<gender>" #CommonPhase1
		And I submit Next Step button at About you form #CommonPhase1
		Given Wait for Admin Ajax "1" times #Common
		Given Wait for Admin Ajax "2" times #Common
		Then I must see Location form
		And I must see Banner and Disclaimer match with banner value in params
		Then On Location tab, I don't see Instant Video box
		And I must see Previous Button
		And I must see Next Button
		Examples:
      | firstName | lastName | email                | phone        | street | zipcode | gender |
      | Sen       | Vo       | sen.vo@9thwonder.com | 786-416-5792 | Test   | 91356   | Woman  |

	Scenario Outline: TC6_08: Pass TC6_02 -> Ở tab Location Không hiện box Instant Video:(có data)(Time>30mins)
		Given I set cookie SFID valid
		Given I open Scheduler page with valid banner param, invalid crmid
		Then I can see About you form #CommonPhase1
		And I must see Banner and Disclaimer match with banner value in params
		Given Fake Admin Ajax Api with "withoutInstantVideo" data
		When I enter new user with name is "<firstName>" "<lastName>" "<email>" "<phone>" "<street>" "<zipcode>" "<gender>" #CommonPhase1
		And I submit Next Step button at About you form #CommonPhase1
		Given Wait for Admin Ajax "1" times #Common
		Given Wait for Admin Ajax "2" times #Common
		Then I must see Location form
		And I must see Banner and Disclaimer match with banner value in params
		And Time user > 30 mins before start next slot
		Then On Location tab, I don't see Instant Video box
		And I must see Previous Button
		And I must see Next Button
		Examples:
      | firstName | lastName | email                | phone        | street | zipcode | gender |
      | Sen       | Vo       | sen.vo@9thwonder.com | 786-416-5792 | Test   | 91356   | Woman  |

	Scenario Outline: TC6_09: Pass TC6_02 -> Ở tab Location Không hiện box Instant Video:(có data)(slot<=1)(5mins<=Time<=30mins)
		Given I set cookie SFID valid
		Given I open Scheduler page with valid banner param, invalid crmid
		Then I can see About you form #CommonPhase1
		And I must see Banner and Disclaimer match with banner value in params
		Given Fake Admin Ajax Api with "withoutInstantVideo" data
		When I enter new user with name is "<firstName>" "<lastName>" "<email>" "<phone>" "<street>" "<zipcode>" "<gender>" #CommonPhase1
		And I submit Next Step button at About you form #CommonPhase1
		Given Wait for Admin Ajax "1" times #Common
		Given Wait for Admin Ajax "2" times #Common
		Then I must see Location form
		And I must see Banner and Disclaimer match with banner value in params
		And The selected location has slot of today <= 1 which time I access has condition with next slot 5 mins <= Time <= 30mins
		Then On Location tab, I don't see Instant Video box
		And I must see Previous Button
		And I must see Next Button
		Examples:
      | firstName | lastName | email                | phone        | street | zipcode | gender |
      | Sen       | Vo       | sen.vo@9thwonder.com | 786-416-5792 | Test   | 91356   | Woman  |

	Scenario Outline: TC6_10: Pass TC6_02 -> Ở vào tab Location Không hiện box Instant Video:(có data)(slot<=1)(5mins<=Time)
		Given I set cookie SFID valid
		Given I open Scheduler page with valid banner param, invalid crmid
		Then I can see About you form #CommonPhase1
		And I must see Banner and Disclaimer match with banner value in params
		Given Fake Admin Ajax Api with "withoutInstantVideo" data
		When I enter new user with name is "<firstName>" "<lastName>" "<email>" "<phone>" "<street>" "<zipcode>" "<gender>" #CommonPhase1
		And I submit Next Step button at About you form #CommonPhase1
		Given Wait for Admin Ajax "1" times #Common
		Given Wait for Admin Ajax "2" times #Common
		Then I must see Location form
		And I must see Banner and Disclaimer match with banner value in params
		And The selected location has slot of today <= 1 which time I access has condition with next slot has time < 5 mins
		Then On Location tab, I don't see Instant Video box
		And I must see Previous Button
		And I must see Next Button
		Examples:
      | firstName | lastName | email                | phone        | street | zipcode | gender |
      | Sen       | Vo       | sen.vo@9thwonder.com | 786-416-5792 | Test   | 91356   | Woman  |

	Scenario Outline: TC6_11: Pass TC6_02 -> Ở tab Location hiện box Instant Video:(có data)(5mins<Time)
		Given I set cookie SFID valid
		Given I open Scheduler page with valid banner param, invalid crmid
		Then I can see About you form #CommonPhase1
		And I must see Banner and Disclaimer match with banner value in params
		Given Fake Admin Ajax Api with "fullDropdown" data
		When I enter new user with name is "<firstName>" "<lastName>" "<email>" "<phone>" "<street>" "<zipcode>" "<gender>" #CommonPhase1
		And I submit Next Step button at About you form #CommonPhase1
		Given Wait for Admin Ajax "1" times #Common
		Given Wait for Admin Ajax "2" times #Common
		Then I must see Location form
		And I must see Banner and Disclaimer match with banner value in params
		And The selected location has slot which time I access has condition with next slot has time < 5 mins
		And I must see Instant Video
		And I must see Previous Button
		And I must see Next Button
		Examples:
      | firstName | lastName | email                | phone        | street | zipcode | gender |
      | Sen       | Vo       | sen.vo@9thwonder.com | 786-416-5792 | Test   | 91356   | Woman  |

	Scenario Outline: TC6_12: Pass TC6_04 -> Chọn một location -> Tìm thấy các slot trong vòng 15 ngày
		Given I set cookie SFID valid
		Given I open Scheduler page with valid banner param, invalid crmid
		Then I can see About you form #CommonPhase1
		And I must see Banner and Disclaimer match with banner value in params
		Given Fake Admin Ajax Api with "fullDropdown" data
		When I enter new user with name is "<firstName>" "<lastName>" "<email>" "<phone>" "<street>" "<zipcode>" "<gender>" #CommonPhase1
		And I submit Next Step button at About you form #CommonPhase1
		Given Wait for Admin Ajax "1" times #Common
		Given Wait for Admin Ajax "2" times #Common
		Then I must see Location form
		And I must see Banner and Disclaimer match with banner value in params
		Then On Location tab, I must see list valid locations have "1" item
		And On Location tab, I must see Video Consult box have "2" item
		And I must see Previous Button
		And I must see Next Button
		Then I must see Location form
		When I select first item in list Location
		And I submit Next Step button at Location Tab
		Given Wait for Admin Ajax "3" times #Common
		Then I must see selected location info
		Then On Date-Time Tab, I must see list date available
		When I select date
		Then I must see list times
		Examples:
      | firstName | lastName | email                | phone        | street | zipcode | gender |
      | Sen       | Vo       | sen.vo@9thwonder.com | 786-416-5792 | Test   | 91356   | Woman  |

	Scenario Outline: TC6_13: Pass TC6_04 -> Chọn một Video Consult -> Tìm thấy các slot trong vòng 15 ngày
		Given I set cookie SFID valid
		Given I open Scheduler page with valid banner param, invalid crmid
		Then I can see About you form #CommonPhase1
		And I must see Banner and Disclaimer match with banner value in params
		Given Fake Admin Ajax Api with "fullDropdown" data
		When I enter new user with name is "<firstName>" "<lastName>" "<email>" "<phone>" "<street>" "<zipcode>" "<gender>" #CommonPhase1
		And I submit Next Step button at About you form #CommonPhase1
		Given Wait for Admin Ajax "1" times #Common
		Given Wait for Admin Ajax "2" times #Common
		Then I must see Location form
		And I must see Banner and Disclaimer match with banner value in params
		Then On Location tab, I must see list valid locations have "1" item
		And On Location tab, I must see Video Consult box have "2" item
		And I must see Previous Button
		And I must see Next Button
		Then I must see Location form
		When I select first item in list Video Consult
		And I submit Next Step button at Location Tab
		Given Wait for Admin Ajax "3" times #Common
		Then On Date-Time Tab, I must see list date available
		When I select date
		Then I must see dropdown timezone with default value "PT"
		And I must see list times
		Examples:
      | firstName | lastName | email                | phone        | street | zipcode | gender |
      | Sen       | Vo       | sen.vo@9thwonder.com | 786-416-5792 | Test   | 91356   | Woman  |

	Scenario Outline: TC6_14: Pass TC6_13 -> Chọn một Video Consult -> Tìm thấy các slot trong vòng 15 ngày, user switch timezone
		Given I set cookie SFID valid
		Given I open Scheduler page with valid banner param, invalid crmid
		Then I can see About you form #CommonPhase1
		And I must see Banner and Disclaimer match with banner value in params
		Given Fake Admin Ajax Api with "fullDropdownHaveSelectTimezone" data
		When I enter new user with name is "<firstName>" "<lastName>" "<email>" "<phone>" "<street>" "<zipcode>" "<gender>" #CommonPhase1
		And I submit Next Step button at About you form #CommonPhase1
		Given Wait for Admin Ajax "1" times #Common
		Given Wait for Admin Ajax "2" times #Common
		Then I must see Location form
		And I must see Banner and Disclaimer match with banner value in params
		Then On Location tab, I must see list valid locations have "1" item
		And On Location tab, I must see Video Consult box have "2" item
		And I must see Previous Button
		And I must see Next Button
		Then I must see Location form
		When I select first item in list Video Consult
		And I submit Next Step button at Location Tab
		Given Wait for Admin Ajax "3" times #Common
		Then On Date-Time Tab, I must see list date available
		When I select date
		Then I must see dropdown timezone with default value "PT"
		And I must see list times
		When I select timezone with "<timezone>" value
		Given Wait for Admin Ajax "4" times #Common
		Then On Date-Time Tab, I must see list date available
		When I select date
		Then I must see list times
		Examples:
      | firstName | lastName | email                | phone        | street | zipcode | gender | timezone |
      | Sen       | Vo       | sen.vo@9thwonder.com | 786-416-5792 | Test   | 91356   | Woman  | MT      |
      | Sen       | Vo       | sen.vo@9thwonder.com | 786-416-5792 | Test   | 91356   | Woman  | CT      |
      | Sen       | Vo       | sen.vo@9thwonder.com | 786-416-5792 | Test   | 91356   | Woman  | ET      |

	Scenario Outline: TC6_15: Pass TC6_04 -> chọn location không có slot trong vòng 15 ngày: show error
		Given I set cookie SFID valid
		Given I open Scheduler page with valid banner param, invalid crmid
		Then I can see About you form #CommonPhase1
		And I must see Banner and Disclaimer match with banner value in params
		Given Fake Admin Ajax Api with "fullDropdownUnAvailableDateTime" data
		When I enter new user with name is "<firstName>" "<lastName>" "<email>" "<phone>" "<street>" "<zipcode>" "<gender>" #CommonPhase1
		And I submit Next Step button at About you form #CommonPhase1
		Given Wait for Admin Ajax "1" times #Common
		Given Wait for Admin Ajax "2" times #Common
		Then I must see Location form
		And I must see Banner and Disclaimer match with banner value in params
		Then On Location tab, I must see list valid locations have "1" item
		And On Location tab, I must see Video Consult box have "2" item
		And I must see Previous Button
		And I must see Next Button
		Then I must see Location form
		When I select first item in list Location
		And I submit Next Step button at Location Tab
		Given Wait for Admin Ajax "3" times #Common
		Then I must see selected location info
		And On Date-Time Tab, I see error message, button Call Now, links
		Examples:
      | firstName | lastName | email                | phone        | street | zipcode | gender |
      | Sen       | Vo       | sen.vo@9thwonder.com | 786-416-5792 | Test   | 91356   | Woman  |

	Scenario Outline: TC6_16: Pass TC6_04 -> chọn video consult không có slot trong vòng 15 ngày: show error
		Given I set cookie SFID valid
		Given I open Scheduler page with valid banner param, invalid crmid
		Then I can see About you form #CommonPhase1
		And I must see Banner and Disclaimer match with banner value in params
		Given Fake Admin Ajax Api with "fullDropdownUnAvailableDateTime" data
		When I enter new user with name is "<firstName>" "<lastName>" "<email>" "<phone>" "<street>" "<zipcode>" "<gender>" #CommonPhase1
		And I submit Next Step button at About you form #CommonPhase1
		Given Wait for Admin Ajax "1" times #Common
		Given Wait for Admin Ajax "2" times #Common
		Then I must see Location form
		And I must see Banner and Disclaimer match with banner value in params
		Then On Location tab, I must see list valid locations have "1" item
		And On Location tab, I must see Video Consult box have "2" item
		And I must see Previous Button
		And I must see Next Button
		Then I must see Location form
		When I select first item in list Video Consult
		And I submit Next Step button at Location Tab
		Given Wait for Admin Ajax "3" times #Common
		Then On Date-Time Tab, I see error message, button Call Now, links
		Examples:
      | firstName | lastName | email                | phone        | street | zipcode | gender |
      | Sen       | Vo       | sen.vo@9thwonder.com | 786-416-5792 | Test   | 91356   | Woman  |

	Scenario Outline: TC6_17_01: Pass TC6_12 -> chọn location có slot trong vòng 15 ngày tiếp theo: hiển thị ngày giờ available, click load more => show available date
		Given I set cookie SFID valid
		Given I open Scheduler page with valid banner param, invalid crmid
		Then I can see About you form #CommonPhase1
		And I must see Banner and Disclaimer match with banner value in params
		Given Fake Admin Ajax Api with "fullDropdownHaveLoadMore" data
		When I enter new user with name is "<firstName>" "<lastName>" "<email>" "<phone>" "<street>" "<zipcode>" "<gender>" #CommonPhase1
		And I submit Next Step button at About you form #CommonPhase1
		Given Wait for Admin Ajax "1" times #Common
		Given Wait for Admin Ajax "2" times #Common
		Then I must see Location form
		And I must see Banner and Disclaimer match with banner value in params
		Then On Location tab, I must see list valid locations have "1" item
		And On Location tab, I must see Video Consult box have "2" item
		And I must see Previous Button
		And I must see Next Button
		Then I must see Location form
		When I select first item in list Location
		And I submit Next Step button at Location Tab
		Given Wait for Admin Ajax "3" times #Common
		Then I must see selected location info
		Then On Date-Time Tab, I must see list date available
		When I select date
		Then I must see list times
		When I click button next slide in list date
		Then I see button load more dates
		And I click load more dates
		Given Wait for Admin Ajax "4" times #Common
		Then On Date-Time Tab, I must see list date available have "32" item
		And I see button load more dates
		Examples:
      | firstName | lastName | email                | phone        | street | zipcode | gender |
      | Sen       | Vo       | sen.vo@9thwonder.com | 786-416-5792 | Test   | 91356   | Woman  |

	Scenario Outline: TC6_17_02: Pass TC6_13 -> Chọn một Video Consult -> Tìm thấy các slot trong vòng 15 ngày
		Given I set cookie SFID valid
		Given I open Scheduler page with valid banner param, invalid crmid
		Then I can see About you form #CommonPhase1
		And I must see Banner and Disclaimer match with banner value in params
		Given Fake Admin Ajax Api with "fullDropdownHaveLoadMore" data
		When I enter new user with name is "<firstName>" "<lastName>" "<email>" "<phone>" "<street>" "<zipcode>" "<gender>" #CommonPhase1
		And I submit Next Step button at About you form #CommonPhase1
		Given Wait for Admin Ajax "1" times #Common
		Given Wait for Admin Ajax "2" times #Common
		Then I must see Location form
		And I must see Banner and Disclaimer match with banner value in params
		Then On Location tab, I must see list valid locations have "1" item
		And On Location tab, I must see Video Consult box have "2" item
		And I must see Previous Button
		And I must see Next Button
		Then I must see Location form
		When I select first item in list Video Consult
		And I submit Next Step button at Location Tab
		Given Wait for Admin Ajax "3" times #Common
		Then On Date-Time Tab, I must see list date available
		When I select date
		Then I must see dropdown timezone with default value "PT"
		And I must see list times
		When I click button next slide in list date
		Then I see button load more dates
		And I click load more dates
		Given Wait for Admin Ajax "4" times #Common
		Then On Date-Time Tab, I must see list date available have "32" item
		And I see button load more dates
		Examples:
      | firstName | lastName | email                | phone        | street | zipcode | gender |
      | Sen       | Vo       | sen.vo@9thwonder.com | 786-416-5792 | Test   | 91356   | Woman  |

	Scenario Outline: TC6_18_01: Pass TC6_12 -> chọn location không có slot trong vòng 15 ngày tiếp theo
		Given I set cookie SFID valid
		Given I open Scheduler page with valid banner param, invalid crmid
		Then I can see About you form #CommonPhase1
		And I must see Banner and Disclaimer match with banner value in params
		Given Fake Admin Ajax Api with "fullDropdownNotHaveLoadMore" data
		When I enter new user with name is "<firstName>" "<lastName>" "<email>" "<phone>" "<street>" "<zipcode>" "<gender>" #CommonPhase1
		And I submit Next Step button at About you form #CommonPhase1
		Given Wait for Admin Ajax "1" times #Common
		Given Wait for Admin Ajax "2" times #Common
		Then I must see Location form
		And I must see Banner and Disclaimer match with banner value in params
		Then On Location tab, I must see list valid locations have "1" item
		And On Location tab, I must see Video Consult box have "2" item
		And I must see Previous Button
		And I must see Next Button
		Then I must see Location form
		When I select first item in list Location
		And I submit Next Step button at Location Tab
		Given Wait for Admin Ajax "3" times #Common
		Then I must see selected location info
		Then On Date-Time Tab, I must see list date available
		When I select date
		Then I must see list times
		When I click button next slide in list date
		Then I see button load more dates
		And I click load more dates
		Given Wait for Admin Ajax "4" times #Common
		Then On Date-Time Tab, I must see list date available have "32" item
		When I click button next slide in list date
		When I click button next slide in list date
		And I click load more dates
		Given Wait for Admin Ajax "5" times #Common
		When I click button next slide in list date
		Then I must see No more dates availables
		Examples:
      | firstName | lastName | email                | phone        | street | zipcode | gender |
      | Sen       | Vo       | sen.vo@9thwonder.com | 786-416-5792 | Test   | 91356   | Woman  |

	Scenario Outline: TC6_18_02: Pass TC6_13 -> chọn Video Consult không có slot trong vòng 15 ngày tiếp theo
		Given I set cookie SFID valid
		Given I open Scheduler page with valid banner param, invalid crmid
		Then I can see About you form #CommonPhase1
		And I must see Banner and Disclaimer match with banner value in params
		Given Fake Admin Ajax Api with "fullDropdownNotHaveLoadMore" data
		When I enter new user with name is "<firstName>" "<lastName>" "<email>" "<phone>" "<street>" "<zipcode>" "<gender>" #CommonPhase1
		And I submit Next Step button at About you form #CommonPhase1
		Given Wait for Admin Ajax "1" times #Common
		Given Wait for Admin Ajax "2" times #Common
		Then I must see Location form
		And I must see Banner and Disclaimer match with banner value in params
		Then On Location tab, I must see list valid locations have "1" item
		And On Location tab, I must see Video Consult box have "2" item
		And I must see Previous Button
		And I must see Next Button
		Then I must see Location form
		When I select first item in list Video Consult
		And I submit Next Step button at Location Tab
		Given Wait for Admin Ajax "3" times #Common
		Then On Date-Time Tab, I must see list date available
		When I select date
		Then I must see dropdown timezone with default value "PT"
		And I must see list times
		When I click button next slide in list date
		Then I see button load more dates
		And I click load more dates
		Given Wait for Admin Ajax "4" times #Common
		Then On Date-Time Tab, I must see list date available have "32" item
		When I click button next slide in list date
		When I click button next slide in list date
		And I click load more dates
		Given Wait for Admin Ajax "5" times #Common
		When I click button next slide in list date
		Then I must see No more dates availables
		Examples:
      | firstName | lastName | email                | phone        | street | zipcode | gender |
      | Sen       | Vo       | sen.vo@9thwonder.com | 786-416-5792 | Test   | 91356   | Woman  |

	Scenario Outline: TC6_19: Pass TC6_12 -> Show info date/time location tương ứng với những gì user chọn
		Given I set cookie SFID valid
		Given I open Scheduler page with valid banner param, invalid crmid
		Then I can see About you form #CommonPhase1
		And I must see Banner and Disclaimer match with banner value in params
		Given Fake Admin Ajax Api with "fullDropdown" data
		When I enter new user with name is "<firstName>" "<lastName>" "<email>" "<phone>" "<street>" "<zipcode>" "<gender>" #CommonPhase1
		And I submit Next Step button at About you form #CommonPhase1
		Given Wait for Admin Ajax "1" times #Common
		Given Wait for Admin Ajax "2" times #Common
		Then I must see Location form
		And I must see Banner and Disclaimer match with banner value in params
		Then On Location tab, I must see list valid locations have "1" item
		And On Location tab, I must see Video Consult box have "2" item
		And I must see Previous Button
		And I must see Next Button
		Then I must see Location form
		When I select first item in list Location
		And I submit Next Step button at Location Tab
		Given Wait for Admin Ajax "3" times #Common
		Then I must see selected location info
		Then On Date-Time Tab, I must see list date available
		When I select date
		Then I must see list times
		When I select first item in list time
		Then I can see book appoinment info and "location" info
		Examples:
      | firstName | lastName | email                | phone        | street | zipcode | gender |
      | Sen       | Vo       | sen.vo@9thwonder.com | 786-416-5792 | Test   | 91356   | Woman  |

	Scenario Outline: TC6_20: Pass TC6_19 -> book thành công
		Given I set cookie SFID valid
		Given I open Scheduler page with valid banner param, invalid crmid
		Then I can see About you form #CommonPhase1
		And I must see Banner and Disclaimer match with banner value in params
		Given Fake Admin Ajax Api with "fullDropdown" data
		When I enter new user with name is "<firstName>" "<lastName>" "<email>" "<phone>" "<street>" "<zipcode>" "<gender>" #CommonPhase1
		And I submit Next Step button at About you form #CommonPhase1
		Given Wait for Admin Ajax "1" times #Common
		Given Wait for Admin Ajax "2" times #Common
		Then I must see Location form
		And I must see Banner and Disclaimer match with banner value in params
		Then On Location tab, I must see list valid locations have "1" item
		And On Location tab, I must see Video Consult box have "2" item
		And I must see Previous Button
		And I must see Next Button
		Then I must see Location form
		When I select first item in list Location
		And I submit Next Step button at Location Tab
		Given Wait for Admin Ajax "3" times #Common
		Then I must see selected location info
		Then On Date-Time Tab, I must see list date available
		When I select date
		Then I must see list times
		When I select first item in list time
		Then I can see book appoinment info and "location" info
		When I submit Book Appointment
		Then After call Api "4" times, I must see book appointment of "location" thank you page
		Examples:
      | firstName | lastName | email                | phone        | street | zipcode | gender |
      | Sen       | Vo       | sen.vo@9thwonder.com | 786-416-5792 | Test   | 91356   | Woman  |

	Scenario Outline: TC6_21: Pass TC6_14 -> Show thêm vùng Consult language & Observation​ consent dưới btn book appointment
		Given I set cookie SFID valid
		Given I open Scheduler page with valid banner param, invalid crmid
		Then I can see About you form #CommonPhase1
		And I must see Banner and Disclaimer match with banner value in params
		Given Fake Admin Ajax Api with "fullDropdownHaveSelectTimezone" data
		When I enter new user with name is "<firstName>" "<lastName>" "<email>" "<phone>" "<street>" "<zipcode>" "<gender>" #CommonPhase1
		And I submit Next Step button at About you form #CommonPhase1
		Given Wait for Admin Ajax "1" times #Common
		Given Wait for Admin Ajax "2" times #Common
		Then I must see Location form
		And I must see Banner and Disclaimer match with banner value in params
		Then On Location tab, I must see list valid locations have "1" item
		And On Location tab, I must see Video Consult box have "2" item
		And I must see Previous Button
		And I must see Next Button
		Then I must see Location form
		When I select first item in list Video Consult
		And I submit Next Step button at Location Tab
		Given Wait for Admin Ajax "3" times #Common
		Then On Date-Time Tab, I must see list date available
		When I select date
		Then I must see dropdown timezone with default value "PT"
		And I must see list times
		When I select timezone with "<timezone>" value
		Given Wait for Admin Ajax "4" times #Common
		Then On Date-Time Tab, I must see list date available
		When I select date
		Then I must see list times
		When I select first item in list time
		Then I can see book appoinment info and "video" info
		And I can see consult language and observation consent
		Examples:
      | firstName | lastName | email                | phone        | street | zipcode | gender | timezone |
      | Sen       | Vo       | sen.vo@9thwonder.com | 786-416-5792 | Test   | 91356   | Woman  | MT      |
      | Sen       | Vo       | sen.vo@9thwonder.com | 786-416-5792 | Test   | 91356   | Woman  | CT      |
      | Sen       | Vo       | sen.vo@9thwonder.com | 786-416-5792 | Test   | 91356   | Woman  | ET      |

	Scenario Outline: TC6_22: Pass TC6_21 -> chọn option trong Consult language & Observation​ consent > click button "Book Appointment" > book thành công
		Given I set cookie SFID valid
		Given I open Scheduler page with valid banner param, invalid crmid
		Then I can see About you form #CommonPhase1
		And I must see Banner and Disclaimer match with banner value in params
		Given Fake Admin Ajax Api with "fullDropdownHaveSelectTimezone" data
		When I enter new user with name is "<firstName>" "<lastName>" "<email>" "<phone>" "<street>" "<zipcode>" "<gender>" #CommonPhase1
		And I submit Next Step button at About you form #CommonPhase1
		Given Wait for Admin Ajax "1" times #Common
		Given Wait for Admin Ajax "2" times #Common
		Then I must see Location form
		And I must see Banner and Disclaimer match with banner value in params
		Then On Location tab, I must see list valid locations have "1" item
		And On Location tab, I must see Video Consult box have "2" item
		And I must see Previous Button
		And I must see Next Button
		Then I must see Location form
		When I select first item in list Video Consult
		And I submit Next Step button at Location Tab
		Given Wait for Admin Ajax "3" times #Common
		Then On Date-Time Tab, I must see list date available
		When I select date
		Then I must see dropdown timezone with default value "PT"
		And I must see list times
		When I select timezone with "<timezone>" value
		Given Wait for Admin Ajax "4" times #Common
		Then On Date-Time Tab, I must see list date available
		When I select date
		Then I must see list times
		When I select first item in list time
		Then I can see book appoinment info and "video" info
		And I can see consult language and observation consent
		Then I choose consult language "<consultLanguage>" and observation consent "<observationConcent>"
		When I submit Book Appointment
		Then After call Api "5" times, I must see book appointment of "video" thank you page
		Examples:
      | firstName | lastName | email                | phone        | street | zipcode | gender | timezone | consultLanguage | observationConcent |
      | Sen       | Vo       | sen.vo@9thwonder.com | 786-416-5792 | Test   | 91356   | Woman  | MT      | English         | yes                |
      | Sen       | Vo       | sen.vo@9thwonder.com | 786-416-5792 | Test   | 91356   | Woman  | MT      | Spanish         | yes                |
      | Sen       | Vo       | sen.vo@9thwonder.com | 786-416-5792 | Test   | 91356   | Woman  | MT      | English         | no                 |
      | Sen       | Vo       | sen.vo@9thwonder.com | 786-416-5792 | Test   | 91356   | Woman  | MT      | Spanish         | no                 |

	Scenario Outline: TC6_23_01: Pass TC6_19 -> Chọn 1 location -> click button "Book Appointment" > book không thành công vì slot đã được book (404 resources unavailable)
		Given I set cookie SFID valid
		Given I open Scheduler page with valid banner param, invalid crmid
		Then I can see About you form #CommonPhase1
		And I must see Banner and Disclaimer match with banner value in params
		Given Fake Admin Ajax Api with "fullDropdownBookFailed" data
		When I enter new user with name is "<firstName>" "<lastName>" "<email>" "<phone>" "<street>" "<zipcode>" "<gender>" #CommonPhase1
		And I submit Next Step button at About you form #CommonPhase1
		Given Wait for Admin Ajax "1" times #Common
		Given Wait for Admin Ajax "2" times #Common
		Then I must see Location form
		And I must see Banner and Disclaimer match with banner value in params
		Then On Location tab, I must see list valid locations have "1" item
		And On Location tab, I must see Video Consult box have "2" item
		And I must see Previous Button
		And I must see Next Button
		Then I must see Location form
		When I select first item in list Location
		And I submit Next Step button at Location Tab
		Given Wait for Admin Ajax "3" times #Common
		Then I must see selected location info
		Then On Date-Time Tab, I must see list date available
		When I select date
		Then I must see list times
		When I select first item in list time
		Then I can see book appoinment info and "location" info
		When I submit Book Appointment
		Then After call Api "4" times, I book appointment failed
		Examples:
      | firstName | lastName | email                | phone        | street | zipcode | gender |
      | Sen       | Vo       | sen.vo@9thwonder.com | 786-416-5792 | Test   | 91356   | Woman  |

	Scenario Outline: TC6_23_02: Pass TC6_21 -> Chọn Video Consult -> user click button "Book Appointment" > book không thành công vì slot đã được book (404 resources unavailable)
		Given I set cookie SFID valid
		Given I open Scheduler page with valid banner param, invalid crmid
		Then I can see About you form #CommonPhase1
		And I must see Banner and Disclaimer match with banner value in params
		Given Fake Admin Ajax Api with "fullDropdownHaveSelectTimezoneBookFailed" data
		When I enter new user with name is "<firstName>" "<lastName>" "<email>" "<phone>" "<street>" "<zipcode>" "<gender>" #CommonPhase1
		And I submit Next Step button at About you form #CommonPhase1
		Given Wait for Admin Ajax "1" times #Common
		Given Wait for Admin Ajax "2" times #Common
		Then I must see Location form
		And I must see Banner and Disclaimer match with banner value in params
		Then On Location tab, I must see list valid locations have "1" item
		And On Location tab, I must see Video Consult box have "2" item
		And I must see Previous Button
		And I must see Next Button
		Then I must see Location form
		When I select first item in list Video Consult
		And I submit Next Step button at Location Tab
		Given Wait for Admin Ajax "3" times #Common
		Then On Date-Time Tab, I must see list date available
		When I select date
		Then I must see dropdown timezone with default value "PT"
		And I must see list times
		When I select timezone with "<timezone>" value
		Given Wait for Admin Ajax "4" times #Common
		Then On Date-Time Tab, I must see list date available
		When I select date
		Then I must see list times
		When I select first item in list time
		Then I can see book appoinment info and "video" info
		And I can see consult language and observation consent
		When I submit Book Appointment
		Then After call Api "5" times, I book appointment failed
		Examples:
    | firstName | lastName | email                | phone        | street | zipcode | gender | timezone |
    | Sen       | Vo       | sen.vo@9thwonder.com | 786-416-5792 | Test   | 91356   | Woman  | MT      |

	Scenario Outline: TC6_24_01: Pass TC6_19 -> Chọn 1 location ->  click button "Book Appointment" > book không thành công vì lý do gì đó khác status 404 resources unavailable
		Given I set cookie SFID valid
		Given I open Scheduler page with valid banner param, invalid crmid
		Then I can see About you form #CommonPhase1
		And I must see Banner and Disclaimer match with banner value in params
		Given Fake Admin Ajax Api with "fullDropdown" data
		When I enter new user with name is "<firstName>" "<lastName>" "<email>" "<phone>" "<street>" "<zipcode>" "<gender>" #CommonPhase1
		And I submit Next Step button at About you form #CommonPhase1
		Given Wait for Admin Ajax "1" times #Common
		Given Wait for Admin Ajax "2" times #Common
		Then I must see Location form
		And I must see Banner and Disclaimer match with banner value in params
		Then On Location tab, I must see list valid locations have "1" item
		And On Location tab, I must see Video Consult box have "2" item
		And I must see Previous Button
		And I must see Next Button
		Then I must see Location form
		When I select first item in list Location
		And I submit Next Step button at Location Tab
		Given Wait for Admin Ajax "3" times #Common
		Then I must see selected location info
		Then On Date-Time Tab, I must see list date available
		When I select date
		Then I must see list times
		When I select first item in list time
		Then I can see book appoinment info and "location" info
		When I submit Book Appointment
		Then After call Api "4" times, I must see book appointment of "location" thank you page
		Examples:
      | firstName | lastName | email                | phone        | street | zipcode | gender |
      | Sen       | Vo       | sen.vo@9thwonder.com | 786-416-5792 | Test   | 91356   | Woman  |

	Scenario Outline: TC6_24_02: Pass TC6_21 -> Chọn Video Consult -> user click button "Book Appointment" > book không thành công vì lý do gì đó khác status 404 resources unavailable
		Given I set cookie SFID valid
		Given I open Scheduler page with valid banner param, invalid crmid
		Then I can see About you form #CommonPhase1
		And I must see Banner and Disclaimer match with banner value in params
		Given Fake Admin Ajax Api with "fullDropdownHaveSelectTimezone" data
		When I enter new user with name is "<firstName>" "<lastName>" "<email>" "<phone>" "<street>" "<zipcode>" "<gender>" #CommonPhase1
		And I submit Next Step button at About you form #CommonPhase1
		Given Wait for Admin Ajax "1" times #Common
		Given Wait for Admin Ajax "2" times #Common
		Then I must see Location form
		And I must see Banner and Disclaimer match with banner value in params
		Then On Location tab, I must see list valid locations have "1" item
		And On Location tab, I must see Video Consult box have "2" item
		And I must see Previous Button
		And I must see Next Button
		Then I must see Location form
		When I select first item in list Video Consult
		And I submit Next Step button at Location Tab
		Given Wait for Admin Ajax "3" times #Common
		Then On Date-Time Tab, I must see list date available
		When I select date
		Then I must see dropdown timezone with default value "PT"
		And I must see list times
		When I select timezone with "<timezone>" value
		Given Wait for Admin Ajax "4" times #Common
		Then On Date-Time Tab, I must see list date available
		When I select date
		Then I must see list times
		When I select first item in list time
		Then I can see book appoinment info and "video" info
		And I can see consult language and observation consent
		When I submit Book Appointment
		Then After call Api "5" times, I must see book appointment of "video" thank you page
		Examples:
      | firstName | lastName | email                | phone        | street | zipcode | gender | timezone |
      | Sen       | Vo       | sen.vo@9thwonder.com | 786-416-5792 | Test   | 91356   | Woman  | MT      |

	Scenario Outline: TC6_25_01: Pass TC6_06 -> Chọn Instant Video button > book thành công
		Given I set cookie SFID valid
		Given I open Scheduler page with valid banner param, invalid crmid
		Then I can see About you form #CommonPhase1
		And I must see Banner and Disclaimer match with banner value in params
		Given Fake Admin Ajax Api with "fullDropdownHaveConfirm" data
		When I enter new user with name is "<firstName>" "<lastName>" "<email>" "<phone>" "<street>" "<zipcode>" "<gender>" #CommonPhase1
		And I submit Next Step button at About you form #CommonPhase1
		Given Wait for Admin Ajax "1" times #Common
		Given Wait for Admin Ajax "2" times #Common
		Then I must see Location form
		And I must see Banner and Disclaimer match with banner value in params
		And The selected location has slot of today > 1 which time I access has condition with next slot 5 mins <= Time <= 30mins
		And I must see Instant Video
		And I must see Previous Button
		And I must see Next Button
		When I select Instant Video box
		Then I must see Popup Confirm Timezone
		When I click Confirm in Popup Confirm Timezone
		Given Wait for Admin Ajax "3" times #Common
		Then Now I have been redirected to bosley doxy page have query "<firstName>" and "<lastName>"
		Examples:
      | firstName | lastName | email                | phone        | street | zipcode | gender |
      | Sen       | Vo       | sen.vo@9thwonder.com | 786-416-5792 | Test   | 91356   | Woman  |

	Scenario Outline: TC6_25_02: Pass TC6_11 -> Chọn Instant Video button > book thành công
		Given I set cookie SFID valid
		Given I open Scheduler page with valid banner param, invalid crmid
		Then I can see About you form #CommonPhase1
		And I must see Banner and Disclaimer match with banner value in params
		Given Fake Admin Ajax Api with "fullDropdownHaveConfirm" data
		When I enter new user with name is "<firstName>" "<lastName>" "<email>" "<phone>" "<street>" "<zipcode>" "<gender>" #CommonPhase1
		And I submit Next Step button at About you form #CommonPhase1
		Given Wait for Admin Ajax "1" times #Common
		Given Wait for Admin Ajax "2" times #Common
		Then I must see Location form
		And I must see Banner and Disclaimer match with banner value in params
		And The selected location has slot which time I access has condition with next slot has time < 5 mins
		And I must see Instant Video
		And I must see Previous Button
		And I must see Next Button
		When I select Instant Video box
		Then I must see Popup Confirm Timezone
		When I click Confirm in Popup Confirm Timezone
		Given Wait for Admin Ajax "3" times #Common
		Then Now I have been redirected to bosley doxy page have query "<firstName>" and "<lastName>"
		Examples:
      | firstName | lastName | email                | phone        | street | zipcode | gender |
      | Sen       | Vo       | sen.vo@9thwonder.com | 786-416-5792 | Test   | 91356   | Woman  |

	Scenario Outline: TC6_26_01: Pass TC6_06 -> Chọn Instant Video button > book không thành công
		Given I set cookie SFID valid
		Given I open Scheduler page with valid banner param, invalid crmid
		Then I can see About you form #CommonPhase1
		And I must see Banner and Disclaimer match with banner value in params
		Given Fake Admin Ajax Api with "fullDropdownHaveConfirm" data
		When I enter new user with name is "<firstName>" "<lastName>" "<email>" "<phone>" "<street>" "<zipcode>" "<gender>" #CommonPhase1
		And I submit Next Step button at About you form #CommonPhase1
		Given Wait for Admin Ajax "1" times #Common
		Given Wait for Admin Ajax "2" times #Common
		Then I must see Location form
		And I must see Banner and Disclaimer match with banner value in params
		And The selected location has slot of today > 1 which time I access has condition with next slot 5 mins <= Time <= 30mins
		And I must see Instant Video
		And I must see Previous Button
		And I must see Next Button
		When I select Instant Video box
		Then I must see Popup Confirm Timezone
		When I click Confirm in Popup Confirm Timezone
		Given Wait for Admin Ajax "3" times #Common
		Then Now I have been redirected to bosley doxy page have query "<firstName>" and "<lastName>"
		Examples:
      | firstName | lastName | email                | phone        | street | zipcode | gender |
      | Sen       | Vo       | sen.vo@9thwonder.com | 786-416-5792 | Test   | 91356   | Woman  |

	Scenario Outline: TC6_26_02: Pass TC6_11 -> Chọn Instant Video button > book không thành công
		Given I set cookie SFID valid
		Given I open Scheduler page with valid banner param, invalid crmid
		Then I can see About you form #CommonPhase1
		And I must see Banner and Disclaimer match with banner value in params
		Given Fake Admin Ajax Api with "fullDropdownHaveConfirm" data
		When I enter new user with name is "<firstName>" "<lastName>" "<email>" "<phone>" "<street>" "<zipcode>" "<gender>" #CommonPhase1
		And I submit Next Step button at About you form #CommonPhase1
		Given Wait for Admin Ajax "1" times #Common
		Given Wait for Admin Ajax "2" times #Common
		Then I must see Location form
		And I must see Banner and Disclaimer match with banner value in params
		And The selected location has slot which time I access has condition with next slot has time < 5 mins
		And I must see Instant Video
		And I must see Previous Button
		And I must see Next Button
		When I select Instant Video box
		Then I must see Popup Confirm Timezone
		When I click Confirm in Popup Confirm Timezone
		Given Wait for Admin Ajax "3" times #Common
		Then Now I have been redirected to bosley doxy page have query "<firstName>" and "<lastName>"
		Examples:
      | firstName | lastName | email                | phone        | street | zipcode | gender |
      | Sen       | Vo       | sen.vo@9thwonder.com | 786-416-5792 | Test   | 91356   | Woman  |
