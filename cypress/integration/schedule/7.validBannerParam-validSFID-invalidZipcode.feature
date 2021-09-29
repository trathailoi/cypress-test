Feature: Scheduler
	Check TH URL có params chứa key/value match với key/value trong CMS, SFID hợp lệ, zipcode KHÔNG HỢP LỆ

	Background: Scheduler with cookies
		Given I want to remove Cookie #Common

	Scenario: TC7_01: Check TH URL có params chứa key/value match với key/value trong CMS, SFID hợp lệ, zipcode KHÔNG HỢP LỆ
		Given Fake Admin Ajax Api with "fullDropdown" data
		Given I open Scheduler page with param has valid SFID, match key but invalid Zipcode
		Then I must see Banner and Disclaimer match with banner value in params
		And I must see Zipcode popup

	Scenario Outline: TC7_01_2: Pass TC7_01 -> Submit form change zipcode không hợp lệ
		Given Fake Admin Ajax Api with "fullDropdown" data
		Given I open Scheduler page with param has valid SFID, match key but invalid Zipcode
		Then I must see Banner and Disclaimer match with banner value in params
		And I must see Zipcode popup
		When I input invalid zipcode "<zip>"
		And I click submit button
		Then I must see validate field has red box-border
		Examples:
      | zip    |
      |        |
      | 1      |
      | 12     |
      | 123    |
      | 1234   |

	Scenario Outline: TC7_02: Pass TC7_01 -> Submit form change zipcode hợp lệ > có kết quả trả về cho In person
		Given Fake Admin Ajax Api with "fullDropdown" data
		Given I open Scheduler page with param has valid SFID, match key but invalid Zipcode
		Then I must see Banner and Disclaimer match with banner value in params
		And I must see Zipcode popup
		When I input valid zipcode "<zip>"
		And I click submit button
		Given Wait for Admin Ajax "1" times #Common
		Then I can see Location tab is active
		And I must see the first tab label is "Schedule a Free Consultation Now​"
		And I must see Banner and Disclaimer match with banner value in params
		Examples:
      | zip   |
      | 91356 |

	Scenario Outline: TC7_03: Pass TC7_02 -> Ở Tab Location, Có data từ SF trả về tương ứng với zipcode của user cho In Person và  Video Consult luôn luôn hiển thị #POSITIVE
		Given Fake Admin Ajax Api with "fullDropdown" data
		Given I open Scheduler page with param has valid SFID, match key but invalid Zipcode
		Then I must see Banner and Disclaimer match with banner value in params
		And I must see Zipcode popup
		When I input valid zipcode "<zip>"
		And I click submit button
		Given Wait for Admin Ajax "1" times #Common
		Then I can see Location tab is active
		And I must see the first tab label is "Schedule a Free Consultation Now​"
		And I must see Banner and Disclaimer match with banner value in params
		Then On Location tab, I must see list valid locations have "1" item
		And On Location tab, I must see Video Consult box have "2" item
		And I do not see Previous Button
		And I must see Next Button
		Examples:
      | zip   |
      | 91356 |

	Scenario Outline: TC7_04: Pass TC7_02 -> Ở tab Location không có location nào tương ứng với Zipcode #NEGATIVE
		Given Fake Admin Ajax Api with "emptyDropdown" data
		Given I open Scheduler page with param has valid SFID, match key but invalid Zipcode
		Then I must see Banner and Disclaimer match with banner value in params
		And I must see Zipcode popup
		When I input valid zipcode "<zip>"
		And I click submit button
		Given Wait for Admin Ajax "1" times #Common
		Then I can see Location tab is active
		And I must see the first tab label is "Schedule a Free Consultation Now​"
		And I must see Banner and Disclaimer match with banner value in params
		Then On Location tab, I don't see Location list
		And On Location tab, I must see Video Consult box have "2" item
		And I do not see Previous Button
		And I must see Next Button
		Examples:
      | zip   |
      | 91356 |

	Scenario Outline: TC7_05: Pass TC7_02 -> Ở tab Location hiện box Instant Video:(có data)(slot>1)(5mins<=Time<=30mins) #POSITIVE
		Given Fake Admin Ajax Api with "fullDropdown" data
		Given I open Scheduler page with param has valid SFID, match key but invalid Zipcode
		Then I must see Banner and Disclaimer match with banner value in params
		And I must see Zipcode popup
		When I input valid zipcode "<zip>"
		And I click submit button
		Given Wait for Admin Ajax "1" times #Common
		Then I can see Location tab is active
		And I must see the first tab label is "Schedule a Free Consultation Now​"
		And I must see Banner and Disclaimer match with banner value in params
		And The selected location has slot of today > 1 which time I access has condition with next slot 5 mins <= Time <= 30mins
		And I must see Instant Video
		And I do not see Previous Button
		And I must see Next Button
		Examples:
      | zip   |
      | 91356 |

	Scenario Outline: TC7_06: Pass TC7_02 -> Ở tab Location Không hiện box Instant Video:(không có data) #NEGATIVE
		Given Fake Admin Ajax Api with "emptyDropdown" data
		Given I open Scheduler page with param has valid SFID, match key but invalid Zipcode
		Then I must see Banner and Disclaimer match with banner value in params
		And I must see Zipcode popup
		When I input valid zipcode "<zip>"
		And I click submit button
		Given Wait for Admin Ajax "1" times #Common
		Then I can see Location tab is active
		And I must see the first tab label is "Schedule a Free Consultation Now​"
		And I must see Banner and Disclaimer match with banner value in params
		Then On Location tab, I don't see Instant Video box
		And I do not see Previous Button
		And I must see Next Button
		Examples:
      | zip   |
      | 91356 |

	Scenario Outline: TC7_07: Pass TC7_02 -> Ở tab Location Không hiện box Instant Video:(có data)(Time>30mins)
		Given Fake Admin Ajax Api with "withoutInstantVideo" data
		Given I open Scheduler page with param has valid SFID, match key but invalid Zipcode
		Then I must see Banner and Disclaimer match with banner value in params
		And I must see Zipcode popup
		When I input valid zipcode "<zip>"
		And I click submit button
		Given Wait for Admin Ajax "1" times #Common
		Then I can see Location tab is active
		And I must see the first tab label is "Schedule a Free Consultation Now​"
		And I must see Banner and Disclaimer match with banner value in params
		And Time user > 30 mins before start next slot
		Then On Location tab, I don't see Instant Video box
		And I do not see Previous Button
		And I must see Next Button
		Examples:
      | zip   |
      | 91356 |

	Scenario Outline: TC7_08: Pass TC7_02 -> Ở tab Location Không hiện box Instant Video:(có data)(slot<=1)(5mins<=Time<=30mins)
		Given Fake Admin Ajax Api with "withoutInstantVideo" data
		Given I open Scheduler page with param has valid SFID, match key but invalid Zipcode
		Then I must see Banner and Disclaimer match with banner value in params
		And I must see Zipcode popup
		When I input valid zipcode "<zip>"
		And I click submit button
		Given Wait for Admin Ajax "1" times #Common
		Then I can see Location tab is active
		And I must see the first tab label is "Schedule a Free Consultation Now​"
		And I must see Banner and Disclaimer match with banner value in params
		And The selected location has slot of today <= 1 which time I access has condition with next slot 5 mins <= Time <= 30mins
		Then On Location tab, I don't see Instant Video box
		And I do not see Previous Button
		And I must see Next Button
		Examples:
      | zip   |
      | 91356 |

	Scenario Outline: TC7_09: Pass TC7_02 -> Ở tab Location Không hiện box Instant Video:(có data)(slot<=1)(5mins<=Time)
		Given Fake Admin Ajax Api with "withoutInstantVideo" data
		Given I open Scheduler page with param has valid SFID, match key but invalid Zipcode
		Then I must see Banner and Disclaimer match with banner value in params
		And I must see Zipcode popup
		When I input valid zipcode "<zip>"
		And I click submit button
		Given Wait for Admin Ajax "1" times #Common
		Then I can see Location tab is active
		And I must see the first tab label is "Schedule a Free Consultation Now​"
		And I must see Banner and Disclaimer match with banner value in params
		And The selected location has slot of today <= 1 which time I access has condition with next slot has time < 5 mins
		Then On Location tab, I don't see Instant Video box
		And I do not see Previous Button
		And I must see Next Button
		Examples:
      | zip   |
      | 91356 |

	Scenario Outline: TC7_10: Pass TC7_02 -> Ở tab Location hiện box Instant Video:(có data)(5mins<Time)
		Given Fake Admin Ajax Api with "fullDropdown" data
		Given I open Scheduler page with param has valid SFID, match key but invalid Zipcode
		Then I must see Banner and Disclaimer match with banner value in params
		And I must see Zipcode popup
		When I input valid zipcode "<zip>"
		And I click submit button
		Given Wait for Admin Ajax "1" times #Common
		Then I can see Location tab is active
		And I must see the first tab label is "Schedule a Free Consultation Now​"
		And I must see Banner and Disclaimer match with banner value in params
		And The selected location has slot which time I access has condition with next slot has time < 5 mins
		And I must see Instant Video
		And I do not see Previous Button
		And I must see Next Button
		Examples:
      | zip   |
      | 91356 |

	Scenario Outline: TC7_11: Pass TC7_03 -> Chọn một location -> Tìm thấy các slot trong vòng 15 ngày
		Given Fake Admin Ajax Api with "fullDropdown" data
		Given I open Scheduler page with param has valid SFID, match key but invalid Zipcode
		Then I must see Banner and Disclaimer match with banner value in params
		And I must see Zipcode popup
		When I input valid zipcode "<zip>"
		And I click submit button
		Given Wait for Admin Ajax "1" times #Common
		Then I can see Location tab is active
		And I must see the first tab label is "Schedule a Free Consultation Now​"
		And I must see Banner and Disclaimer match with banner value in params
		Then On Location tab, I must see list valid locations have "1" item
		And On Location tab, I must see Video Consult box have "2" item
		And I do not see Previous Button
		And I must see Next Button
		Then I must see Location form
		When I select first item in list Location
		And I submit Next Step button at Location Tab
		Given Wait for Admin Ajax "2" times #Common
		Then I must see selected location info
		Then On Date-Time Tab, I must see list date available
		When I select date
		Then I must see list times
		Examples:
      | zip   |
      | 91356 |

	Scenario Outline: TC7_12: Pass TC7_03 -> Chọn một Video Consult -> Tìm thấy các slot trong vòng 15 ngày
		Given Fake Admin Ajax Api with "fullDropdown" data
		Given I open Scheduler page with param has valid SFID, match key but invalid Zipcode
		Then I must see Banner and Disclaimer match with banner value in params
		And I must see Zipcode popup
		When I input valid zipcode "<zip>"
		And I click submit button
		Given Wait for Admin Ajax "1" times #Common
		Then I can see Location tab is active
		And I must see the first tab label is "Schedule a Free Consultation Now​"
		And I must see Banner and Disclaimer match with banner value in params
		Then On Location tab, I must see list valid locations have "1" item
		And On Location tab, I must see Video Consult box have "2" item
		And I do not see Previous Button
		And I must see Next Button
		Then I must see Location form
		When I select first item in list Video Consult
		And I submit Next Step button at Location Tab
		Given Wait for Admin Ajax "2" times #Common
		Then On Date-Time Tab, I must see list date available
		When I select date
		Then I must see dropdown timezone with default value "PST"
		And I must see list times
		Examples:
      | zip   |
      | 91356 |

	Scenario Outline: TC7_13: Pass TC7_12 -> Chọn một Video Consult -> Tìm thấy các slot trong vòng 15 ngày, user switch timezone
		Given Fake Admin Ajax Api with "fullDropdownHaveSelectTimezone" data
		Given I open Scheduler page with param has valid SFID, match key but invalid Zipcode
		Then I must see Banner and Disclaimer match with banner value in params
		And I must see Zipcode popup
		When I input valid zipcode "<zip>"
		And I click submit button
		Given Wait for Admin Ajax "1" times #Common
		Then I can see Location tab is active
		And I must see the first tab label is "Schedule a Free Consultation Now​"
		And I must see Banner and Disclaimer match with banner value in params
		Then On Location tab, I must see list valid locations have "1" item
		And On Location tab, I must see Video Consult box have "2" item
		And I do not see Previous Button
		And I must see Next Button
		Then I must see Location form
		When I select first item in list Video Consult
		And I submit Next Step button at Location Tab
		Given Wait for Admin Ajax "2" times #Common
		Then On Date-Time Tab, I must see list date available
		When I select date
		Then I must see dropdown timezone with default value "PST"
		And I must see list times
		When I select timezone with "<timezone>" value
		Given Wait for Admin Ajax "3" times #Common
		Then On Date-Time Tab, I must see list date available
		When I select date
		Then I must see list times
		Examples:
      | zip   | timezone |
      | 91356 | MST      |
      | 91356 | CST      |
      | 91356 | EST      |

	Scenario Outline: TC7_14: Pass TC7_03 -> chọn location không có slot trong vòng 15 ngày: show error
		Given Fake Admin Ajax Api with "fullDropdownUnAvailableDateTime" data
		Given I open Scheduler page with param has valid SFID, match key but invalid Zipcode
		Then I must see Banner and Disclaimer match with banner value in params
		And I must see Zipcode popup
		When I input valid zipcode "<zip>"
		And I click submit button
		Given Wait for Admin Ajax "1" times #Common
		Then I can see Location tab is active
		And I must see the first tab label is "Schedule a Free Consultation Now​"
		And I must see Banner and Disclaimer match with banner value in params
		Then On Location tab, I must see list valid locations have "1" item
		And On Location tab, I must see Video Consult box have "2" item
		And I do not see Previous Button
		And I must see Next Button
		Then I must see Location form
		When I select first item in list Location
		And I submit Next Step button at Location Tab
		Given Wait for Admin Ajax "2" times #Common
		Then I must see selected location info
		Then On Date-Time Tab, I see error message, button Call Now, links
		Examples:
      | zip   |
      | 91356 |

	Scenario Outline: TC7_15: Pass TC7_03 -> chọn video consult không có slot trong vòng 15 ngày: show error
		Given Fake Admin Ajax Api with "fullDropdownUnAvailableDateTime" data
		Given I open Scheduler page with param has valid SFID, match key but invalid Zipcode
		Then I must see Banner and Disclaimer match with banner value in params
		And I must see Zipcode popup
		When I input valid zipcode "<zip>"
		And I click submit button
		Given Wait for Admin Ajax "1" times #Common
		Then I can see Location tab is active
		And I must see the first tab label is "Schedule a Free Consultation Now​"
		And I must see Banner and Disclaimer match with banner value in params
		Then On Location tab, I must see list valid locations have "1" item
		And On Location tab, I must see Video Consult box have "2" item
		And I do not see Previous Button
		And I must see Next Button
		Then I must see Location form
		When I select first item in list Video Consult
		And I submit Next Step button at Location Tab
		Given Wait for Admin Ajax "2" times #Common
		Then On Date-Time Tab, I see error message, button Call Now, links
		Examples:
      | zip   |
      | 91356 |

	Scenario Outline: TC7_16_01: Pass TC7_11 -> chọn location có slot trong vòng 15 ngày tiếp theo: hiển thị ngày giờ available, click load more => show available date
		Given Fake Admin Ajax Api with "fullDropdownHaveLoadMore" data
		Given I open Scheduler page with param has valid SFID, match key but invalid Zipcode
		Then I must see Banner and Disclaimer match with banner value in params
		And I must see Zipcode popup
		When I input valid zipcode "<zip>"
		And I click submit button
		Given Wait for Admin Ajax "1" times #Common
		Then I can see Location tab is active
		And I must see the first tab label is "Schedule a Free Consultation Now​"
		And I must see Banner and Disclaimer match with banner value in params
		Then On Location tab, I must see list valid locations have "1" item
		And On Location tab, I must see Video Consult box have "2" item
		And I do not see Previous Button
		And I must see Next Button
		Then I must see Location form
		When I select first item in list Location
		And I submit Next Step button at Location Tab
		Given Wait for Admin Ajax "2" times #Common
		Then I must see selected location info
		Then On Date-Time Tab, I must see list date available
		When I select date
		Then I must see list times
		When I click button next slide in list date
		Then I see button load more dates
		And I click load more dates
		Given Wait for Admin Ajax "3" times #Common
		Then On Date-Time Tab, I must see list date available have "32" item
		And I see button load more dates
		Examples:
      | zip   |
      | 91356 |

	Scenario Outline: TC7_16_02: Pass TC7_12 -> Chọn một Video Consult -> Tìm thấy các slot trong vòng 15 ngày
		Given Fake Admin Ajax Api with "fullDropdownHaveLoadMore" data
		Given I open Scheduler page with param has valid SFID, match key but invalid Zipcode
		Then I must see Banner and Disclaimer match with banner value in params
		And I must see Zipcode popup
		When I input valid zipcode "<zip>"
		And I click submit button
		Given Wait for Admin Ajax "1" times #Common
		Then I can see Location tab is active
		And I must see the first tab label is "Schedule a Free Consultation Now​"
		And I must see Banner and Disclaimer match with banner value in params
		Then On Location tab, I must see list valid locations have "1" item
		And On Location tab, I must see Video Consult box have "2" item
		And I do not see Previous Button
		And I must see Next Button
		Then I must see Location form
		When I select first item in list Video Consult
		And I submit Next Step button at Location Tab
		Given Wait for Admin Ajax "2" times #Common
		Then On Date-Time Tab, I must see list date available
		When I select date
		Then I must see dropdown timezone with default value "PST"
		And I must see list times
		When I click button next slide in list date
		Then I see button load more dates
		And I click load more dates
		Given Wait for Admin Ajax "3" times #Common
		Then On Date-Time Tab, I must see list date available have "32" item
		And I see button load more dates
		Examples:
      | zip   |
      | 91356 |

	Scenario Outline: TC7_17_01: Pass TC7_11 -> chọn location không có slot trong vòng 15 ngày tiếp theo
		Given Fake Admin Ajax Api with "fullDropdownNotHaveLoadMore" data
		Given I open Scheduler page with param has valid SFID, match key but invalid Zipcode
		Then I must see Banner and Disclaimer match with banner value in params
		And I must see Zipcode popup
		When I input valid zipcode "<zip>"
		And I click submit button
		Given Wait for Admin Ajax "1" times #Common
		Then I can see Location tab is active
		And I must see the first tab label is "Schedule a Free Consultation Now​"
		And I must see Banner and Disclaimer match with banner value in params
		Then On Location tab, I must see list valid locations have "1" item
		And On Location tab, I must see Video Consult box have "2" item
		And I do not see Previous Button
		And I must see Next Button
		Then I must see Location form
		When I select first item in list Location
		And I submit Next Step button at Location Tab
		Given Wait for Admin Ajax "2" times #Common
		Then I must see selected location info
		Then On Date-Time Tab, I must see list date available
		When I select date
		Then I must see list times
		When I click button next slide in list date
		Then I see button load more dates
		And I click load more dates
		Given Wait for Admin Ajax "3" times #Common
		Then On Date-Time Tab, I must see list date available have "32" item
		When I click button next slide in list date
		When I click button next slide in list date
		And I click load more dates
		Given Wait for Admin Ajax "4" times #Common
		When I click button next slide in list date
		Then I must see No more dates availables
		Examples:
      | zip   |
      | 91356 |

	Scenario Outline: TC7_17_02: Pass TC7_12 -> chọn Video Consult không có slot trong vòng 15 ngày tiếp theo
		Given Fake Admin Ajax Api with "fullDropdownNotHaveLoadMore" data
		Given I open Scheduler page with param has valid SFID, match key but invalid Zipcode
		Then I must see Banner and Disclaimer match with banner value in params
		And I must see Zipcode popup
		When I input valid zipcode "<zip>"
		And I click submit button
		Given Wait for Admin Ajax "1" times #Common
		Then I can see Location tab is active
		And I must see the first tab label is "Schedule a Free Consultation Now​"
		And I must see Banner and Disclaimer match with banner value in params
		Then On Location tab, I must see list valid locations have "1" item
		And On Location tab, I must see Video Consult box have "2" item
		And I do not see Previous Button
		And I must see Next Button
		Then I must see Location form
		When I select first item in list Video Consult
		And I submit Next Step button at Location Tab
		Given Wait for Admin Ajax "2" times #Common
		Then On Date-Time Tab, I must see list date available
		When I select date
		Then I must see dropdown timezone with default value "PST"
		And I must see list times
		When I click button next slide in list date
		Then I see button load more dates
		And I click load more dates
		Given Wait for Admin Ajax "3" times #Common
		Then On Date-Time Tab, I must see list date available have "32" item
		When I click button next slide in list date
		When I click button next slide in list date
		And I click load more dates
		Given Wait for Admin Ajax "4" times #Common
		When I click button next slide in list date
		Then I must see No more dates availables
		Examples:
      | zip   |
      | 91356 |

	Scenario Outline: TC7_18: Pass TC7_11 -> Show info date/time location tương ứng với những gì user chọn
		Given Fake Admin Ajax Api with "fullDropdown" data
		Given I open Scheduler page with param has valid SFID, match key but invalid Zipcode
		Then I must see Banner and Disclaimer match with banner value in params
		And I must see Zipcode popup
		When I input valid zipcode "<zip>"
		And I click submit button
		Given Wait for Admin Ajax "1" times #Common
		Then I can see Location tab is active
		And I must see the first tab label is "Schedule a Free Consultation Now​"
		And I must see Banner and Disclaimer match with banner value in params
		Then On Location tab, I must see list valid locations have "1" item
		And On Location tab, I must see Video Consult box have "2" item
		And I do not see Previous Button
		And I must see Next Button
		Then I must see Location form
		When I select first item in list Location
		And I submit Next Step button at Location Tab
		Given Wait for Admin Ajax "2" times #Common
		Then I must see selected location info
		Then On Date-Time Tab, I must see list date available
		When I select date
		Then I must see list times
		When I select first item in list time
		Then I can see book appoinment info and "location" info
		Examples:
      | zip   |
      | 91356 |

	Scenario Outline: TC7_19: Pass TC7_18 -> book thành công
		Given Fake Admin Ajax Api with "fullDropdown" data
		Given I open Scheduler page with param has valid SFID, match key but invalid Zipcode
		Then I must see Banner and Disclaimer match with banner value in params
		And I must see Zipcode popup
		When I input valid zipcode "<zip>"
		And I click submit button
		Given Wait for Admin Ajax "1" times #Common
		Then I can see Location tab is active
		And I must see the first tab label is "Schedule a Free Consultation Now​"
		And I must see Banner and Disclaimer match with banner value in params
		Then On Location tab, I must see list valid locations have "1" item
		And On Location tab, I must see Video Consult box have "2" item
		And I do not see Previous Button
		And I must see Next Button
		Then I must see Location form
		When I select first item in list Location
		And I submit Next Step button at Location Tab
		Given Wait for Admin Ajax "2" times #Common
		Then I must see selected location info
		Then On Date-Time Tab, I must see list date available
		When I select date
		Then I must see list times
		When I select first item in list time
		Then I can see book appoinment info and "location" info
		When I submit Book Appointment
		Then After call Api "3" times, I must see book appointment of "location" thank you page
		Examples:
      | zip   |
      | 91356 |

	Scenario Outline: TC7_20: Pass TC7_13 -> Show thêm vùng Consult language & Observation​ consent dưới btn book appointment
		Given Fake Admin Ajax Api with "fullDropdownHaveSelectTimezone" data
		Given I open Scheduler page with param has valid SFID, match key but invalid Zipcode
		Then I must see Banner and Disclaimer match with banner value in params
		And I must see Zipcode popup
		When I input valid zipcode "<zip>"
		And I click submit button
		Given Wait for Admin Ajax "1" times #Common
		Then I can see Location tab is active
		And I must see the first tab label is "Schedule a Free Consultation Now​"
		And I must see Banner and Disclaimer match with banner value in params
		Then On Location tab, I must see list valid locations have "1" item
		And On Location tab, I must see Video Consult box have "2" item
		And I do not see Previous Button
		And I must see Next Button
		Then I must see Location form
		When I select first item in list Video Consult
		And I submit Next Step button at Location Tab
		Given Wait for Admin Ajax "2" times #Common
		Then On Date-Time Tab, I must see list date available
		When I select date
		Then I must see dropdown timezone with default value "PST"
		And I must see list times
		When I select timezone with "<timezone>" value
		Given Wait for Admin Ajax "3" times #Common
		Then On Date-Time Tab, I must see list date available
		When I select date
		Then I must see list times
		When I select first item in list time
		Then I can see book appoinment info and "video" info
		And I can see consult language and observation consent
		Examples:
      | zip   | timezone |
      | 91356 | MST      |
      | 91356 | CST      |
      | 91356 | EST      |

	Scenario Outline: TC7_21: Pass TC7_20 -> chọn option trong Consult language & Observation​ consent > click button "Book Appointment" > book thành công
		Given Fake Admin Ajax Api with "fullDropdownHaveSelectTimezone" data
		Given I open Scheduler page with param has valid SFID, match key but invalid Zipcode
		Then I must see Banner and Disclaimer match with banner value in params
		And I must see Zipcode popup
		When I input valid zipcode "<zip>"
		And I click submit button
		Given Wait for Admin Ajax "1" times #Common
		Then I can see Location tab is active
		And I must see the first tab label is "Schedule a Free Consultation Now​"
		And I must see Banner and Disclaimer match with banner value in params
		Then On Location tab, I must see list valid locations have "1" item
		And On Location tab, I must see Video Consult box have "2" item
		And I do not see Previous Button
		And I must see Next Button
		Then I must see Location form
		When I select first item in list Video Consult
		And I submit Next Step button at Location Tab
		Given Wait for Admin Ajax "2" times #Common
		Then On Date-Time Tab, I must see list date available
		When I select date
		Then I must see dropdown timezone with default value "PST"
		And I must see list times
		When I select timezone with "<timezone>" value
		Given Wait for Admin Ajax "3" times #Common
		Then On Date-Time Tab, I must see list date available
		When I select date
		Then I must see list times
		When I select first item in list time
		Then I can see book appoinment info and "video" info
		And I can see consult language and observation consent
		Then I choose consult language "<consultLanguage>" and observation consent "<observationConcent>"
		When I submit Book Appointment
		Then After call Api "4" times, I must see book appointment of "video" thank you page
		Examples:
      | zip     | timezone | consultLanguage | observationConcent |
      | 91356   | MST      | English         | yes                |
      | 91356   | MST      | Spanish         | yes                |
      | 91356   | MST      | English         | no                 |
      | 91356   | MST      | Spanish         | no                 |

	Scenario Outline: TC7_22_01: Pass TC7_18 -> Chọn 1 location -> click button "Book Appointment" > book không thành công vì slot đã được book (403 resources unavailable)
		Given Fake Admin Ajax Api with "fullDropdownBookFailed" data
		Given I open Scheduler page with param has valid SFID, match key but invalid Zipcode
		Then I must see Banner and Disclaimer match with banner value in params
		And I must see Zipcode popup
		When I input valid zipcode "<zip>"
		And I click submit button
		Given Wait for Admin Ajax "1" times #Common
		Then I can see Location tab is active
		And I must see the first tab label is "Schedule a Free Consultation Now​"
		And I must see Banner and Disclaimer match with banner value in params
		Then On Location tab, I must see list valid locations have "1" item
		And On Location tab, I must see Video Consult box have "2" item
		And I do not see Previous Button
		And I must see Next Button
		Then I must see Location form
		When I select first item in list Location
		And I submit Next Step button at Location Tab
		Given Wait for Admin Ajax "2" times #Common
		Then I must see selected location info
		Then On Date-Time Tab, I must see list date available
		When I select date
		Then I must see list times
		When I select first item in list time
		Then I can see book appoinment info and "location" info
		When I submit Book Appointment
		Then After call Api "3" times, I book appointment failed
		Examples:
      | zip   |
      | 91356 |

	Scenario Outline: TC7_22_02: Pass TC7_20 -> Chọn Video Consult -> user click button "Book Appointment" > book không thành công vì slot đã được book (403 resources unavailable)
		Given Fake Admin Ajax Api with "fullDropdownHaveSelectTimezoneBookFailed" data
		Given I open Scheduler page with param has valid SFID, match key but invalid Zipcode
		Then I must see Banner and Disclaimer match with banner value in params
		And I must see Zipcode popup
		When I input valid zipcode "<zip>"
		And I click submit button
		Given Wait for Admin Ajax "1" times #Common
		Then I can see Location tab is active
		And I must see the first tab label is "Schedule a Free Consultation Now​"
		And I must see Banner and Disclaimer match with banner value in params
		Then On Location tab, I must see list valid locations have "1" item
		And On Location tab, I must see Video Consult box have "2" item
		And I do not see Previous Button
		And I must see Next Button
		Then I must see Location form
		When I select first item in list Video Consult
		And I submit Next Step button at Location Tab
		Given Wait for Admin Ajax "2" times #Common
		Then On Date-Time Tab, I must see list date available
		When I select date
		Then I must see dropdown timezone with default value "PST"
		And I must see list times
		When I select timezone with "<timezone>" value
		Given Wait for Admin Ajax "3" times #Common
		Then On Date-Time Tab, I must see list date available
		When I select date
		Then I must see list times
		When I select first item in list time
		Then I can see book appoinment info and "video" info
		And I can see consult language and observation consent
		When I submit Book Appointment
		Then After call Api "4" times, I book appointment failed
		Examples:
      | zip     | timezone |
      | 91356   | MST      |

	Scenario Outline: TC7_23_01: Pass TC7_18 -> Chọn 1 location ->  click button "Book Appointment" > book không thành công vì lý do gì đó khác status 403 resources unavailable
		Given Fake Admin Ajax Api with "fullDropdown" data
		Given I open Scheduler page with param has valid SFID, match key but invalid Zipcode
		Then I must see Banner and Disclaimer match with banner value in params
		And I must see Zipcode popup
		When I input valid zipcode "<zip>"
		And I click submit button
		Given Wait for Admin Ajax "1" times #Common
		Then I can see Location tab is active
		And I must see the first tab label is "Schedule a Free Consultation Now​"
		And I must see Banner and Disclaimer match with banner value in params
		Then On Location tab, I must see list valid locations have "1" item
		And On Location tab, I must see Video Consult box have "2" item
		And I do not see Previous Button
		And I must see Next Button
		Then I must see Location form
		When I select first item in list Location
		And I submit Next Step button at Location Tab
		Given Wait for Admin Ajax "2" times #Common
		Then I must see selected location info
		Then On Date-Time Tab, I must see list date available
		When I select date
		Then I must see list times
		When I select first item in list time
		Then I can see book appoinment info and "location" info
		When I submit Book Appointment
		Then After call Api "3" times, I must see book appointment of "location" thank you page
		Examples:
      | zip   |
      | 91356 |

	Scenario Outline: TC7_23_02: Pass TC7_20 -> Chọn Video Consult -> user click button "Book Appointment" > book không thành công vì lý do gì đó khác status 403 resources unavailable
		Given Fake Admin Ajax Api with "fullDropdownHaveSelectTimezone" data
		Given I open Scheduler page with param has valid SFID, match key but invalid Zipcode
		Then I must see Banner and Disclaimer match with banner value in params
		And I must see Zipcode popup
		When I input valid zipcode "<zip>"
		And I click submit button
		Given Wait for Admin Ajax "1" times #Common
		Then I can see Location tab is active
		And I must see the first tab label is "Schedule a Free Consultation Now​"
		And I must see Banner and Disclaimer match with banner value in params
		Then On Location tab, I must see list valid locations have "1" item
		And On Location tab, I must see Video Consult box have "2" item
		And I do not see Previous Button
		And I must see Next Button
		Then I must see Location form
		When I select first item in list Video Consult
		And I submit Next Step button at Location Tab
		Given Wait for Admin Ajax "2" times #Common
		Then On Date-Time Tab, I must see list date available
		When I select date
		Then I must see dropdown timezone with default value "PST"
		And I must see list times
		When I select timezone with "<timezone>" value
		Given Wait for Admin Ajax "3" times #Common
		Then On Date-Time Tab, I must see list date available
		When I select date
		Then I must see list times
		When I select first item in list time
		Then I can see book appoinment info and "video" info
		And I can see consult language and observation consent
		When I submit Book Appointment
		Then After call Api "4" times, I must see book appointment of "video" thank you page
		Examples:
      | zip | timezone |
      | 91356   | MST      |

	Scenario Outline: TC7_24_01: Pass TC7_05 -> Chọn Instant Video button > book thành công
		Given Fake Admin Ajax Api with "fullDropdownHaveConfirm" data
		Given I open Scheduler page with param has valid SFID, match key but invalid Zipcode
		Then I must see Banner and Disclaimer match with banner value in params
		And I must see Zipcode popup
		When I input valid zipcode "<zip>"
		And I click submit button
		Given Wait for Admin Ajax "1" times #Common
		Then I can see Location tab is active
		And I must see the first tab label is "Schedule a Free Consultation Now​"
		And I must see Banner and Disclaimer match with banner value in params
		And The selected location has slot of today > 1 which time I access has condition with next slot 5 mins <= Time <= 30mins
		And I must see Instant Video
		And I do not see Previous Button
		And I must see Next Button
		When I select Instant Video box
		Then I must see Popup Confirm Timezone
		When I click Confirm in Popup Confirm Timezone
		Given Wait for Admin Ajax "2" times #Common
		Then Now I have been redirected to bosley doxy page
		Examples:
      | zip   |
      | 91356 |

	Scenario Outline: TC7_24_02: Pass TC7_10 -> Chọn Instant Video button > book thành công
		Given Fake Admin Ajax Api with "fullDropdownHaveConfirm" data
		Given I open Scheduler page with param has valid SFID, match key but invalid Zipcode
		Then I must see Banner and Disclaimer match with banner value in params
		And I must see Zipcode popup
		When I input valid zipcode "<zip>"
		And I click submit button
		Given Wait for Admin Ajax "1" times #Common
		Then I can see Location tab is active
		And I must see the first tab label is "Schedule a Free Consultation Now​"
		And I must see Banner and Disclaimer match with banner value in params
		And The selected location has slot which time I access has condition with next slot has time < 5 mins
		And I must see Instant Video
		And I do not see Previous Button
		And I must see Next Button
		When I select Instant Video box
		Then I must see Popup Confirm Timezone
		When I click Confirm in Popup Confirm Timezone
		Given Wait for Admin Ajax "2" times #Common
		Then Now I have been redirected to bosley doxy page
		Examples:
      | zip   |
      | 91356 |

	Scenario Outline: TC7_25_01: Pass TC7_10 -> Chọn Instant Video button > book không thành công
		Given Fake Admin Ajax Api with "fullDropdownHaveConfirm" data
		Given I open Scheduler page with param has valid SFID, match key but invalid Zipcode
		Then I must see Banner and Disclaimer match with banner value in params
		And I must see Zipcode popup
		When I input valid zipcode "<zip>"
		And I click submit button
		Given Wait for Admin Ajax "1" times #Common
		Then I can see Location tab is active
		And I must see the first tab label is "Schedule a Free Consultation Now​"
		And I must see Banner and Disclaimer match with banner value in params
		And The selected location has slot which time I access has condition with next slot has time < 5 mins
		And I must see Instant Video
		And I do not see Previous Button
		And I must see Next Button
		When I select Instant Video box
		Then I must see Popup Confirm Timezone
		When I click Confirm in Popup Confirm Timezone
		Given Wait for Admin Ajax "2" times #Common
		Then Now I have been redirected to bosley doxy page
		Examples:
      | zip   |
      | 91356 |

	Scenario Outline: TC7_25_02: Pass TC7_05 -> Chọn Instant Video button > book không thành công
		Given Fake Admin Ajax Api with "fullDropdownHaveConfirm" data
		Given I open Scheduler page with param has valid SFID, match key but invalid Zipcode
		Then I must see Banner and Disclaimer match with banner value in params
		And I must see Zipcode popup
		When I input valid zipcode "<zip>"
		And I click submit button
		Given Wait for Admin Ajax "1" times #Common
		Then I can see Location tab is active
		And I must see the first tab label is "Schedule a Free Consultation Now​"
		And I must see Banner and Disclaimer match with banner value in params
		And The selected location has slot of today > 1 which time I access has condition with next slot 5 mins <= Time <= 30mins
		And I must see Instant Video
		And I do not see Previous Button
		And I must see Next Button
		When I select Instant Video box
		Then I must see Popup Confirm Timezone
		When I click Confirm in Popup Confirm Timezone
		Given Wait for Admin Ajax "2" times #Common
		Then Now I have been redirected to bosley doxy page
		Examples:
      | zip   |
      | 91356 |
