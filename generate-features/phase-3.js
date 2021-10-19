const { generateScenario } = require('./utils')

const generateScenariosFunction = () => {
  const allScenarioObject = {
  }
  
  const commonPreSteps = [ // cần move vào đây vì cần gắn giá trị dynamic cho _fakeData
    'Given Fake Admin Ajax Api with "_fakeData" data',
    'Given I open Scheduler page with param has valid SFID, match key and valid Zipcode',
    'Given Wait for Admin Ajax "1" times #Common',
  ]
  
  generateScenario('TC3_01', allScenarioObject, {
    description: 'Check TH URL có params chứa key/value match với key/value trong CMS, zipcode và SFID hợp lệ, có data trả về từ SF cho Inperson, Instant Video',
    dynamic: {
      _fakeData: 'fullDropdown'
    },
    steps: [
      ...commonPreSteps,
      'Then I can see Location tab is active',
      'And I must see the first tab label is "Schedule a Free Consultation Now​"',
      'And I must see Banner and Disclaimer match with banner value in params',
      'And On Location tab, I must see list valid locations have "1" item',
      'And On Location tab, I must see Video Consult box have "2" item',
      'And I must see Instant Video',
      'And I do not see Previous Button',
      'And I must see Next Button'
    ]
  })
  
  generateScenario('TC3_02', allScenarioObject, {
    description: 'Check TH URL có params chứa key/value match với key/value trong CMS, zipcode và SFID hợp lệ, KHÔNG có data trả về từ SF cho Inperson, Instant Video',
    dynamic: {
      _fakeData: 'emptyDropdown'
    },
    steps: [
      ...commonPreSteps,
      `Then On Location tab, I don't see Location list`,
      'And On Location tab, I must see Video Consult box have "1" item',
      'And I do not see Previous Button',
      'And I must see Next Button'
    ]
  })

  generateScenario('TC3_03', allScenarioObject, {
    description: 'Ở tab Location hiện box Instant Video:(có data)(slot>1)(5mins<=Time<=30mins) #POSITIVE',
    dynamic: {
      _fakeData: 'fullDropdown'
    },
    steps: [
      ...commonPreSteps,
      'Then The selected location has slot of today > 1 which time I access has condition with next slot 5 mins <= Time <= 30mins',
      'And I must see Instant Video',
      'And I do not see Previous Button',
      'And I must see Next Button'
    ]
  })

  generateScenario('TC3_04', allScenarioObject, {
    last: true,
    description: 'Ở tab Location Không hiện box Instant Video:(không có data) #NEGATIVE',
    dynamic: {
      _fakeData: 'emptyDropdown'
    },
    steps: [
      ...commonPreSteps,
      `Then On Location tab, I don't see Instant Video box`,
      `And I do not see Previous Button`,
      `And I must see Next Button`,
    ]
  })

  generateScenario('TC3_05', allScenarioObject, {
    last: true,
    description: 'Ở tab Location Không hiện box Instant Video:(có data)(Time>30mins)',
    dynamic: {
      _fakeData: 'withoutInstantVideo'
    },
    steps: [
      ...commonPreSteps,
      `Then Time user > 30 mins before start next slot`,
      `And On Location tab, I don't see Instant Video box`,
      `And I do not see Previous Button`,
      `And I must see Next Button`,
    ]
  })

  generateScenario('TC3_06', allScenarioObject, {
    last: true,
    description: 'Ở tab Location Không hiện box Instant Video:(có data)(slot<=1)(5mins<=Time<=30mins)',
    dynamic: {
      _fakeData: 'withoutInstantVideo'
    },
    steps: [
      ...commonPreSteps,
      'Then The selected location has slot of today <= 1 which time I access has condition with next slot 5 mins <= Time <= 30mins',
      `And On Location tab, I don't see Instant Video box`,
      `And I do not see Previous Button`,
      'And I must see Next Button',
    ]
  })

  generateScenario('TC3_07', allScenarioObject, {
    last: true,
    description: 'Ở tab Location Không hiện box Instant Video:(có data)(slot<=1)(5mins<=Time)',
    dynamic: {
      _fakeData: 'withoutInstantVideo'
    },
    steps: [
      ...commonPreSteps,
      'Then The selected location has slot of today <= 1 which time I access has condition with next slot has time < 5 mins',
      `And On Location tab, I don't see Instant Video box`,
      `And I do not see Previous Button`,
      'And I must see Next Button',
    ]
  })

  generateScenario('TC3_08', allScenarioObject, {
    description: 'Ở tab Location hiện box Instant Video:(có data)(5mins<Time)',
    dynamic: {
      _fakeData: 'fullDropdown'
    },
    steps: [
      ...commonPreSteps,
      'Then The selected location has slot which time I access has condition with next slot has time < 5 mins',
      'And I must see Instant Video',
      `And I do not see Previous Button`,
      'And I must see Next Button',
    ]
  })

  generateScenario('TC3_09', allScenarioObject, {
    required: 'TC3_01',
    description: 'Chọn một location -> Tìm thấy các slot trong vòng 15 ngày',
    dynamic: {
      _fakeData: 'fullDropdown'
    },
    steps: [
      'Then I must see Location form',
      'When I select first item in list Location',
      // 'And I submit Next Step button at Location Tab',
      'Given Wait for Admin Ajax "2" times #Common',
      'Then I must see selected location info',
      'Then On Date-Time Tab, I must see list date available',
      'When I select date',
      'Then I must see list times',
    ]
  })

  generateScenario('TC3_10', allScenarioObject, {
    required: 'TC3_01',
    description: 'Chọn một Video Consult -> Tìm thấy các slot trong vòng 15 ngày',
    dynamic: {
      _fakeData: 'fullDropdown'
    },
    steps: [
      'Then I must see Location form',
      'When I select first item in list Video Consult',
      // 'And I submit Next Step button at Location Tab',
      'Given Wait for Admin Ajax "2" times #Common',
      'Then On Date-Time Tab, I must see list date available',
      'When I select date',
      'Then I must see dropdown timezone with default value "PT"',
      'And I must see list times',
    ]
  })

  generateScenario('TC3_11', allScenarioObject, {
    required: 'TC3_10',
    description: 'Chọn một Video Consult -> Tìm thấy các slot trong vòng 15 ngày, user switch timezone',
    dynamic: {
      _fakeData: 'fullDropdownHaveSelectTimezone'
    },
    steps: [
      'When I select timezone with "<timezone>" value',
      'Given Wait for Admin Ajax "3" times #Common',
      'Then On Date-Time Tab, I must see list date available',
      'When I select date',
      'Then I must see list times',
    ],
    examples: `
      | timezone |
      | MT      |
      | CT      |
      | ET      |`
  })

  generateScenario('TC3_12', allScenarioObject, {
    last: true,
    required: 'TC3_01',
    description: 'chọn location không có slot trong vòng 15 ngày: show error',
    dynamic: {
      _fakeData: 'fullDropdownUnAvailableDateTime'
    },
    steps: [
      'Then I must see Location form',
      'When I select first item in list Location',
      // 'And I submit Next Step button at Location Tab',
      'Given Wait for Admin Ajax "2" times #Common',
      'Then I must see selected location info',
      'Then On Date-Time Tab, I see error message, button Call Now, links'
    ]
  })

  generateScenario('TC3_13', allScenarioObject, {
    last: true,
    required: 'TC3_01',
    description: 'chọn video consult không có slot trong vòng 15 ngày: show error',
    dynamic: {
      _fakeData: 'fullDropdownUnAvailableDateTime'
    },
    steps: [
      'Then I must see Location form',
      'When I select first item in list Video Consult',
      // 'And I submit Next Step button at Location Tab',
      'Given Wait for Admin Ajax "2" times #Common',
      'Then On Date-Time Tab, I see error message, button Call Now, links',
    ]
  })

  generateScenario('TC3_14_01', allScenarioObject, {
    last: true,
    required: 'TC3_09',
    description: 'chọn location có slot trong vòng 15 ngày tiếp theo: hiển thị ngày giờ available, click load more => show available date',
    dynamic: {
      _fakeData: 'fullDropdownHaveLoadMore'
    },
    steps: [
      'When I click button next slide in list date',
      'Then I see button load more dates',
      'And I click load more dates',
      'Given Wait for Admin Ajax "3" times #Common',
      'Then On Date-Time Tab, I must see list date available have "32" item',
      'And I see button load more dates',
    ]
  })

  generateScenario('TC3_14_02', allScenarioObject, {
    last: true,
    required: 'TC3_10',
    description: 'Chọn một Video Consult -> Tìm thấy các slot trong vòng 15 ngày',
    dynamic: {
      _fakeData: 'fullDropdownHaveLoadMore'
    },
    steps: [
      'When I click button next slide in list date',
      'Then I see button load more dates',
      'And I click load more dates',
      'Given Wait for Admin Ajax "3" times #Common',
      'Then On Date-Time Tab, I must see list date available have "32" item',
      'And I see button load more dates',
    ]
  })

  generateScenario('TC3_15_01', allScenarioObject, {
    last: true,
    required: 'TC3_09',
    description: 'chọn location không có slot trong vòng 15 ngày tiếp theo',
    dynamic: {
      _fakeData: 'fullDropdownNotHaveLoadMore'
    },
    steps: [
      'When I click button next slide in list date',
      'Then I see button load more dates',
      'And I click load more dates',
      'Given Wait for Admin Ajax "3" times #Common',
      'Then On Date-Time Tab, I must see list date available have "32" item',
      'When I click button next slide in list date',
      'When I click button next slide in list date',
      'And I click load more dates',
      'Given Wait for Admin Ajax "4" times #Common',
      'When I click button next slide in list date',
      'Then I must see No more dates availables',
    ]
  })

  generateScenario('TC3_15_02', allScenarioObject, {
    last: true,
    required: 'TC3_10',
    description: 'chọn Video Consult không có slot trong vòng 15 ngày tiếp theo',
    dynamic: {
      _fakeData: 'fullDropdownNotHaveLoadMore'
    },
    steps: [
      'When I click button next slide in list date',
      'Then I see button load more dates',
      'And I click load more dates',
      'Given Wait for Admin Ajax "3" times #Common',
      'Then On Date-Time Tab, I must see list date available have "32" item',
      'When I click button next slide in list date',
      'When I click button next slide in list date',
      'And I click load more dates',
      'Given Wait for Admin Ajax "4" times #Common',
      'When I click button next slide in list date',
      'Then I must see No more dates availables',
    ]
  })

  generateScenario('TC3_16', allScenarioObject, {
    required: 'TC3_09',
    description: 'Show info date/time location tương ứng với những gì user chọn',
    dynamic: {
      _fakeData: 'fullDropdown'
    },
    steps: [
      'When I select first item in list time',
      'Then I can see book appoinment info and "location" info',
    ]
  })

  generateScenario('TC3_17', allScenarioObject, {
    last: true,
    required: 'TC3_16',
    description: 'book thành công',
    dynamic: {
      _fakeData: 'fullDropdown'
    },
    steps: [
      'When I submit Book Appointment',
      'Then After call Api "3" times, I must see book appointment of "location" thank you page'      
    ]
  })

  generateScenario('TC3_18', allScenarioObject, {
    required: 'TC3_11',
    description: 'Show thêm vùng Consult language & Observation​ consent dưới btn book appointment',
    dynamic: {
      _fakeData: 'fullDropdownHaveSelectTimezone'
    },
    steps: [
      'When I select first item in list time',
      'Then I can see book appoinment info and "video" info',
      'And I can see consult language and observation consent',
    ],
    examples: `
      | timezone |
      | MT      |`
  })

  generateScenario('TC3_19', allScenarioObject, {
    last: true,
    required: 'TC3_18',
    description: 'chọn option trong Consult language & Observation​ consent > click button "Book Appointment" > book thành công',
    dynamic: {
      _fakeData: 'fullDropdownHaveSelectTimezone'
    },
    steps: [
      'Then I choose consult language "<consultLanguage>" and observation consent "<observationConcent>"',
      'When I submit Book Appointment',
      'Then After call Api "4" times, I must see book appointment of "video" thank you page',
    ],
    examples: `
      | timezone | consultLanguage | observationConcent |
      | MT      | English         | yes                |
      | MT      | Spanish         | yes                |
      | MT      | English         | no                 |
      | MT      | Spanish         | no                 |`
  })

  generateScenario('TC3_20_01', allScenarioObject, {
    last: true,
    required: 'TC3_16',
    description: 'Chọn 1 location -> click button "Book Appointment" > book không thành công vì slot đã được book (404 resources unavailable)',
    dynamic: {
      _fakeData: 'fullDropdownBookFailed'
    },
    steps: [
      'When I submit Book Appointment',
      'Then After call Api "3" times, I book appointment failed',
    ]
  })

  generateScenario('TC3_20_02', allScenarioObject, {
    last: true,
    required: 'TC3_18',
    description: 'Chọn Video Consult -> user click button "Book Appointment" > book không thành công vì slot đã được book (404 resources unavailable)',
    dynamic: {
      _fakeData: 'fullDropdownHaveSelectTimezoneBookFailed'
    },
    steps: [
      'When I submit Book Appointment',
      'Then After call Api "4" times, I book appointment failed',
    ],
    reuseExamples: true
  })

  generateScenario('TC3_21_01', allScenarioObject, {
    last: true,
    required: 'TC3_16',
    description: 'Chọn 1 location ->  click button "Book Appointment" > book không thành công vì lý do gì đó khác status 404 resources unavailable',
    dynamic: {
      _fakeData: 'fullDropdown'
    },
    steps: [
      'When I submit Book Appointment',
      'Then After call Api "3" times, I must see book appointment of "location" thank you page',
    ]
  })

  generateScenario('TC3_21_02', allScenarioObject, {
    last: true,
    last: true,
    required: 'TC3_18',
    description: 'Chọn Video Consult -> user click button "Book Appointment" > book không thành công vì lý do gì đó khác status 404 resources unavailable',
    dynamic: {
      _fakeData: 'fullDropdownHaveSelectTimezone'
    },
    steps: [
      'When I submit Book Appointment',
      'Then After call Api "4" times, I must see book appointment of "video" thank you page',
    ],
    reuseExamples: true
  })

  generateScenario('TC3_22_01', allScenarioObject, {
    last: true,
    required: 'TC3_03',
    description: 'Chọn Instant Video button > book thành công',
    dynamic: {
      _fakeData: 'fullDropdownHaveConfirm'
    },
    steps: [
      'When I select Instant Video box',
      'Then I must see Popup Confirm Timezone',
      'When I click Confirm in Popup Confirm Timezone',
      'Given Wait for Admin Ajax "2" times #Common',
      'Then Now I have been redirected to bosley doxy page',
    ]
  })

  generateScenario('TC3_22_02', allScenarioObject, {
    last: true,
    required: 'TC3_08',
    description: 'Chọn Instant Video button > book thành công',
    dynamic: {
      _fakeData: 'fullDropdownHaveConfirm'
    },
    steps: [
      'When I select Instant Video box',
      'Then I must see Popup Confirm Timezone',
      'When I click Confirm in Popup Confirm Timezone',
      'Given Wait for Admin Ajax "2" times #Common',
      'Then Now I have been redirected to bosley doxy page',
    ]
  })

  generateScenario('TC3_23_01', allScenarioObject, {
    last: true,
    required: 'TC3_03',
    description: 'Chọn Instant Video button > book không thành công',
    dynamic: {
      _fakeData: 'fullDropdownHaveConfirm'
    },
    steps: [
      'When I select Instant Video box',
      'Then I must see Popup Confirm Timezone',
      'When I click Confirm in Popup Confirm Timezone',
      'Given Wait for Admin Ajax "2" times #Common',
      'Then Now I have been redirected to bosley doxy page',
    ]
  })

  generateScenario('TC3_23_02', allScenarioObject, {
    last: true,
    required: 'TC3_08',
    description: 'Chọn Instant Video button > book không thành công',
    dynamic: {
      _fakeData: 'fullDropdownHaveConfirm'
    },
    steps: [
      'When I select Instant Video box',
      'Then I must see Popup Confirm Timezone',
      'When I click Confirm in Popup Confirm Timezone',
      'Given Wait for Admin Ajax "2" times #Common',
      'Then Now I have been redirected to bosley doxy page',
    ]
  })

  return allScenarioObject
}

module.exports = {
  name: 'Scheduler',
  filePath: 'cypress/integration/schedule/3.validBannerParam-validSFID-validZipcode.feature',
  options: {
    description: 'Check TH URL có params chứa key/value match với key/value trong CMS, zipcode và SFID hợp lệ',
    // backgroundName: 'Scheduler Page with params valid key - valid SFID - valid Zipcode',
    backgroundSteps: [
      'Given I want to remove Session #Common'
    ],
    generateScenariosFunction
  }
}
