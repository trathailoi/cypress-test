const { generateScenario } = require('./utils')

const generateScenariosFunction = () => {
  const allScenarioObject = {
    TC6_01: {
      type: 'Scenario',
      description: 'Check TH URL có params chứa key/value MATCH với key/value trong CMS, SFID không hợp lệ, Cookies đã có SFID',
      steps: [
        'Given I set cookie SFID valid',
        'Given I open Scheduler page with valid banner param, invalid crmid',
        'Then I can see About you form #CommonPhase1',
        'And I must see Banner and Disclaimer match with banner value in params'
      ]
    }
  }
  
  generateScenario('TC6_02', allScenarioObject, {
    required: 'TC6_01',
    description: 'Submit form About You #POSITIVE',
    dynamic: {
      _fakeData: 'fullDropdown'
    },
    steps: [
      'Given Fake Admin Ajax Api with "_fakeData" data',
      'When I enter new user with name is "<firstName>" "<lastName>" "<email>" "<phone>" "<street>" "<zipcode>" "<gender>" #CommonPhase1',
      'And I submit Next Step button at About you form #CommonPhase1',
      'Given Wait for Admin Ajax "1" times #Common',
      'Given Wait for Admin Ajax "2" times #Common',
      'Then I must see Location form',
      'And I must see Banner and Disclaimer match with banner value in params'
    ],
    examples: `
      | firstName | lastName | email                | phone        | street | zipcode | gender |
      | Sen       | Vo       | sen.vo@9thwonder.com | 786-416-5792 | Test   | 91356   | Woman  |`
  })
  
  generateScenario('TC6_03', allScenarioObject, {
    required: 'TC6_01',
    description: 'Submit form About You > zipcode/email không valid #NEGATIVE',
    dynamic: {
      _fakeData: 'fullDropdown'
    },
    steps: [
      'Given Fake Admin Ajax Api with "_fakeData" data',
      'When I enter new user with name is "<firstName>" "<lastName>" "<email>" "<phone>" "<street>" "<zipcode>" "<gender>" #CommonPhase1',
      'And I submit Next Step button at About you form #CommonPhase1',
      'Then I can see About you form #CommonPhase1',
      'And I must see Banner and Disclaimer match with banner value in params',
      'Then I must see validate field has red box-border'
    ],
    examples: `
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
      | Julian    | Jones    | mymail..1234@yahoo.com | 786-416-5794 | 1962 Rinehart Road | 91356   | Man    |`
  })
  
  generateScenario('TC6_04', allScenarioObject, {
    required: 'TC6_02',
    description: 'Ở Tab Location, Có data từ SF trả về tương ứng với zipcode của user cho In Person và  Video Consult luôn luôn hiển thị #POSITIVE',
    dynamic: {
      _fakeData: 'fullDropdown'
    },
    steps: [
      'Then On Location tab, I must see list valid locations have "1" item',
      'And On Location tab, I must see Video Consult box have "2" item',
      'And I must see Previous Button',
      'And I must see Next Button'
    ],
    reuseExamples: true
  })
  
  generateScenario('TC6_05', allScenarioObject, {
    required: 'TC6_02',
    description: 'Ở tab Location không có location nào tương ứng với Zipcode #NEGATIVE',
    dynamic: {
      _fakeData: 'emptyDropdown'
    },
    steps: [
      `Then On Location tab, I don't see Location list`,
      'And On Location tab, I must see Video Consult box have "2" item',
      `And I must see Previous Button`,
      `And I must see Next Button`
    ],
    reuseExamples: true
  })

  generateScenario('TC6_06', allScenarioObject, {
    required: 'TC6_02',
    description: 'Ở tab Location hiện box Instant Video:(có data)(slot>1)(5mins<=Time<=30mins) #POSITIVE',
    dynamic: {
      _fakeData: 'fullDropdown'
    },
    steps: [
      'And The selected location has slot of today > 1 which time I access has condition with next slot 5 mins <= Time <= 30mins',
      'And I must see Instant Video',
      'And I must see Previous Button',
      'And I must see Next Button'
    ],
    reuseExamples: true
  })

  generateScenario('TC6_07', allScenarioObject, {
    required: 'TC6_02',
    description: 'Ở tab Location Không hiện box Instant Video:(không có data) #NEGATIVE',
    dynamic: {
      _fakeData: 'emptyDropdown'
    },
    steps: [
      `Then On Location tab, I don't see Instant Video box`,
      'And I must see Previous Button',
      'And I must see Next Button',
    ],
    reuseExamples: true
  })

  generateScenario('TC6_08', allScenarioObject, {
    required: 'TC6_02',
    description: 'Ở tab Location Không hiện box Instant Video:(có data)(Time>30mins)',
    dynamic: {
      _fakeData: 'withoutInstantVideo'
    },
    steps: [
      'And Time user > 30 mins before start next slot',
      `Then On Location tab, I don't see Instant Video box`,
      'And I must see Previous Button',
      'And I must see Next Button',
    ],
    reuseExamples: true
  })

  generateScenario('TC6_09', allScenarioObject, {
    required: 'TC6_02',
    description: 'Ở tab Location Không hiện box Instant Video:(có data)(slot<=1)(5mins<=Time<=30mins)',
    dynamic: {
      _fakeData: 'withoutInstantVideo'
    },
    steps: [
      'And The selected location has slot of today <= 1 which time I access has condition with next slot 5 mins <= Time <= 30mins',
      `Then On Location tab, I don't see Instant Video box`,
      'And I must see Previous Button',
      'And I must see Next Button',
    ],
    reuseExamples: true
  })

  generateScenario('TC6_10', allScenarioObject, {
    required: 'TC6_02',
    description: 'Ở vào tab Location Không hiện box Instant Video:(có data)(slot<=1)(5mins<=Time)',
    dynamic: {
      _fakeData: 'withoutInstantVideo'
    },
    steps: [
      'And The selected location has slot of today <= 1 which time I access has condition with next slot has time < 5 mins',
      `Then On Location tab, I don't see Instant Video box`,
      'And I must see Previous Button',
      'And I must see Next Button',
    ],
    reuseExamples: true
  })

  generateScenario('TC6_11', allScenarioObject, {
    required: 'TC6_02',
    description: 'Ở tab Location hiện box Instant Video:(có data)(5mins<Time)',
    dynamic: {
      _fakeData: 'fullDropdown'
    },
    steps: [
      'And The selected location has slot which time I access has condition with next slot has time < 5 mins',
      'And I must see Instant Video',
      'And I must see Previous Button',
      'And I must see Next Button',
    ],
    reuseExamples: true
  })

  generateScenario('TC6_12', allScenarioObject, {
    required: 'TC6_04',
    description: 'Chọn một location -> Tìm thấy các slot trong vòng 15 ngày',
    dynamic: {
      _fakeData: 'fullDropdown'
    },
    steps: [
      'Then I must see Location form',
      'When I select first item in list Location',
      'And I submit Next Step button at Location Tab',
      'Given Wait for Admin Ajax "3" times #Common',
      'Then I must see selected location info',
      'Then On Date-Time Tab, I must see list date available',
      'When I select date',
      'Then I must see list times',
    ],
    reuseExamples: true
  })

  generateScenario('TC6_13', allScenarioObject, {
    required: 'TC6_04',
    description: 'Chọn một Video Consult -> Tìm thấy các slot trong vòng 15 ngày',
    dynamic: {
      _fakeData: 'fullDropdown'
    },
    steps: [
      'Then I must see Location form',
      'When I select first item in list Video Consult',
      'And I submit Next Step button at Location Tab',
      'Given Wait for Admin Ajax "3" times #Common',
      'Then On Date-Time Tab, I must see list date available',
      'When I select date',
      'Then I must see dropdown timezone with default value "PT"',
      'And I must see list times',
    ],
    reuseExamples: true
  })

  generateScenario('TC6_14', allScenarioObject, {
    required: 'TC6_13',
    description: 'Chọn một Video Consult -> Tìm thấy các slot trong vòng 15 ngày, user switch timezone',
    dynamic: {
      _fakeData: 'fullDropdownHaveSelectTimezone'
    },
    steps: [
      'When I select timezone with "<timezone>" value',
      'Given Wait for Admin Ajax "4" times #Common',
      'Then On Date-Time Tab, I must see list date available',
      'When I select date',
      'Then I must see list times',
    ],
    examples: `
      | firstName | lastName | email                | phone        | street | zipcode | gender | timezone |
      | Sen       | Vo       | sen.vo@9thwonder.com | 786-416-5792 | Test   | 91356   | Woman  | MT      |
      | Sen       | Vo       | sen.vo@9thwonder.com | 786-416-5792 | Test   | 91356   | Woman  | CT      |
      | Sen       | Vo       | sen.vo@9thwonder.com | 786-416-5792 | Test   | 91356   | Woman  | ET      |`
  })

  generateScenario('TC6_15', allScenarioObject, {
    required: 'TC6_04',
    description: 'chọn location không có slot trong vòng 15 ngày: show error',
    dynamic: {
      _fakeData: 'fullDropdownUnAvailableDateTime'
    },
    steps: [
      'Then I must see Location form',
      'When I select first item in list Location',
      'And I submit Next Step button at Location Tab',
      'Given Wait for Admin Ajax "3" times #Common',
      'Then I must see selected location info',
      'And On Date-Time Tab, I see error message, button Call Now, links'
    ],
    reuseExamples: true
  })

  generateScenario('TC6_16', allScenarioObject, {
    required: 'TC6_04',
    description: 'chọn video consult không có slot trong vòng 15 ngày: show error',
    dynamic: {
      _fakeData: 'fullDropdownUnAvailableDateTime'
    },
    steps: [
      'Then I must see Location form',
      'When I select first item in list Video Consult',
      'And I submit Next Step button at Location Tab',
      'Given Wait for Admin Ajax "3" times #Common',
      'Then On Date-Time Tab, I see error message, button Call Now, links',
    ],
    reuseExamples: true
  })

  generateScenario('TC6_17_01', allScenarioObject, {
    required: 'TC6_12',
    description: 'chọn location có slot trong vòng 15 ngày tiếp theo: hiển thị ngày giờ available, click load more => show available date',
    dynamic: {
      _fakeData: 'fullDropdownHaveLoadMore'
    },
    steps: [
      'When I click button next slide in list date',
      'Then I see button load more dates',
      'And I click load more dates',
      'Given Wait for Admin Ajax "4" times #Common',
      'Then On Date-Time Tab, I must see list date available have "32" item',
      'And I see button load more dates',
    ],
    reuseExamples: true
  })

  generateScenario('TC6_17_02', allScenarioObject, {
    required: 'TC6_13',
    description: 'Chọn một Video Consult -> Tìm thấy các slot trong vòng 15 ngày',
    dynamic: {
      _fakeData: 'fullDropdownHaveLoadMore'
    },
    steps: [
      'When I click button next slide in list date',
      'Then I see button load more dates',
      'And I click load more dates',
      'Given Wait for Admin Ajax "4" times #Common',
      'Then On Date-Time Tab, I must see list date available have "32" item',
      'And I see button load more dates',
    ],
    reuseExamples: true
  })

  generateScenario('TC6_18_01', allScenarioObject, {
    required: 'TC6_12',
    description: 'chọn location không có slot trong vòng 15 ngày tiếp theo',
    dynamic: {
      _fakeData: 'fullDropdownNotHaveLoadMore'
    },
    steps: [
      'When I click button next slide in list date',
      'Then I see button load more dates',
      'And I click load more dates',
      'Given Wait for Admin Ajax "4" times #Common',
      'Then On Date-Time Tab, I must see list date available have "32" item',
      'When I click button next slide in list date',
      'When I click button next slide in list date',
      'And I click load more dates',
      'Given Wait for Admin Ajax "5" times #Common',
      'When I click button next slide in list date',
      'Then I must see No more dates availables',
    ],
    reuseExamples: true
  })

  generateScenario('TC6_18_02', allScenarioObject, {
    required: 'TC6_13',
    description: 'chọn Video Consult không có slot trong vòng 15 ngày tiếp theo',
    dynamic: {
      _fakeData: 'fullDropdownNotHaveLoadMore'
    },
    steps: [
      'When I click button next slide in list date',
      'Then I see button load more dates',
      'And I click load more dates',
      'Given Wait for Admin Ajax "4" times #Common',
      'Then On Date-Time Tab, I must see list date available have "32" item',
      'When I click button next slide in list date',
      'When I click button next slide in list date',
      'And I click load more dates',
      'Given Wait for Admin Ajax "5" times #Common',
      'When I click button next slide in list date',
      'Then I must see No more dates availables',
    ],
    reuseExamples: true
  })

  generateScenario('TC6_19', allScenarioObject, {
    required: 'TC6_12',
    description: 'Show info date/time location tương ứng với những gì user chọn',
    dynamic: {
      _fakeData: 'fullDropdown'
    },
    steps: [
      'When I select first item in list time',
      'Then I can see book appoinment info and "location" info',
    ],
    reuseExamples: true
  })

  generateScenario('TC6_20', allScenarioObject, {
    required: 'TC6_19',
    description: 'book thành công',
    dynamic: {
      _fakeData: 'fullDropdown'
    },
    steps: [
      'When I submit Book Appointment',
      'Then After call Api "4" times, I must see book appointment of "location" thank you page',
    ],
    reuseExamples: true
  })

  generateScenario('TC6_21', allScenarioObject, {
    required: 'TC6_14',
    description: 'Show thêm vùng Consult language & Observation​ consent dưới btn book appointment',
    dynamic: {
      _fakeData: 'fullDropdownHaveSelectTimezone'
    },
    steps: [
      'When I select first item in list time',
      'Then I can see book appoinment info and "video" info',
      'And I can see consult language and observation consent',
    ],
    reuseExamples: true
  })

  generateScenario('TC6_22', allScenarioObject, {
    required: 'TC6_21',
    description: 'chọn option trong Consult language & Observation​ consent > click button "Book Appointment" > book thành công',
    dynamic: {
      _fakeData: 'fullDropdownHaveSelectTimezone'
    },
    steps: [
      'Then I choose consult language "<consultLanguage>" and observation consent "<observationConcent>"',
      'When I submit Book Appointment',
      'Then After call Api "5" times, I must see book appointment of "video" thank you page',
    ],
    examples: `
      | firstName | lastName | email                | phone        | street | zipcode | gender | timezone | consultLanguage | observationConcent |
      | Sen       | Vo       | sen.vo@9thwonder.com | 786-416-5792 | Test   | 91356   | Woman  | MT      | English         | yes                |
      | Sen       | Vo       | sen.vo@9thwonder.com | 786-416-5792 | Test   | 91356   | Woman  | MT      | Spanish         | yes                |
      | Sen       | Vo       | sen.vo@9thwonder.com | 786-416-5792 | Test   | 91356   | Woman  | MT      | English         | no                 |
      | Sen       | Vo       | sen.vo@9thwonder.com | 786-416-5792 | Test   | 91356   | Woman  | MT      | Spanish         | no                 |`
  })

  generateScenario('TC6_23_01', allScenarioObject, {
    required: 'TC6_19',
    description: 'Chọn 1 location -> click button "Book Appointment" > book không thành công vì slot đã được book (404 resources unavailable)',
    dynamic: {
      _fakeData: 'fullDropdownBookFailed'
    },
    steps: [
      'When I submit Book Appointment',
      'Then After call Api "4" times, I book appointment failed',
    ],
    reuseExamples: true
  })

  generateScenario('TC6_23_02', allScenarioObject, {
    required: 'TC6_21',
    description: 'Chọn Video Consult -> user click button "Book Appointment" > book không thành công vì slot đã được book (404 resources unavailable)',
    dynamic: {
      _fakeData: 'fullDropdownHaveSelectTimezoneBookFailed'
    },
    steps: [
      'When I submit Book Appointment',
      'Then After call Api "5" times, I book appointment failed',
    ],
    examples: `
    | firstName | lastName | email                | phone        | street | zipcode | gender | timezone |
    | Sen       | Vo       | sen.vo@9thwonder.com | 786-416-5792 | Test   | 91356   | Woman  | MT      |`
  })

  generateScenario('TC6_24_01', allScenarioObject, {
    required: 'TC6_19',
    description: 'Chọn 1 location ->  click button "Book Appointment" > book không thành công vì lý do gì đó khác status 404 resources unavailable',
    dynamic: {
      _fakeData: 'fullDropdown'
    },
    steps: [
      'When I submit Book Appointment',
      'Then After call Api "4" times, I must see book appointment of "location" thank you page',
    ],
    reuseExamples: true
  })

  generateScenario('TC6_24_02', allScenarioObject, {
    required: 'TC6_21',
    description: 'Chọn Video Consult -> user click button "Book Appointment" > book không thành công vì lý do gì đó khác status 404 resources unavailable',
    dynamic: {
      _fakeData: 'fullDropdownHaveSelectTimezone'
    },
    steps: [
      'When I submit Book Appointment',
      'Then After call Api "5" times, I must see book appointment of "video" thank you page',
    ],
    examples: `
      | firstName | lastName | email                | phone        | street | zipcode | gender | timezone |
      | Sen       | Vo       | sen.vo@9thwonder.com | 786-416-5792 | Test   | 91356   | Woman  | MT      |`
  })

  generateScenario('TC6_25_01', allScenarioObject, {
    required: 'TC6_06',
    description: 'Chọn Instant Video button > book thành công',
    dynamic: {
      _fakeData: 'fullDropdownHaveConfirm'
    },
    steps: [
      'When I select Instant Video box',
      'Then I must see Popup Confirm Timezone',
      'When I click Confirm in Popup Confirm Timezone',
      'Given Wait for Admin Ajax "3" times #Common',
      'Then Now I have been redirected to bosley doxy page have query "<firstName>" and "<lastName>"',
    ],
    reuseExamples: true
  })

  generateScenario('TC6_25_02', allScenarioObject, {
    required: 'TC6_11',
    description: 'Chọn Instant Video button > book thành công',
    dynamic: {
      _fakeData: 'fullDropdownHaveConfirm'
    },
    steps: [
      'When I select Instant Video box',
      'Then I must see Popup Confirm Timezone',
      'When I click Confirm in Popup Confirm Timezone',
      'Given Wait for Admin Ajax "3" times #Common',
      'Then Now I have been redirected to bosley doxy page have query "<firstName>" and "<lastName>"',
    ],
    reuseExamples: true
  })

  generateScenario('TC6_26_01', allScenarioObject, {
    required: 'TC6_06',
    description: 'Chọn Instant Video button > book không thành công',
    dynamic: {
      _fakeData: 'fullDropdownHaveConfirm'
    },
    steps: [
      'When I select Instant Video box',
      'Then I must see Popup Confirm Timezone',
      'When I click Confirm in Popup Confirm Timezone',
      'Given Wait for Admin Ajax "3" times #Common',
      'Then Now I have been redirected to bosley doxy page have query "<firstName>" and "<lastName>"',
    ],
    reuseExamples: true
  })

  generateScenario('TC6_26_02', allScenarioObject, {
    required: 'TC6_11',
    description: 'Chọn Instant Video button > book không thành công',
    dynamic: {
      _fakeData: 'fullDropdownHaveConfirm'
    },
    steps: [
      'When I select Instant Video box',
      'Then I must see Popup Confirm Timezone',
      'When I click Confirm in Popup Confirm Timezone',
      'Given Wait for Admin Ajax "3" times #Common',
      'Then Now I have been redirected to bosley doxy page have query "<firstName>" and "<lastName>"',
    ],
    reuseExamples: true
  })

  return allScenarioObject
}

module.exports = {
  name: 'Scheduler with valid banner param, invalid crmid param, valid crmid cookie',
  filePath: 'cypress/integration/schedule/6.validBannerParam-invalidSFID-validCookie.feature',
  options: {
    description: 'Check TH URL có params chứa key/value MATCH với key/value trong CMS, SFID không hợp lệ, Cookies đã có SFID',
    backgroundName: 'Scheduler Page',
    backgroundSteps: [
      'Given I want to remove Cookie #Common'
    ],
    generateScenariosFunction
  }
}
