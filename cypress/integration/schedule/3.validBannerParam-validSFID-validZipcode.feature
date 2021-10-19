Feature: Scheduler
	Check TH URL có params chứa key/value match với key/value trong CMS, zipcode và SFID hợp lệ

	Background:
		Given I want to remove Session #Common

	Scenario: TC3_01: Check TH URL có params chứa key/value match với key/value trong CMS, zipcode và SFID hợp lệ, có data trả về từ SF cho Inperson, Instant Video
		Given Fake Admin Ajax Api with "fullDropdown" data
		Given I open Scheduler page with param has valid SFID, match key and valid Zipcode
		Given Wait for Admin Ajax "1" times #Common
		Then I can see Location tab is active
		And I must see the first tab label is "Schedule a Free Consultation Now​"
		And I must see Banner and Disclaimer match with banner value in params
		And On Location tab, I must see list valid locations have "1" item
		And On Location tab, I must see Video Consult box have "2" item
		And I must see Instant Video
		And I do not see Previous Button
		And I must see Next Button

	Scenario: TC3_02: Check TH URL có params chứa key/value match với key/value trong CMS, zipcode và SFID hợp lệ, KHÔNG có data trả về từ SF cho Inperson, Instant Video
		Given Fake Admin Ajax Api with "emptyDropdown" data
		Given I open Scheduler page with param has valid SFID, match key and valid Zipcode
		Given Wait for Admin Ajax "1" times #Common
		Then On Location tab, I don't see Location list
		And On Location tab, I must see Video Consult box have "1" item
		And I do not see Previous Button
		And I must see Next Button


	Scenario: TC3_03: Ở tab Location hiện box Instant Video:(có data)(slot>1)(5mins<=Time<=30mins) #POSITIVE
		Given Fake Admin Ajax Api with "fullDropdown" data
		Given I open Scheduler page with param has valid SFID, match key and valid Zipcode
		Given Wait for Admin Ajax "1" times #Common
		Then The selected location has slot of today > 1 which time I access has condition with next slot 5 mins <= Time <= 30mins
		And I must see Instant Video
		And I do not see Previous Button
		And I must see Next Button


	@last
	Scenario: TC3_04: Ở tab Location Không hiện box Instant Video:(không có data) #NEGATIVE
		Given Fake Admin Ajax Api with "emptyDropdown" data
		Given I open Scheduler page with param has valid SFID, match key and valid Zipcode
		Given Wait for Admin Ajax "1" times #Common
		Then On Location tab, I don't see Instant Video box
		And I do not see Previous Button
		And I must see Next Button


	@last
	Scenario: TC3_05: Ở tab Location Không hiện box Instant Video:(có data)(Time>30mins)
		Given Fake Admin Ajax Api with "withoutInstantVideo" data
		Given I open Scheduler page with param has valid SFID, match key and valid Zipcode
		Given Wait for Admin Ajax "1" times #Common
		Then Time user > 30 mins before start next slot
		And On Location tab, I don't see Instant Video box
		And I do not see Previous Button
		And I must see Next Button


	@last
	Scenario: TC3_06: Ở tab Location Không hiện box Instant Video:(có data)(slot<=1)(5mins<=Time<=30mins)
		Given Fake Admin Ajax Api with "withoutInstantVideo" data
		Given I open Scheduler page with param has valid SFID, match key and valid Zipcode
		Given Wait for Admin Ajax "1" times #Common
		Then The selected location has slot of today <= 1 which time I access has condition with next slot 5 mins <= Time <= 30mins
		And On Location tab, I don't see Instant Video box
		And I do not see Previous Button
		And I must see Next Button


	@last
	Scenario: TC3_07: Ở tab Location Không hiện box Instant Video:(có data)(slot<=1)(5mins<=Time)
		Given Fake Admin Ajax Api with "withoutInstantVideo" data
		Given I open Scheduler page with param has valid SFID, match key and valid Zipcode
		Given Wait for Admin Ajax "1" times #Common
		Then The selected location has slot of today <= 1 which time I access has condition with next slot has time < 5 mins
		And On Location tab, I don't see Instant Video box
		And I do not see Previous Button
		And I must see Next Button


	Scenario: TC3_08: Ở tab Location hiện box Instant Video:(có data)(5mins<Time)
		Given Fake Admin Ajax Api with "fullDropdown" data
		Given I open Scheduler page with param has valid SFID, match key and valid Zipcode
		Given Wait for Admin Ajax "1" times #Common
		Then The selected location has slot which time I access has condition with next slot has time < 5 mins
		And I must see Instant Video
		And I do not see Previous Button
		And I must see Next Button


	Scenario: TC3_09: Pass TC3_01 -> Chọn một location -> Tìm thấy các slot trong vòng 15 ngày
		Given Fake Admin Ajax Api with "fullDropdown" data
		Given I open Scheduler page with param has valid SFID, match key and valid Zipcode
		Given Wait for Admin Ajax "1" times #Common
		Then I can see Location tab is active
		And I must see the first tab label is "Schedule a Free Consultation Now​"
		And I must see Banner and Disclaimer match with banner value in params
		And On Location tab, I must see list valid locations have "1" item
		And On Location tab, I must see Video Consult box have "2" item
		And I must see Instant Video
		And I do not see Previous Button
		And I must see Next Button
		Then I must see Location form
		When I select first item in list Location
		Given Wait for Admin Ajax "2" times #Common
		Then I must see selected location info
		Then On Date-Time Tab, I must see list date available
		When I select date
		Then I must see list times


	Scenario: TC3_10: Pass TC3_01 -> Chọn một Video Consult -> Tìm thấy các slot trong vòng 15 ngày
		Given Fake Admin Ajax Api with "fullDropdown" data
		Given I open Scheduler page with param has valid SFID, match key and valid Zipcode
		Given Wait for Admin Ajax "1" times #Common
		Then I can see Location tab is active
		And I must see the first tab label is "Schedule a Free Consultation Now​"
		And I must see Banner and Disclaimer match with banner value in params
		And On Location tab, I must see list valid locations have "1" item
		And On Location tab, I must see Video Consult box have "2" item
		And I must see Instant Video
		And I do not see Previous Button
		And I must see Next Button
		Then I must see Location form
		When I select first item in list Video Consult
		Given Wait for Admin Ajax "2" times #Common
		Then On Date-Time Tab, I must see list date available
		When I select date
		Then I must see dropdown timezone with default value "PT"
		And I must see list times


	Scenario Outline: TC3_11: Pass TC3_10 -> Chọn một Video Consult -> Tìm thấy các slot trong vòng 15 ngày, user switch timezone
		Given Fake Admin Ajax Api with "fullDropdownHaveSelectTimezone" data
		Given I open Scheduler page with param has valid SFID, match key and valid Zipcode
		Given Wait for Admin Ajax "1" times #Common
		Then I can see Location tab is active
		And I must see the first tab label is "Schedule a Free Consultation Now​"
		And I must see Banner and Disclaimer match with banner value in params
		And On Location tab, I must see list valid locations have "1" item
		And On Location tab, I must see Video Consult box have "2" item
		And I must see Instant Video
		And I do not see Previous Button
		And I must see Next Button
		Then I must see Location form
		When I select first item in list Video Consult
		Given Wait for Admin Ajax "2" times #Common
		Then On Date-Time Tab, I must see list date available
		When I select date
		Then I must see dropdown timezone with default value "PT"
		And I must see list times
		When I select timezone with "<timezone>" value
		Given Wait for Admin Ajax "3" times #Common
		Then On Date-Time Tab, I must see list date available
		When I select date
		Then I must see list times
		Examples:
      | timezone |
      | MT      |
      | CT      |
      | ET      |

	@last
	Scenario: TC3_12: Pass TC3_01 -> chọn location không có slot trong vòng 15 ngày: show error
		Given Fake Admin Ajax Api with "fullDropdownUnAvailableDateTime" data
		Given I open Scheduler page with param has valid SFID, match key and valid Zipcode
		Given Wait for Admin Ajax "1" times #Common
		Then I can see Location tab is active
		And I must see the first tab label is "Schedule a Free Consultation Now​"
		And I must see Banner and Disclaimer match with banner value in params
		And On Location tab, I must see list valid locations have "1" item
		And On Location tab, I must see Video Consult box have "2" item
		And I must see Instant Video
		And I do not see Previous Button
		And I must see Next Button
		Then I must see Location form
		When I select first item in list Location
		Given Wait for Admin Ajax "2" times #Common
		Then I must see selected location info
		Then On Date-Time Tab, I see error message, button Call Now, links


	@last
	Scenario: TC3_13: Pass TC3_01 -> chọn video consult không có slot trong vòng 15 ngày: show error
		Given Fake Admin Ajax Api with "fullDropdownUnAvailableDateTime" data
		Given I open Scheduler page with param has valid SFID, match key and valid Zipcode
		Given Wait for Admin Ajax "1" times #Common
		Then I can see Location tab is active
		And I must see the first tab label is "Schedule a Free Consultation Now​"
		And I must see Banner and Disclaimer match with banner value in params
		And On Location tab, I must see list valid locations have "1" item
		And On Location tab, I must see Video Consult box have "2" item
		And I must see Instant Video
		And I do not see Previous Button
		And I must see Next Button
		Then I must see Location form
		When I select first item in list Video Consult
		Given Wait for Admin Ajax "2" times #Common
		Then On Date-Time Tab, I see error message, button Call Now, links


	@last
	Scenario: TC3_14_01: Pass TC3_09 -> chọn location có slot trong vòng 15 ngày tiếp theo: hiển thị ngày giờ available, click load more => show available date
		Given Fake Admin Ajax Api with "fullDropdownHaveLoadMore" data
		Given I open Scheduler page with param has valid SFID, match key and valid Zipcode
		Given Wait for Admin Ajax "1" times #Common
		Then I can see Location tab is active
		And I must see the first tab label is "Schedule a Free Consultation Now​"
		And I must see Banner and Disclaimer match with banner value in params
		And On Location tab, I must see list valid locations have "1" item
		And On Location tab, I must see Video Consult box have "2" item
		And I must see Instant Video
		And I do not see Previous Button
		And I must see Next Button
		Then I must see Location form
		When I select first item in list Location
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


	@last
	Scenario: TC3_14_02: Pass TC3_10 -> Chọn một Video Consult -> Tìm thấy các slot trong vòng 15 ngày
		Given Fake Admin Ajax Api with "fullDropdownHaveLoadMore" data
		Given I open Scheduler page with param has valid SFID, match key and valid Zipcode
		Given Wait for Admin Ajax "1" times #Common
		Then I can see Location tab is active
		And I must see the first tab label is "Schedule a Free Consultation Now​"
		And I must see Banner and Disclaimer match with banner value in params
		And On Location tab, I must see list valid locations have "1" item
		And On Location tab, I must see Video Consult box have "2" item
		And I must see Instant Video
		And I do not see Previous Button
		And I must see Next Button
		Then I must see Location form
		When I select first item in list Video Consult
		Given Wait for Admin Ajax "2" times #Common
		Then On Date-Time Tab, I must see list date available
		When I select date
		Then I must see dropdown timezone with default value "PT"
		And I must see list times
		When I click button next slide in list date
		Then I see button load more dates
		And I click load more dates
		Given Wait for Admin Ajax "3" times #Common
		Then On Date-Time Tab, I must see list date available have "32" item
		And I see button load more dates


	@last
	Scenario: TC3_15_01: Pass TC3_09 -> chọn location không có slot trong vòng 15 ngày tiếp theo
		Given Fake Admin Ajax Api with "fullDropdownNotHaveLoadMore" data
		Given I open Scheduler page with param has valid SFID, match key and valid Zipcode
		Given Wait for Admin Ajax "1" times #Common
		Then I can see Location tab is active
		And I must see the first tab label is "Schedule a Free Consultation Now​"
		And I must see Banner and Disclaimer match with banner value in params
		And On Location tab, I must see list valid locations have "1" item
		And On Location tab, I must see Video Consult box have "2" item
		And I must see Instant Video
		And I do not see Previous Button
		And I must see Next Button
		Then I must see Location form
		When I select first item in list Location
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


	@last
	Scenario: TC3_15_02: Pass TC3_10 -> chọn Video Consult không có slot trong vòng 15 ngày tiếp theo
		Given Fake Admin Ajax Api with "fullDropdownNotHaveLoadMore" data
		Given I open Scheduler page with param has valid SFID, match key and valid Zipcode
		Given Wait for Admin Ajax "1" times #Common
		Then I can see Location tab is active
		And I must see the first tab label is "Schedule a Free Consultation Now​"
		And I must see Banner and Disclaimer match with banner value in params
		And On Location tab, I must see list valid locations have "1" item
		And On Location tab, I must see Video Consult box have "2" item
		And I must see Instant Video
		And I do not see Previous Button
		And I must see Next Button
		Then I must see Location form
		When I select first item in list Video Consult
		Given Wait for Admin Ajax "2" times #Common
		Then On Date-Time Tab, I must see list date available
		When I select date
		Then I must see dropdown timezone with default value "PT"
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


	Scenario: TC3_16: Pass TC3_09 -> Show info date/time location tương ứng với những gì user chọn
		Given Fake Admin Ajax Api with "fullDropdown" data
		Given I open Scheduler page with param has valid SFID, match key and valid Zipcode
		Given Wait for Admin Ajax "1" times #Common
		Then I can see Location tab is active
		And I must see the first tab label is "Schedule a Free Consultation Now​"
		And I must see Banner and Disclaimer match with banner value in params
		And On Location tab, I must see list valid locations have "1" item
		And On Location tab, I must see Video Consult box have "2" item
		And I must see Instant Video
		And I do not see Previous Button
		And I must see Next Button
		Then I must see Location form
		When I select first item in list Location
		Given Wait for Admin Ajax "2" times #Common
		Then I must see selected location info
		Then On Date-Time Tab, I must see list date available
		When I select date
		Then I must see list times
		When I select first item in list time
		Then I can see book appoinment info and "location" info


	@last
	Scenario: TC3_17: Pass TC3_16 -> book thành công
		Given Fake Admin Ajax Api with "fullDropdown" data
		Given I open Scheduler page with param has valid SFID, match key and valid Zipcode
		Given Wait for Admin Ajax "1" times #Common
		Then I can see Location tab is active
		And I must see the first tab label is "Schedule a Free Consultation Now​"
		And I must see Banner and Disclaimer match with banner value in params
		And On Location tab, I must see list valid locations have "1" item
		And On Location tab, I must see Video Consult box have "2" item
		And I must see Instant Video
		And I do not see Previous Button
		And I must see Next Button
		Then I must see Location form
		When I select first item in list Location
		Given Wait for Admin Ajax "2" times #Common
		Then I must see selected location info
		Then On Date-Time Tab, I must see list date available
		When I select date
		Then I must see list times
		When I select first item in list time
		Then I can see book appoinment info and "location" info
		When I submit Book Appointment
		Then After call Api "3" times, I must see book appointment of "location" thank you page


	Scenario Outline: TC3_18: Pass TC3_11 -> Show thêm vùng Consult language & Observation​ consent dưới btn book appointment
		Given Fake Admin Ajax Api with "fullDropdownHaveSelectTimezone" data
		Given I open Scheduler page with param has valid SFID, match key and valid Zipcode
		Given Wait for Admin Ajax "1" times #Common
		Then I can see Location tab is active
		And I must see the first tab label is "Schedule a Free Consultation Now​"
		And I must see Banner and Disclaimer match with banner value in params
		And On Location tab, I must see list valid locations have "1" item
		And On Location tab, I must see Video Consult box have "2" item
		And I must see Instant Video
		And I do not see Previous Button
		And I must see Next Button
		Then I must see Location form
		When I select first item in list Video Consult
		Given Wait for Admin Ajax "2" times #Common
		Then On Date-Time Tab, I must see list date available
		When I select date
		Then I must see dropdown timezone with default value "PT"
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
      | timezone |
      | MT      |

	@last
	Scenario Outline: TC3_19: Pass TC3_18 -> chọn option trong Consult language & Observation​ consent > click button "Book Appointment" > book thành công
		Given Fake Admin Ajax Api with "fullDropdownHaveSelectTimezone" data
		Given I open Scheduler page with param has valid SFID, match key and valid Zipcode
		Given Wait for Admin Ajax "1" times #Common
		Then I can see Location tab is active
		And I must see the first tab label is "Schedule a Free Consultation Now​"
		And I must see Banner and Disclaimer match with banner value in params
		And On Location tab, I must see list valid locations have "1" item
		And On Location tab, I must see Video Consult box have "2" item
		And I must see Instant Video
		And I do not see Previous Button
		And I must see Next Button
		Then I must see Location form
		When I select first item in list Video Consult
		Given Wait for Admin Ajax "2" times #Common
		Then On Date-Time Tab, I must see list date available
		When I select date
		Then I must see dropdown timezone with default value "PT"
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
      | timezone | consultLanguage | observationConcent |
      | MT      | English         | yes                |
      | MT      | Spanish         | yes                |
      | MT      | English         | no                 |
      | MT      | Spanish         | no                 |

	@last
	Scenario: TC3_20_01: Pass TC3_16 -> Chọn 1 location -> click button "Book Appointment" > book không thành công vì slot đã được book (404 resources unavailable)
		Given Fake Admin Ajax Api with "fullDropdownBookFailed" data
		Given I open Scheduler page with param has valid SFID, match key and valid Zipcode
		Given Wait for Admin Ajax "1" times #Common
		Then I can see Location tab is active
		And I must see the first tab label is "Schedule a Free Consultation Now​"
		And I must see Banner and Disclaimer match with banner value in params
		And On Location tab, I must see list valid locations have "1" item
		And On Location tab, I must see Video Consult box have "2" item
		And I must see Instant Video
		And I do not see Previous Button
		And I must see Next Button
		Then I must see Location form
		When I select first item in list Location
		Given Wait for Admin Ajax "2" times #Common
		Then I must see selected location info
		Then On Date-Time Tab, I must see list date available
		When I select date
		Then I must see list times
		When I select first item in list time
		Then I can see book appoinment info and "location" info
		When I submit Book Appointment
		Then After call Api "3" times, I book appointment failed


	@last
	Scenario Outline: TC3_20_02: Pass TC3_18 -> Chọn Video Consult -> user click button "Book Appointment" > book không thành công vì slot đã được book (404 resources unavailable)
		Given Fake Admin Ajax Api with "fullDropdownHaveSelectTimezoneBookFailed" data
		Given I open Scheduler page with param has valid SFID, match key and valid Zipcode
		Given Wait for Admin Ajax "1" times #Common
		Then I can see Location tab is active
		And I must see the first tab label is "Schedule a Free Consultation Now​"
		And I must see Banner and Disclaimer match with banner value in params
		And On Location tab, I must see list valid locations have "1" item
		And On Location tab, I must see Video Consult box have "2" item
		And I must see Instant Video
		And I do not see Previous Button
		And I must see Next Button
		Then I must see Location form
		When I select first item in list Video Consult
		Given Wait for Admin Ajax "2" times #Common
		Then On Date-Time Tab, I must see list date available
		When I select date
		Then I must see dropdown timezone with default value "PT"
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
      | timezone |
      | MT      |

	@last
	Scenario: TC3_21_01: Pass TC3_16 -> Chọn 1 location ->  click button "Book Appointment" > book không thành công vì lý do gì đó khác status 404 resources unavailable
		Given Fake Admin Ajax Api with "fullDropdown" data
		Given I open Scheduler page with param has valid SFID, match key and valid Zipcode
		Given Wait for Admin Ajax "1" times #Common
		Then I can see Location tab is active
		And I must see the first tab label is "Schedule a Free Consultation Now​"
		And I must see Banner and Disclaimer match with banner value in params
		And On Location tab, I must see list valid locations have "1" item
		And On Location tab, I must see Video Consult box have "2" item
		And I must see Instant Video
		And I do not see Previous Button
		And I must see Next Button
		Then I must see Location form
		When I select first item in list Location
		Given Wait for Admin Ajax "2" times #Common
		Then I must see selected location info
		Then On Date-Time Tab, I must see list date available
		When I select date
		Then I must see list times
		When I select first item in list time
		Then I can see book appoinment info and "location" info
		When I submit Book Appointment
		Then After call Api "3" times, I must see book appointment of "location" thank you page


	@last
	Scenario Outline: TC3_21_02: Pass TC3_18 -> Chọn Video Consult -> user click button "Book Appointment" > book không thành công vì lý do gì đó khác status 404 resources unavailable
		Given Fake Admin Ajax Api with "fullDropdownHaveSelectTimezone" data
		Given I open Scheduler page with param has valid SFID, match key and valid Zipcode
		Given Wait for Admin Ajax "1" times #Common
		Then I can see Location tab is active
		And I must see the first tab label is "Schedule a Free Consultation Now​"
		And I must see Banner and Disclaimer match with banner value in params
		And On Location tab, I must see list valid locations have "1" item
		And On Location tab, I must see Video Consult box have "2" item
		And I must see Instant Video
		And I do not see Previous Button
		And I must see Next Button
		Then I must see Location form
		When I select first item in list Video Consult
		Given Wait for Admin Ajax "2" times #Common
		Then On Date-Time Tab, I must see list date available
		When I select date
		Then I must see dropdown timezone with default value "PT"
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
      | timezone |
      | MT      |

	@last
	Scenario: TC3_22_01: Pass TC3_03 -> Chọn Instant Video button > book thành công
		Given Fake Admin Ajax Api with "fullDropdownHaveConfirm" data
		Given I open Scheduler page with param has valid SFID, match key and valid Zipcode
		Given Wait for Admin Ajax "1" times #Common
		Then The selected location has slot of today > 1 which time I access has condition with next slot 5 mins <= Time <= 30mins
		And I must see Instant Video
		And I do not see Previous Button
		And I must see Next Button
		When I select Instant Video box
		Then I must see Popup Confirm Timezone
		When I click Confirm in Popup Confirm Timezone
		Given Wait for Admin Ajax "2" times #Common
		Then Now I have been redirected to bosley doxy page


	@last
	Scenario: TC3_22_02: Pass TC3_08 -> Chọn Instant Video button > book thành công
		Given Fake Admin Ajax Api with "fullDropdownHaveConfirm" data
		Given I open Scheduler page with param has valid SFID, match key and valid Zipcode
		Given Wait for Admin Ajax "1" times #Common
		Then The selected location has slot which time I access has condition with next slot has time < 5 mins
		And I must see Instant Video
		And I do not see Previous Button
		And I must see Next Button
		When I select Instant Video box
		Then I must see Popup Confirm Timezone
		When I click Confirm in Popup Confirm Timezone
		Given Wait for Admin Ajax "2" times #Common
		Then Now I have been redirected to bosley doxy page


	@last
	Scenario: TC3_23_01: Pass TC3_03 -> Chọn Instant Video button > book không thành công
		Given Fake Admin Ajax Api with "fullDropdownHaveConfirm" data
		Given I open Scheduler page with param has valid SFID, match key and valid Zipcode
		Given Wait for Admin Ajax "1" times #Common
		Then The selected location has slot of today > 1 which time I access has condition with next slot 5 mins <= Time <= 30mins
		And I must see Instant Video
		And I do not see Previous Button
		And I must see Next Button
		When I select Instant Video box
		Then I must see Popup Confirm Timezone
		When I click Confirm in Popup Confirm Timezone
		Given Wait for Admin Ajax "2" times #Common
		Then Now I have been redirected to bosley doxy page


	@last
	Scenario: TC3_23_02: Pass TC3_08 -> Chọn Instant Video button > book không thành công
		Given Fake Admin Ajax Api with "fullDropdownHaveConfirm" data
		Given I open Scheduler page with param has valid SFID, match key and valid Zipcode
		Given Wait for Admin Ajax "1" times #Common
		Then The selected location has slot which time I access has condition with next slot has time < 5 mins
		And I must see Instant Video
		And I do not see Previous Button
		And I must see Next Button
		When I select Instant Video box
		Then I must see Popup Confirm Timezone
		When I click Confirm in Popup Confirm Timezone
		Given Wait for Admin Ajax "2" times #Common
		Then Now I have been redirected to bosley doxy page

