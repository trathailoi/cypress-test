const { generateScenario } = require('./utils')

const generateScenariosFunction = () => {
  const allScenarioObject = {        
    TC7_01: {
      type: 'Scenario',
      description: 'Check TH URL có params chứa key/value match với key/value trong CMS, SFID hợp lệ, zipcode KHÔNG HỢP LỆ',
      dynamic: {
        _fakeData: "fullDropdown"
      },
      steps: [
        'Given Fake Admin Ajax Api with "_fakeData" data',
        'Given I open Scheduler page with param has valid SFID, match key but invalid Zipcode',
        'Then I must see Banner and Disclaimer match with banner value in params',
        'And I must see Zipcode popup'
      ]
    }
  }

  generateScenario('TC7_01_2', allScenarioObject, {
    last: true,
    required: 'TC7_01',
    description: 'Submit form change zipcode không hợp lệ',
    dynamic: {
      _fakeData: 'fullDropdown'
    },
    steps: [
      'When I input invalid zipcode "<zip>"',
      'And I click submit button',
      'Then I must see validate field has red box-border'
    ],
    examples: `
      | zip    |
      |        |
      | 1      |
      | 12     |
      | 123    |
      | 1234   |`
  })
  
  generateScenario('TC7_02', allScenarioObject, {
    last: true,
    required: 'TC7_01',
    description: 'Submit form change zipcode hợp lệ > có kết quả trả về cho In person',
    dynamic: {
      _fakeData: 'fullDropdown'
    },
    steps: [
      'When I input valid zipcode "<zip>"',
      'And I click submit button',
      'Given Wait for Admin Ajax "1" times #Common',
      'Then I can see Location tab is active',
      'And I must see the first tab label is "Schedule a Free Consultation Now​"',
      'And I must see Banner and Disclaimer match with banner value in params'
    ],
    examples: `
      | zip   |
      | 91356 |`
  }) 

  generateScenario('TC7_03', allScenarioObject, {
    required: 'TC7_02',
    description: 'Ở Tab Location, Có data từ SF trả về tương ứng với zipcode của user cho In Person và  Video Consult luôn luôn hiển thị #POSITIVE',
    dynamic: {
      _fakeData: 'fullDropdown'
    },
    steps: [
      'Then On Location tab, I must see list valid locations have "1" item',
      'And On Location tab, I must see Video Consult box have "2" item',
      // 'And I do not see Previous Button',
      // 'And I must see Next Button'
    ],
    reuseExamples: true
  })

  generateScenario('TC7_04', allScenarioObject, {
    last: true,
    required: 'TC7_02',
    description: 'Ở tab Location không có location nào tương ứng với Zipcode #NEGATIVE',
    dynamic: {
      _fakeData: 'emptyDropdown'
    },
    steps: [
      `Then On Location tab, I don't see Location list`,
      'And On Location tab, I must see Video Consult box have "1" item',
      // `And I do not see Previous Button`,
      // `And I must see Next Button`
    ],
    reuseExamples: true
  })

  generateScenario('TC7_05', allScenarioObject, {
    required: 'TC7_02',
    description: 'Ở tab Location hiện box Instant Video:(có data)(slot>1)(5mins<=Time<=30mins) #POSITIVE',
    dynamic: {
      _fakeData: 'fullDropdown'
    },
    steps: [
      'And The selected location has slot of today > 1 which time I access has condition with next slot 5 mins <= Time <= 30mins',
      'And I must see Instant Video',
      // 'And I do not see Previous Button',
      // 'And I must see Next Button'
    ],
    reuseExamples: true
  })

  generateScenario('TC7_06', allScenarioObject, {
    last: true,
    required: 'TC7_02',
    description: 'Ở tab Location Không hiện box Instant Video:(không có data) #NEGATIVE',
    dynamic: {
      _fakeData: 'emptyDropdown'
    },
    steps: [
      `Then On Location tab, I don't see Instant Video box`,
      // 'And I do not see Previous Button',
      // 'And I must see Next Button',
    ],
    reuseExamples: true
  })

  generateScenario('TC7_07', allScenarioObject, {
    last: true,
    focus: true,
    required: 'TC7_02',
    description: 'Ở tab Location Không hiện box Instant Video:(có data)(Time>30mins)',
    dynamic: {
      _fakeData: 'withoutInstantVideo'
    },
    steps: [
      'And Time user > 30 mins before start next slot',
      `Then On Location tab, I don't see Instant Video box`,
      // 'And I do not see Previous Button',
      // 'And I must see Next Button',
    ],
    reuseExamples: true
  })

  generateScenario('TC7_08', allScenarioObject, {
    last: true,
    focus: true,
    required: 'TC7_02',
    description: 'Ở tab Location Không hiện box Instant Video:(có data)(slot<=1)(5mins<=Time<=30mins)',
    dynamic: {
      _fakeData: 'withoutInstantVideo'
    },
    steps: [
      'And The selected location has slot of today <= 1 which time I access has condition with next slot 5 mins <= Time <= 30mins',
      `Then On Location tab, I don't see Instant Video box`,
      // 'And I do not see Previous Button',
      // 'And I must see Next Button',
    ],
    reuseExamples: true
  })

  generateScenario('TC7_09', allScenarioObject, {
    last: true,
    focus: true,
    required: 'TC7_02',
    description: 'Ở tab Location Không hiện box Instant Video:(có data)(slot<=1)(5mins<=Time)',
    dynamic: {
      _fakeData: 'withoutInstantVideo'
    },
    steps: [
      'And The selected location has slot of today <= 1 which time I access has condition with next slot has time < 5 mins',
      `Then On Location tab, I don't see Instant Video box`,
      // 'And I do not see Previous Button',
      // 'And I must see Next Button',
    ],
    reuseExamples: true
  })

  generateScenario('TC7_10', allScenarioObject, {
    required: 'TC7_02',
    description: 'Ở tab Location hiện box Instant Video:(có data)(5mins<Time)',
    dynamic: {
      _fakeData: 'fullDropdown'
    },
    steps: [
      'And The selected location has slot which time I access has condition with next slot has time < 5 mins',
      'And I must see Instant Video',
      // 'And I do not see Previous Button',
      // 'And I must see Next Button',
    ],
    reuseExamples: true
  })

  generateScenario('TC7_11', allScenarioObject, {
    required: 'TC7_03',
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
    ],
    reuseExamples: true
  })

  generateScenario('TC7_12', allScenarioObject, {
    required: 'TC7_03',
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
    ],
    reuseExamples: true
  })

  generateScenario('TC7_13', allScenarioObject, {
    required: 'TC7_12',
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
      | zip   | timezone |
      | 91356 | MT      |
      | 91356 | CT      |
      | 91356 | ET      |`
  })

  generateScenario('TC7_14', allScenarioObject, {
    last: true,
    required: 'TC7_03',
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
    ],
    reuseExamples: true
  })

  generateScenario('TC7_15', allScenarioObject, {
    last: true,
    required: 'TC7_03',
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
    ],
    reuseExamples: true
  })

  generateScenario('TC7_16_01', allScenarioObject, {
    last: true,
    required: 'TC7_11',
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
    ],
    reuseExamples: true
  })

  generateScenario('TC7_16_02', allScenarioObject, {
    last: true,
    required: 'TC7_12',
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
    ],
    reuseExamples: true
  })

  generateScenario('TC7_17_01', allScenarioObject, {
    last: true,
    required: 'TC7_11',
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
    ],
    reuseExamples: true
  })

  generateScenario('TC7_17_02', allScenarioObject, {
    last: true,
    required: 'TC7_12',
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
    ],
    reuseExamples: true
  })

  generateScenario('TC7_18', allScenarioObject, {
    required: 'TC7_11',
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

  generateScenario('TC7_19', allScenarioObject, {
    last: true,
    required: 'TC7_18',
    description: 'book thành công',
    dynamic: {
      _fakeData: 'fullDropdown'
    },
    steps: [
      'When I submit Book Appointment',
      'Then After call Api "3" times, I must see book appointment of "location" thank you page',
    ],
    reuseExamples: true
  })

  generateScenario('TC7_20', allScenarioObject, {
    required: 'TC7_13',
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

  generateScenario('TC7_21', allScenarioObject, {
    last: true,
    required: 'TC7_20',
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
      | zip     | timezone | consultLanguage | observationConcent |
      | 91356   | MT      | English         | yes                |
      | 91356   | MT      | Spanish         | yes                |
      | 91356   | MT      | English         | no                 |
      | 91356   | MT      | Spanish         | no                 |`
  })

  generateScenario('TC7_22_01', allScenarioObject, {
    last: true,
    required: 'TC7_18',
    description: 'Chọn 1 location -> click button "Book Appointment" > book không thành công vì slot đã được book (403 resources unavailable)',
    dynamic: {
      _fakeData: 'fullDropdownBookFailed'
    },
    steps: [
      'When I submit Book Appointment',
      'Then After call Api "3" times, I book appointment failed',
    ],
    reuseExamples: true
  })

  generateScenario('TC7_22_02', allScenarioObject, {
    last: true,
    required: 'TC7_20',
    description: 'Chọn Video Consult -> user click button "Book Appointment" > book không thành công vì slot đã được book (403 resources unavailable)',
    dynamic: {
      _fakeData: 'fullDropdownHaveSelectTimezoneBookFailed'
    },
    steps: [
      'When I submit Book Appointment',
      'Then After call Api "4" times, I book appointment failed',
    ],
    examples: `
      | zip     | timezone |
      | 91356   | MT      |`
  })

  generateScenario('TC7_23_01', allScenarioObject, {
    last: true,
    required: 'TC7_18',
    description: 'Chọn 1 location ->  click button "Book Appointment" > book không thành công vì lý do gì đó khác status 403 resources unavailable',
    dynamic: {
      _fakeData: 'fullDropdown'
    },
    steps: [
      'When I submit Book Appointment',
      'Then After call Api "3" times, I must see book appointment of "location" thank you page',
    ],
    reuseExamples: true
  })

  generateScenario('TC7_23_02', allScenarioObject, {
    last: true,
    required: 'TC7_20',
    description: 'Chọn Video Consult -> user click button "Book Appointment" > book không thành công vì lý do gì đó khác status 403 resources unavailable',
    dynamic: {
      _fakeData: 'fullDropdownHaveSelectTimezone'
    },
    steps: [
      'When I submit Book Appointment',
      'Then After call Api "4" times, I must see book appointment of "video" thank you page',
    ],
    examples: `
      | zip | timezone |
      | 91356   | MT      |`
  })

  generateScenario('TC7_24_01', allScenarioObject, {
    last: true,
    required: 'TC7_05',
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
    ],
    reuseExamples: true
  })

  generateScenario('TC7_24_02', allScenarioObject, {
    last: true,
    required: 'TC7_10',
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
    ],
    reuseExamples: true
  })

  generateScenario('TC7_25_01', allScenarioObject, {
    last: true,
    required: 'TC7_10',
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
    ],
    reuseExamples: true
  })

  generateScenario('TC7_25_02', allScenarioObject, {
    last: true,
    required: 'TC7_05',
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
    ],
    reuseExamples: true
  })
  
  return allScenarioObject
}

module.exports = {
  name: 'Scheduler',
  filePath: 'cypress/integration/schedule/7.validBannerParam-validSFID-invalidZipcode.feature',
  options: {
    description: 'Check TH URL có params chứa key/value match với key/value trong CMS, SFID hợp lệ, zipcode KHÔNG HỢP LỆ',
    backgroundName: 'Scheduler with cookies',
    backgroundSteps: [
      'Given I want to remove Cookie #Common',
      'Given I want to remove Session #Common'
    ],
    generateScenariosFunction
  }
}
