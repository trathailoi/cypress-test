Feature: Scheduler
	Test Scheduler Appointment Confirmation
	Scenario: TC8_01: Vào page Appointment Confirm > check apptid không tồn tại
		Given I open Scheduler Appointment Confirm page with param has not exist apptid
		Then I can see message this Appointment not found

	Scenario: TC8_02: Vào page Appointment Confirm > check apptid không hợp lệ
		Given I open Scheduler Appointment Confirm page with param has invalid apptid
		Then I can see message this Appointment not found


	Scenario: TC8_03: Vào page Appointment Confirm > check apptid tồn tại: (có detailID)(user chưa confirm nhưng đã cancel)
		Given I open Scheduler Appointment Confirm page with param has valid apptid
		And This Appointment has detail which Status = "Canceled" and Confirmed = "no"
		Then I can see page with Cancel message
		And I can see detail of appointment: Date, Time, Location
		And I can see 1 button Reschedule


	Scenario: TC8_04: Vào page Appointment Confirm > check apptid tồn tại: (có detailID)(appoinment của Location)(user chưa confirm và chưa cancel)
		Given I open Scheduler Appointment Confirm page with param has valid apptid
		And This Location Appointment has detail which Status = "null" and Confirmed = "no"
		Then I can see page with request confirm message
		And I can see detail of appointment: Date, Time, Location with address
		And I can	see 3 button Reschedule, Confirm, Cancel


	Scenario: TC8_05: Vào page Appointment Confirm > check apptid tồn tại: (có detailID)(appoinment của Video)(user chưa confirm và chưa cancel)
		Given I open Scheduler Appointment Confirm page with param has valid apptid
		And This Video Appointment has detail which Status = "null" and Confirmed = "no"
		Then I can see page with request confirm message
		And I can see detail of appointment: Date, Time, Location with video info
		And I can	see 3 button Reschedule, Confirm, Cancel


	Scenario: TC8_06: Vào page Appointment Confirm > check apptid tồn tại: (có detailID)(user đã confirm)
		Given I open Scheduler Appointment Confirm page with param has valid apptid
		And This Appointment has detail which Confirmed = "yes"
		Then I can see page with Confirmed message
		And I can see detail of appointment: Date, Time, Location
		And I can	see 4 button add Calendar
		And I can	see 2 button Reschedule, Cancel


	Scenario: TC8_07_1: Pass TC8_03 -> Vào page Appointment Confirm (Appointment chưa confirmed và đã cancel) > click button Rescheduler
		Given I open Scheduler Appointment Confirm page with param has valid apptid
		And This Appointment has detail which Status = "Canceled" and Confirmed = "no"
		Then I can see page with Cancel message
		And I can see detail of appointment: Date, Time, Location
		And I can see 1 button Reschedule
		When I click button Reschedule
		Then I must see Location form with param has SFID and tab1 Name is "Schedule a Free Consultation Now​"


	Scenario: TC8_07_2: Pass TC8_04 -> Vào page Appointment Confirm (Appointment chưa confirm của location) > click button Rescheduler
		Given I open Scheduler Appointment Confirm page with param has valid apptid
		And This Location Appointment has detail which Status = "null" and Confirmed = "no"
		Then I can see page with request confirm message
		And I can see detail of appointment: Date, Time, Location with address
		And I can	see 3 button Reschedule, Confirm, Cancel
		When I click button Reschedule
		Then I must see Location form with param has SFID and tab1 Name is "Schedule a Free Consultation Now​"


	Scenario: TC8_07_3: Pass TC8_05 -> Vào page Appointment Confirm (Appointment chưa confirm của video) > click button Rescheduler
		Given I open Scheduler Appointment Confirm page with param has valid apptid
		And This Video Appointment has detail which Status = "null" and Confirmed = "no"
		Then I can see page with request confirm message
		And I can see detail of appointment: Date, Time, Location with video info
		And I can	see 3 button Reschedule, Confirm, Cancel
		When I click button Reschedule
		Then I must see Location form with param has SFID and tab1 Name is "Schedule a Free Consultation Now​"


	Scenario: TC8_07_4: Pass TC8_06 -> Vào page Appointment Confirm (Appointment đã confirmed) > click button Rescheduler
		Given I open Scheduler Appointment Confirm page with param has valid apptid
		And This Appointment has detail which Confirmed = "yes"
		Then I can see page with Confirmed message
		And I can see detail of appointment: Date, Time, Location
		And I can	see 4 button add Calendar
		And I can	see 2 button Reschedule, Cancel
		When I click button Reschedule
		Then I must see Location form with param has SFID and tab1 Name is "Schedule a Free Consultation Now​"


	Scenario: TC8_08_1: Pass TC8_04 -> Vào page Appointment Confirm > check apptid tồn tại (Appointment chưa confirm của location) > click button Confirm bị false
		Given I open Scheduler Appointment Confirm page with param has valid apptid
		And This Location Appointment has detail which Status = "null" and Confirmed = "no"
		Then I can see page with request confirm message
		And I can see detail of appointment: Date, Time, Location with address
		And I can	see 3 button Reschedule, Confirm, Cancel
		When I click button Confirm
		Then I can see message this Appointment not found


	Scenario: TC8_08_2: Pass TC8_05 -> Vào page Appointment Confirm > check apptid tồn tại (Appointment chưa confirm của video) > click button Confirm bị false
		Given I open Scheduler Appointment Confirm page with param has valid apptid
		And This Video Appointment has detail which Status = "null" and Confirmed = "no"
		Then I can see page with request confirm message
		And I can see detail of appointment: Date, Time, Location with video info
		And I can	see 3 button Reschedule, Confirm, Cancel
		When I click button Confirm
		Then I can see message this Appointment not found


	Scenario: TC8_09_1: Pass TC8_04 -> Vào page Appointment Confirm > check apptid tồn tại (Appointment chưa confirm của location) > click button Confirm thành công
		Given I open Scheduler Appointment Confirm page with param has valid apptid
		And This Location Appointment has detail which Status = "null" and Confirmed = "no"
		Then I can see page with request confirm message
		And I can see detail of appointment: Date, Time, Location with address
		And I can	see 3 button Reschedule, Confirm, Cancel
		When I click button Confirm
		Then I can see page with Confirmed message
		And I can see detail of appointment: Date, Time, Location
		And I can see 4 button add Calendar
		And I can see 2 button Reschedule, Cancel


	Scenario: TC8_09_2: Pass TC8_05 -> Vào page Appointment Confirm > check apptid tồn tại (Appointment chưa confirm của video) > click button Confirm thành công
		Given I open Scheduler Appointment Confirm page with param has valid apptid
		And This Video Appointment has detail which Status = "null" and Confirmed = "no"
		Then I can see page with request confirm message
		And I can see detail of appointment: Date, Time, Location with video info
		And I can	see 3 button Reschedule, Confirm, Cancel
		When I click button Confirm
		Then I can see page with Confirmed message
		And I can see detail of appointment: Date, Time, Location
		And I can see 4 button add Calendar
		And I can see 2 button Reschedule, Cancel


	Scenario: TC8_10_1: Pass TC8_04 -> Vào page Appointment Confirm > check apptid tồn tại (Appointment chưa confirm của location)> click button Cancel & No,Go back
		Given I open Scheduler Appointment Confirm page with param has valid apptid
		And This Location Appointment has detail which Status = "null" and Confirmed = "no"
		Then I can see page with request confirm message
		And I can see detail of appointment: Date, Time, Location with address
		And I can	see 3 button Reschedule, Confirm, Cancel
		When I click button Cancel
		Then I can see popup Cancel
		When I click button No,Go back on popup Cancel
		Then I can see page with request confirm message
		And I can see detail of appointment: Date, Time, Location with address
		And I can see 3 button Reschedule, Confirm, Cancel


	Scenario: TC8_10_2: Pass TC8_05 -> Vào page Appointment Confirm > check apptid tồn tại (Appointment chưa confirm của video) > click button Cancel & No,Go back
		Given I open Scheduler Appointment Confirm page with param has valid apptid
		And This Video Appointment has detail which Status = "null" and Confirmed = "no"
		Then I can see page with request confirm message
		And I can see detail of appointment: Date, Time, Location with video info
		And I can	see 3 button Reschedule, Confirm, Cancel
		When I click button Cancel
		Then I can see popup Cancel
		When I click button No,Go back on popup Cancel
		Then I can see page with request confirm message
		And I can see detail of appointment: Date, Time, Location with video info
		And I can	see 3 button Reschedule, Confirm, Cancel


	Scenario: TC8_10_3: Pass TC8_06 -> Vào page Appointment Confirm > check apptid tồn tại (Appointment đã confirmed)> click button Cancel & No,Go back
		Given I open Scheduler Appointment Confirm page with param has valid apptid
		And This Appointment has detail which Confirmed = "yes"
		Then I can see page with Confirmed message
		And I can see detail of appointment: Date, Time, Location
		And I can	see 4 button add Calendar
		And I can	see 2 button Reschedule, Cancel
		When I click button Cancel
		Then I can see popup Cancel
		When I click button No,Go back on popup Cancel
		Then I can see page with Confirmed message
		And I can see detail of appointment: Date, Time, Location
		And I can see 4 button add Calendar
		And I can see 2 button Reschedule, Cancel


	Scenario: TC8_11_1: Pass TC8_04 -> Vào page Appointment Confirm > check apptid tồn tại (Appointment chưa confirm của location)> click button Cancel & Yes,Cancel bị false
		Given I open Scheduler Appointment Confirm page with param has valid apptid
		And This Location Appointment has detail which Status = "null" and Confirmed = "no"
		Then I can see page with request confirm message
		And I can see detail of appointment: Date, Time, Location with address
		And I can	see 3 button Reschedule, Confirm, Cancel
		When I click button Cancel
		Then I can see popup Cancel
		When I click button Yes,Cancel on popup Cancel
		Then I can see message this Appointment not found


	Scenario: TC8_11_2: Pass TC8_05 -> Vào page Appointment Confirm > check apptid tồn tại (Appointment chưa confirm của video) > click button Cancel & Yes,Cancel bị false
		Given I open Scheduler Appointment Confirm page with param has valid apptid
		And This Video Appointment has detail which Status = "null" and Confirmed = "no"
		Then I can see page with request confirm message
		And I can see detail of appointment: Date, Time, Location with video info
		And I can	see 3 button Reschedule, Confirm, Cancel
		When I click button Cancel
		Then I can see popup Cancel
		When I click button Yes,Cancel on popup Cancel
		Then I can see message this Appointment not found


	Scenario: TC8_11_3: Pass TC8_06 -> Vào page Appointment Confirm > check apptid tồn tại (Appointment đã confirmed)> click button Cancel & Yes,Cancel bị false
		Given I open Scheduler Appointment Confirm page with param has valid apptid
		And This Appointment has detail which Confirmed = "yes"
		Then I can see page with Confirmed message
		And I can see detail of appointment: Date, Time, Location
		And I can	see 4 button add Calendar
		And I can	see 2 button Reschedule, Cancel
		When I click button Cancel
		Then I can see popup Cancel
		When I click button Yes,Cancel on popup Cancel
		Then I can see message this Appointment not found


	Scenario: TC8_12_1: Pass TC8_04 -> Vào page Appointment Confirm > check apptid tồn tại (Appointment chưa confirm của location)> click button Cancel & Yes,Cancel thành công
		Given I open Scheduler Appointment Confirm page with param has valid apptid
		And This Location Appointment has detail which Status = "null" and Confirmed = "no"
		Then I can see page with request confirm message
		And I can see detail of appointment: Date, Time, Location with address
		And I can	see 3 button Reschedule, Confirm, Cancel
		When I click button Cancel
		Then I can see popup Cancel
		When I click button Yes,Cancel on popup Cancel
		Then I can see page with Cancel message
		And I can see detail of appointment: Date, Time, Location
		And I can see 1 button Reschedule


	Scenario: TC8_12_2: Pass TC8_05 -> Vào page Appointment Confirm > check apptid tồn tại (Appointment chưa confirm của video) > click button Cancel & Yes,Cancel thành công
		Given I open Scheduler Appointment Confirm page with param has valid apptid
		And This Video Appointment has detail which Status = "null" and Confirmed = "no"
		Then I can see page with request confirm message
		And I can see detail of appointment: Date, Time, Location with video info
		And I can	see 3 button Reschedule, Confirm, Cancel
		When I click button Cancel
		Then I can see popup Cancel
		When I click button Yes,Cancel on popup Cancel
		Then I can see page with Cancel message
		And I can see detail of appointment: Date, Time, Location
		And I can see 1 button Reschedule


	Scenario: TC8_12_3: Pass TC8_06 -> Vào page Appointment Confirm > check apptid tồn tại (Appointment đã confirmed)> click button Cancel & Yes,Cancel thành công
		Given I open Scheduler Appointment Confirm page with param has valid apptid
		And This Appointment has detail which Confirmed = "yes"
		Then I can see page with Confirmed message
		And I can see detail of appointment: Date, Time, Location
		And I can	see 4 button add Calendar
		And I can	see 2 button Reschedule, Cancel
		When I click button Cancel
		Then I can see popup Cancel
		When I click button Yes,Cancel on popup Cancel
		Then I can see page with Cancel message
		And I can see detail of appointment: Date, Time, Location
		And I can see 1 button Reschedule

