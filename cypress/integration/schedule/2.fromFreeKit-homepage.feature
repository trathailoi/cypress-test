Feature: Scheduler
	Check TH URL không có param, cookies có SFID

	Background: Scheduler with cookies
		Given I want to remove Cookie #Common
		Given I want to remove Session #Common

	Scenario Outline: TC2_00: Check submit form free kit in home page
		Given I open homepage
		Given Fake Admin Ajax Api with "checkSubmitFreeKit" data
		When I enter new user to form Free Kit with name is "<firstName>" "<lastName>" "<email>" "<phone>" "<street>" "<zipcode>" "<gender>" #CommonPhase2
		And I submit Free Kit form #CommonPhase2
		Given Wait for Admin Ajax "1" times #Common
		Then I have been redirect to scheduler page #CommonPhase2
		And I must see Thank You content on Banner
		Examples:
        | firstName | lastName | email                | phone        | street | zipcode | gender |
        | Sen       | Vo       | sen.vo@9thwonder.com | 786-416-5792 | Test   | 91356   | Woman  |

	Scenario Outline: TC2_01: URL không có params, cookie có SFID
		Given Fake Admin Ajax Api with "fullDropdown" data
		Given I set cookie with full SF info valid
		Given I open Scheduler page non-param
		Given Wait for Admin Ajax "1" times #Common
		Then I can see Location tab is active
		And I must see Default Banner and Disclaimer
		And I must see Previous Button
		And I must see Next Button
		Examples:
        | firstName | lastName | email                | phone        | street | zipcode | gender |
        | Sen       | Vo       | sen.vo@9thwonder.com | 786-416-5792 | Test   | 91356   | Woman  |

	Scenario Outline: TC2_02: Pass TC2_01 -> Ở tab Location, click btn Previous > fill info của user theo cookies đã lưu
		Given Fake Admin Ajax Api with "fullDropdown" data
		Given I set cookie with full SF info valid
		Given I open Scheduler page non-param
		Given Wait for Admin Ajax "1" times #Common
		Then I can see Location tab is active
		And I must see Default Banner and Disclaimer
		And I must see Previous Button
		And I must see Next Button
		When I click Previous button #CommonPhase2
		Then I can see user info is "<firstName>" "<lastName>" "<email>" "<phone>" "<street>" "<zipcode>" "<gender>" #CommonPhase2
		Examples:
      | firstName | lastName | email                | phone          | street | zipcode | gender |
      | Sen       | Vo       | sen.vo@9thwonder.com | (786) 416-5792 | Test   | 91356   | Woman  |

	Scenario Outline: TC2_03: Pass TC2_01 -> Ở Tab Location, Có data từ SF trả về tương ứng với zipcode của user cho In Person và  Video Consult luôn luôn hiển thị #POSITIVE
		Given Fake Admin Ajax Api with "fullDropdown" data
		Given I set cookie with full SF info valid
		Given I open Scheduler page non-param
		Given Wait for Admin Ajax "1" times #Common
		Then I can see Location tab is active
		And I must see Default Banner and Disclaimer
		And I must see Previous Button
		And I must see Next Button
		Then On Location tab, I must see list valid locations have "1" item
		And On Location tab, I must see Video Consult box have "2" item
		And I must see Previous Button
		And I must see Next Button
		Examples:
        | firstName | lastName | email                | phone        | street | zipcode | gender |
        | Sen       | Vo       | sen.vo@9thwonder.com | 786-416-5792 | Test   | 91356   | Woman  |

	Scenario Outline: TC2_04: Pass TC2_01 -> Ở tab Location không có location nào tương ứng với Zipcode #NEGATIVE
		Given Fake Admin Ajax Api with "emptyDropdown" data
		Given I set cookie with full SF info valid
		Given I open Scheduler page non-param
		Given Wait for Admin Ajax "1" times #Common
		Then I can see Location tab is active
		And I must see Default Banner and Disclaimer
		And I must see Previous Button
		And I must see Next Button
		Then On Location tab, I don't see Location list
		And On Location tab, I must see Video Consult box have "1" item
		And I must see Previous Button
		And I must see Next Button
		Examples:
        | firstName | lastName | email                | phone        | street | zipcode | gender |
        | Sen       | Vo       | sen.vo@9thwonder.com | 786-416-5792 | Test   | 91356   | Woman  |

	Scenario Outline: TC2_05: Pass TC2_01 -> Ở tab Location hiện box Instant Video:(có data)(slot>1)(5mins<=Time<=30mins) #POSITIVE
		Given Fake Admin Ajax Api with "fullDropdown" data
		Given I set cookie with full SF info valid
		Given I open Scheduler page non-param
		Given Wait for Admin Ajax "1" times #Common
		Then I can see Location tab is active
		And I must see Default Banner and Disclaimer
		And I must see Previous Button
		And I must see Next Button
		And The selected location has slot of today > 1 which time I access has condition with next slot 5 mins <= Time <= 30mins
		And I must see Instant Video
		And I must see Previous Button
		And I must see Next Button
		Examples:
        | firstName | lastName | email                | phone        | street | zipcode | gender |
        | Sen       | Vo       | sen.vo@9thwonder.com | 786-416-5792 | Test   | 91356   | Woman  |

	Scenario Outline: TC2_06: Pass TC2_01 -> Ở tab Location Không hiện box Instant Video:(không có data) #NEGATIVE
		Given Fake Admin Ajax Api with "emptyDropdown" data
		Given I set cookie with full SF info valid
		Given I open Scheduler page non-param
		Given Wait for Admin Ajax "1" times #Common
		Then I can see Location tab is active
		And I must see Default Banner and Disclaimer
		And I must see Previous Button
		And I must see Next Button
		Then On Location tab, I don't see Instant Video box
		And I must see Previous Button
		And I must see Next Button
		Examples:
        | firstName | lastName | email                | phone        | street | zipcode | gender |
        | Sen       | Vo       | sen.vo@9thwonder.com | 786-416-5792 | Test   | 91356   | Woman  |

	Scenario Outline: TC2_07: Pass TC2_01 -> Ở tab Location Không hiện box Instant Video:(có data)(Time>30mins)
		Given Fake Admin Ajax Api with "withoutInstantVideo" data
		Given I set cookie with full SF info valid
		Given I open Scheduler page non-param
		Given Wait for Admin Ajax "1" times #Common
		Then I can see Location tab is active
		And I must see Default Banner and Disclaimer
		And I must see Previous Button
		And I must see Next Button
		And Time user > 30 mins before start next slot
		Then On Location tab, I don't see Instant Video box
		And I must see Previous Button
		And I must see Next Button
		Examples:
        | firstName | lastName | email                | phone        | street | zipcode | gender |
        | Sen       | Vo       | sen.vo@9thwonder.com | 786-416-5792 | Test   | 91356   | Woman  |

	Scenario Outline: TC2_08: Pass TC2_01 -> Ở tab Location Không hiện box Instant Video:(có data)(slot<=1)(5mins<=Time<=30mins)
		Given Fake Admin Ajax Api with "withoutInstantVideo" data
		Given I set cookie with full SF info valid
		Given I open Scheduler page non-param
		Given Wait for Admin Ajax "1" times #Common
		Then I can see Location tab is active
		And I must see Default Banner and Disclaimer
		And I must see Previous Button
		And I must see Next Button
		And The selected location has slot of today <= 1 which time I access has condition with next slot 5 mins <= Time <= 30mins
		Then On Location tab, I don't see Instant Video box
		And I must see Previous Button
		And I must see Next Button
		Examples:
        | firstName | lastName | email                | phone        | street | zipcode | gender |
        | Sen       | Vo       | sen.vo@9thwonder.com | 786-416-5792 | Test   | 91356   | Woman  |

	Scenario Outline: TC2_09: Pass TC2_01 -> Ở tab Location Không hiện box Instant Video:(có data)(slot<=1)(5mins<=Time)
		Given Fake Admin Ajax Api with "withoutInstantVideo" data
		Given I set cookie with full SF info valid
		Given I open Scheduler page non-param
		Given Wait for Admin Ajax "1" times #Common
		Then I can see Location tab is active
		And I must see Default Banner and Disclaimer
		And I must see Previous Button
		And I must see Next Button
		And The selected location has slot of today <= 1 which time I access has condition with next slot has time < 5 mins
		Then On Location tab, I don't see Instant Video box
		And I must see Previous Button
		And I must see Next Button
		Examples:
        | firstName | lastName | email                | phone        | street | zipcode | gender |
        | Sen       | Vo       | sen.vo@9thwonder.com | 786-416-5792 | Test   | 91356   | Woman  |

	Scenario Outline: TC2_10: Pass TC2_01 -> Ở tab Location hiện box Instant Video:(có data)(5mins<Time)
		Given Fake Admin Ajax Api with "fullDropdown" data
		Given I set cookie with full SF info valid
		Given I open Scheduler page non-param
		Given Wait for Admin Ajax "1" times #Common
		Then I can see Location tab is active
		And I must see Default Banner and Disclaimer
		And I must see Previous Button
		And I must see Next Button
		And The selected location has slot which time I access has condition with next slot has time < 5 mins
		And I must see Instant Video
		And I must see Previous Button
		And I must see Next Button
		Examples:
        | firstName | lastName | email                | phone        | street | zipcode | gender |
        | Sen       | Vo       | sen.vo@9thwonder.com | 786-416-5792 | Test   | 91356   | Woman  |

	Scenario Outline: TC2_11: Pass TC2_03 -> Chọn một location -> Tìm thấy các slot trong vòng 15 ngày
		Given Fake Admin Ajax Api with "fullDropdown" data
		Given I set cookie with full SF info valid
		Given I open Scheduler page non-param
		Given Wait for Admin Ajax "1" times #Common
		Then I can see Location tab is active
		And I must see Default Banner and Disclaimer
		And I must see Previous Button
		And I must see Next Button
		Then On Location tab, I must see list valid locations have "1" item
		And On Location tab, I must see Video Consult box have "2" item
		And I must see Previous Button
		And I must see Next Button
		Then I must see Location form
		When I select first item in list Location
		Given Wait for Admin Ajax "2" times #Common
		Then I must see selected location info
		Then On Date-Time Tab, I must see list date available
		When I select date
		Then I must see list times
		Examples:
        | firstName | lastName | email                | phone        | street | zipcode | gender |
        | Sen       | Vo       | sen.vo@9thwonder.com | 786-416-5792 | Test   | 91356   | Woman  |

	Scenario Outline: TC2_12: Pass TC2_03 -> Chọn một Video Consult -> Tìm thấy các slot trong vòng 15 ngày
		Given Fake Admin Ajax Api with "fullDropdown" data
		Given I set cookie with full SF info valid
		Given I open Scheduler page non-param
		Given Wait for Admin Ajax "1" times #Common
		Then I can see Location tab is active
		And I must see Default Banner and Disclaimer
		And I must see Previous Button
		And I must see Next Button
		Then On Location tab, I must see list valid locations have "1" item
		And On Location tab, I must see Video Consult box have "2" item
		And I must see Previous Button
		And I must see Next Button
		Then I must see Location form
		When I select first item in list Video Consult
		Given Wait for Admin Ajax "2" times #Common
		Then On Date-Time Tab, I must see list date available
		When I select date
		Then I must see dropdown timezone with default value "PT"
		And I must see list times
		Examples:
        | firstName | lastName | email                | phone        | street | zipcode | gender |
        | Sen       | Vo       | sen.vo@9thwonder.com | 786-416-5792 | Test   | 91356   | Woman  |

	Scenario Outline: TC2_13: Pass TC2_12 -> Chọn một Video Consult -> Tìm thấy các slot trong vòng 15 ngày, user switch timezone
		Given Fake Admin Ajax Api with "fullDropdownHaveSelectTimezone" data
		Given I set cookie with full SF info valid
		Given I open Scheduler page non-param
		Given Wait for Admin Ajax "1" times #Common
		Then I can see Location tab is active
		And I must see Default Banner and Disclaimer
		And I must see Previous Button
		And I must see Next Button
		Then On Location tab, I must see list valid locations have "1" item
		And On Location tab, I must see Video Consult box have "2" item
		And I must see Previous Button
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

	Scenario Outline: TC2_14: Pass TC2_03 -> chọn location không có slot trong vòng 15 ngày: show error
		Given Fake Admin Ajax Api with "fullDropdownUnAvailableDateTime" data
		Given I set cookie with full SF info valid
		Given I open Scheduler page non-param
		Given Wait for Admin Ajax "1" times #Common
		Then I can see Location tab is active
		And I must see Default Banner and Disclaimer
		And I must see Previous Button
		And I must see Next Button
		Then On Location tab, I must see list valid locations have "1" item
		And On Location tab, I must see Video Consult box have "2" item
		And I must see Previous Button
		And I must see Next Button
		Then I must see Location form
		When I select first item in list Location
		Given Wait for Admin Ajax "2" times #Common
		Then I must see selected location info
		Then On Date-Time Tab, I see error message, button Call Now, links
		Examples:
        | firstName | lastName | email                | phone        | street | zipcode | gender |
        | Sen       | Vo       | sen.vo@9thwonder.com | 786-416-5792 | Test   | 91356   | Woman  |

	Scenario Outline: TC2_15: Pass TC2_03 -> chọn video consult không có slot trong vòng 15 ngày: show error
		Given Fake Admin Ajax Api with "fullDropdownUnAvailableDateTime" data
		Given I set cookie with full SF info valid
		Given I open Scheduler page non-param
		Given Wait for Admin Ajax "1" times #Common
		Then I can see Location tab is active
		And I must see Default Banner and Disclaimer
		And I must see Previous Button
		And I must see Next Button
		Then On Location tab, I must see list valid locations have "1" item
		And On Location tab, I must see Video Consult box have "2" item
		And I must see Previous Button
		And I must see Next Button
		Then I must see Location form
		When I select first item in list Video Consult
		Given Wait for Admin Ajax "2" times #Common
		Then On Date-Time Tab, I see error message, button Call Now, links
		Examples:
        | firstName | lastName | email                | phone        | street | zipcode | gender |
        | Sen       | Vo       | sen.vo@9thwonder.com | 786-416-5792 | Test   | 91356   | Woman  |

	Scenario Outline: TC2_16_01: Pass TC2_11 -> chọn location có slot trong vòng 15 ngày tiếp theo: hiển thị ngày giờ available, click load more => show available date
		Given Fake Admin Ajax Api with "fullDropdownHaveLoadMore" data
		Given I set cookie with full SF info valid
		Given I open Scheduler page non-param
		Given Wait for Admin Ajax "1" times #Common
		Then I can see Location tab is active
		And I must see Default Banner and Disclaimer
		And I must see Previous Button
		And I must see Next Button
		Then On Location tab, I must see list valid locations have "1" item
		And On Location tab, I must see Video Consult box have "2" item
		And I must see Previous Button
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
		Examples:
        | firstName | lastName | email                | phone        | street | zipcode | gender |
        | Sen       | Vo       | sen.vo@9thwonder.com | 786-416-5792 | Test   | 91356   | Woman  |

	Scenario Outline: TC2_16_02: Pass TC2_12 -> Chọn một Video Consult -> Tìm thấy các slot trong vòng 15 ngày
		Given Fake Admin Ajax Api with "fullDropdownHaveLoadMore" data
		Given I set cookie with full SF info valid
		Given I open Scheduler page non-param
		Given Wait for Admin Ajax "1" times #Common
		Then I can see Location tab is active
		And I must see Default Banner and Disclaimer
		And I must see Previous Button
		And I must see Next Button
		Then On Location tab, I must see list valid locations have "1" item
		And On Location tab, I must see Video Consult box have "2" item
		And I must see Previous Button
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
		Examples:
        | firstName | lastName | email                | phone        | street | zipcode | gender |
        | Sen       | Vo       | sen.vo@9thwonder.com | 786-416-5792 | Test   | 91356   | Woman  |

	Scenario Outline: TC2_17_01: Pass TC2_11 -> chọn location không có slot trong vòng 15 ngày tiếp theo
		Given Fake Admin Ajax Api with "fullDropdownNotHaveLoadMore" data
		Given I set cookie with full SF info valid
		Given I open Scheduler page non-param
		Given Wait for Admin Ajax "1" times #Common
		Then I can see Location tab is active
		And I must see Default Banner and Disclaimer
		And I must see Previous Button
		And I must see Next Button
		Then On Location tab, I must see list valid locations have "1" item
		And On Location tab, I must see Video Consult box have "2" item
		And I must see Previous Button
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
		Examples:
        | firstName | lastName | email                | phone        | street | zipcode | gender |
        | Sen       | Vo       | sen.vo@9thwonder.com | 786-416-5792 | Test   | 91356   | Woman  |

	Scenario Outline: TC2_17_02: Pass TC2_12 -> chọn Video Consult không có slot trong vòng 15 ngày tiếp theo
		Given Fake Admin Ajax Api with "fullDropdownNotHaveLoadMore" data
		Given I set cookie with full SF info valid
		Given I open Scheduler page non-param
		Given Wait for Admin Ajax "1" times #Common
		Then I can see Location tab is active
		And I must see Default Banner and Disclaimer
		And I must see Previous Button
		And I must see Next Button
		Then On Location tab, I must see list valid locations have "1" item
		And On Location tab, I must see Video Consult box have "2" item
		And I must see Previous Button
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
		Examples:
        | firstName | lastName | email                | phone        | street | zipcode | gender |
        | Sen       | Vo       | sen.vo@9thwonder.com | 786-416-5792 | Test   | 91356   | Woman  |

	Scenario Outline: TC2_18: Pass TC2_11 -> Show info date/time location tương ứng với những gì user chọn
		Given Fake Admin Ajax Api with "fullDropdown" data
		Given I set cookie with full SF info valid
		Given I open Scheduler page non-param
		Given Wait for Admin Ajax "1" times #Common
		Then I can see Location tab is active
		And I must see Default Banner and Disclaimer
		And I must see Previous Button
		And I must see Next Button
		Then On Location tab, I must see list valid locations have "1" item
		And On Location tab, I must see Video Consult box have "2" item
		And I must see Previous Button
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
		Examples:
        | firstName | lastName | email                | phone        | street | zipcode | gender |
        | Sen       | Vo       | sen.vo@9thwonder.com | 786-416-5792 | Test   | 91356   | Woman  |

	Scenario Outline: TC2_19: Pass TC2_18 -> book thành công
		Given Fake Admin Ajax Api with "fullDropdown" data
		Given I set cookie with full SF info valid
		Given I open Scheduler page non-param
		Given Wait for Admin Ajax "1" times #Common
		Then I can see Location tab is active
		And I must see Default Banner and Disclaimer
		And I must see Previous Button
		And I must see Next Button
		Then On Location tab, I must see list valid locations have "1" item
		And On Location tab, I must see Video Consult box have "2" item
		And I must see Previous Button
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
		Examples:
        | firstName | lastName | email                | phone        | street | zipcode | gender |
        | Sen       | Vo       | sen.vo@9thwonder.com | 786-416-5792 | Test   | 91356   | Woman  |

	Scenario Outline: TC2_20: Pass TC2_13 -> Show thêm vùng Consult language & Observation​ consent dưới btn book appointment
		Given Fake Admin Ajax Api with "fullDropdownHaveSelectTimezone" data
		Given I set cookie with full SF info valid
		Given I open Scheduler page non-param
		Given Wait for Admin Ajax "1" times #Common
		Then I can see Location tab is active
		And I must see Default Banner and Disclaimer
		And I must see Previous Button
		And I must see Next Button
		Then On Location tab, I must see list valid locations have "1" item
		And On Location tab, I must see Video Consult box have "2" item
		And I must see Previous Button
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
      | CT      |
      | ET      |

	Scenario Outline: TC2_21: Pass TC2_20 -> chọn option trong Consult language & Observation​ consent > click button "Book Appointment" > book thành công
		Given Fake Admin Ajax Api with "fullDropdownHaveSelectTimezone" data
		Given I set cookie with full SF info valid
		Given I open Scheduler page non-param
		Given Wait for Admin Ajax "1" times #Common
		Then I can see Location tab is active
		And I must see Default Banner and Disclaimer
		And I must see Previous Button
		And I must see Next Button
		Then On Location tab, I must see list valid locations have "1" item
		And On Location tab, I must see Video Consult box have "2" item
		And I must see Previous Button
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
    | zip     | timezone | consultLanguage | observationConcent |
    | 91356   | MT      | English         | yes                |
    | 91356   | MT      | Spanish         | yes                |
    | 91356   | MT      | English         | no                 |
    | 91356   | MT      | Spanish         | no                 |

	Scenario Outline: TC2_22_01: Pass TC2_18 -> Chọn 1 location -> click button "Book Appointment" > book không thành công vì slot đã được book (403 resources unavailable)
		Given Fake Admin Ajax Api with "fullDropdownBookFailed" data
		Given I set cookie with full SF info valid
		Given I open Scheduler page non-param
		Given Wait for Admin Ajax "1" times #Common
		Then I can see Location tab is active
		And I must see Default Banner and Disclaimer
		And I must see Previous Button
		And I must see Next Button
		Then On Location tab, I must see list valid locations have "1" item
		And On Location tab, I must see Video Consult box have "2" item
		And I must see Previous Button
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
		Examples:
        | firstName | lastName | email                | phone        | street | zipcode | gender |
        | Sen       | Vo       | sen.vo@9thwonder.com | 786-416-5792 | Test   | 91356   | Woman  |

	Scenario Outline: TC2_22_02: Pass TC2_20 -> Chọn Video Consult -> user click button "Book Appointment" > book không thành công vì slot đã được book (403 resources unavailable)
		Given Fake Admin Ajax Api with "fullDropdownHaveSelectTimezoneBookFailed" data
		Given I set cookie with full SF info valid
		Given I open Scheduler page non-param
		Given Wait for Admin Ajax "1" times #Common
		Then I can see Location tab is active
		And I must see Default Banner and Disclaimer
		And I must see Previous Button
		And I must see Next Button
		Then On Location tab, I must see list valid locations have "1" item
		And On Location tab, I must see Video Consult box have "2" item
		And I must see Previous Button
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
      | zip     | timezone |
      | 91356   | MT      |

	Scenario Outline: TC2_23_01: Pass TC2_18 -> Chọn 1 location ->  click button "Book Appointment" > book không thành công vì lý do gì đó khác status 403 resources unavailable
		Given Fake Admin Ajax Api with "fullDropdown" data
		Given I set cookie with full SF info valid
		Given I open Scheduler page non-param
		Given Wait for Admin Ajax "1" times #Common
		Then I can see Location tab is active
		And I must see Default Banner and Disclaimer
		And I must see Previous Button
		And I must see Next Button
		Then On Location tab, I must see list valid locations have "1" item
		And On Location tab, I must see Video Consult box have "2" item
		And I must see Previous Button
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
		Examples:
        | firstName | lastName | email                | phone        | street | zipcode | gender |
        | Sen       | Vo       | sen.vo@9thwonder.com | 786-416-5792 | Test   | 91356   | Woman  |

	Scenario Outline: TC2_23_02: Pass TC2_20 -> Chọn Video Consult -> user click button "Book Appointment" > book không thành công vì lý do gì đó khác status 403 resources unavailable
		Given Fake Admin Ajax Api with "fullDropdownHaveSelectTimezone" data
		Given I set cookie with full SF info valid
		Given I open Scheduler page non-param
		Given Wait for Admin Ajax "1" times #Common
		Then I can see Location tab is active
		And I must see Default Banner and Disclaimer
		And I must see Previous Button
		And I must see Next Button
		Then On Location tab, I must see list valid locations have "1" item
		And On Location tab, I must see Video Consult box have "2" item
		And I must see Previous Button
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
      | zip | timezone |
      | 91356   | MT      |

	Scenario Outline: TC2_24_01: Pass TC2_05 -> Chọn Instant Video button > book thành công
		Given Fake Admin Ajax Api with "fullDropdownHaveConfirm" data
		Given I set cookie with full SF info valid
		Given I open Scheduler page non-param
		Given Wait for Admin Ajax "1" times #Common
		Then I can see Location tab is active
		And I must see Default Banner and Disclaimer
		And I must see Previous Button
		And I must see Next Button
		And The selected location has slot of today > 1 which time I access has condition with next slot 5 mins <= Time <= 30mins
		And I must see Instant Video
		And I must see Previous Button
		And I must see Next Button
		When I select Instant Video box
		Then I must see Popup Confirm Timezone
		When I click Confirm in Popup Confirm Timezone
		Given Wait for Admin Ajax "2" times #Common
		Then Now I have been redirected to bosley doxy page have query "<firstName>" and "<lastName>"
		Examples:
        | firstName | lastName | email                | phone        | street | zipcode | gender |
        | Sen       | Vo       | sen.vo@9thwonder.com | 786-416-5792 | Test   | 91356   | Woman  |

	Scenario Outline: TC2_24_02: Pass TC2_10 -> Chọn Instant Video button > book thành công
		Given Fake Admin Ajax Api with "fullDropdownHaveConfirm" data
		Given I set cookie with full SF info valid
		Given I open Scheduler page non-param
		Given Wait for Admin Ajax "1" times #Common
		Then I can see Location tab is active
		And I must see Default Banner and Disclaimer
		And I must see Previous Button
		And I must see Next Button
		And The selected location has slot which time I access has condition with next slot has time < 5 mins
		And I must see Instant Video
		And I must see Previous Button
		And I must see Next Button
		When I select Instant Video box
		Then I must see Popup Confirm Timezone
		When I click Confirm in Popup Confirm Timezone
		Given Wait for Admin Ajax "2" times #Common
		Then Now I have been redirected to bosley doxy page have query "<firstName>" and "<lastName>"
		Examples:
        | firstName | lastName | email                | phone        | street | zipcode | gender |
        | Sen       | Vo       | sen.vo@9thwonder.com | 786-416-5792 | Test   | 91356   | Woman  |

	Scenario Outline: TC2_25_01: Pass TC2_10 -> Chọn Instant Video button > book không thành công
		Given Fake Admin Ajax Api with "fullDropdownHaveConfirm" data
		Given I set cookie with full SF info valid
		Given I open Scheduler page non-param
		Given Wait for Admin Ajax "1" times #Common
		Then I can see Location tab is active
		And I must see Default Banner and Disclaimer
		And I must see Previous Button
		And I must see Next Button
		And The selected location has slot which time I access has condition with next slot has time < 5 mins
		And I must see Instant Video
		And I must see Previous Button
		And I must see Next Button
		When I select Instant Video box
		Then I must see Popup Confirm Timezone
		When I click Confirm in Popup Confirm Timezone
		Given Wait for Admin Ajax "2" times #Common
		Then Now I have been redirected to bosley doxy page have query "<firstName>" and "<lastName>"
		Examples:
        | firstName | lastName | email                | phone        | street | zipcode | gender |
        | Sen       | Vo       | sen.vo@9thwonder.com | 786-416-5792 | Test   | 91356   | Woman  |

	Scenario Outline: TC2_25_02: Pass TC2_05 -> Chọn Instant Video button > book không thành công
		Given Fake Admin Ajax Api with "fullDropdownHaveConfirm" data
		Given I set cookie with full SF info valid
		Given I open Scheduler page non-param
		Given Wait for Admin Ajax "1" times #Common
		Then I can see Location tab is active
		And I must see Default Banner and Disclaimer
		And I must see Previous Button
		And I must see Next Button
		And The selected location has slot of today > 1 which time I access has condition with next slot 5 mins <= Time <= 30mins
		And I must see Instant Video
		And I must see Previous Button
		And I must see Next Button
		When I select Instant Video box
		Then I must see Popup Confirm Timezone
		When I click Confirm in Popup Confirm Timezone
		Given Wait for Admin Ajax "2" times #Common
		Then Now I have been redirected to bosley doxy page have query "<firstName>" and "<lastName>"
		Examples:
        | firstName | lastName | email                | phone        | street | zipcode | gender |
        | Sen       | Vo       | sen.vo@9thwonder.com | 786-416-5792 | Test   | 91356   | Woman  |
