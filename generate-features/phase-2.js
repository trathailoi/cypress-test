const { generateScenario } = require('./utils')

const generateScenariosFunction = () => {
  const allScenarioObject = {
    TC2_00: {
      type: 'Scenario Outline',
      description: 'Check submit form free kit in home page',
      dynamic: {
        _fakeData: 'checkSubmitFreeKit'
      },
      steps: [
        'Given I open homepage',
        'Given Fake Admin Ajax Api with "_fakeData" data',
        'When I enter new user to form Free Kit with name is "<firstName>" "<lastName>" "<email>" "<phone>" "<street>" "<zipcode>" "<gender>" #CommonPhase2',
        'And I submit Free Kit form #CommonPhase2',
        'Given Wait for Admin Ajax "1" times #Common',
        'Then I have been redirect to scheduler page #CommonPhase2',
        'And I must see Thank You content on Banner'
      ],
      examples: `
        | firstName | lastName | email                | phone        | street | zipcode | gender |
        | Sen       | Vo       | sen.vo@9thwonder.com | 786-416-5792 | Test   | 91356   | Woman  |`
    },
    TC2_01: {
      type: 'Scenario Outline',
      description: 'URL không có params, cookie có SFID',
      dynamic: {
        _fakeData: 'fullDropdown'
      },
      steps: [
        'Given Fake Admin Ajax Api with "_fakeData" data',
        'Given I set cookie with full SF info valid',
        'Given I open Scheduler page non-param',
        'Given Wait for Admin Ajax "1" times #Common', // check SFID
        'Then I can see Location tab is active',
        'And I must see Default Banner and Disclaimer',
        // 'And I must see Previous Button',
        // 'And I must see Next Button'
      ],
      examples: `
        | firstName | lastName | email                | phone        | street | zipcode | gender |
        | Sen       | Vo       | sen.vo@9thwonder.com | 786-416-5792 | Test   | 91356   | Woman  |`
    }
  }
  
  // không còn nút previous => bỏ
  // generateScenario('TC2_02', allScenarioObject, {
  //   last: true,
  //   required: 'TC2_01',
  //   description: 'Ở tab Location, click btn Previous > fill info của user theo cookies đã lưu',
  //   dynamic: {
  //     _fakeData: 'fullDropdown'
  //   },
  //   steps: [
  //     'When I click Previous button #CommonPhase2',
  //     'Then I can see user info is "<firstName>" "<lastName>" "<email>" "<phone>" "<street>" "<zipcode>" "<gender>" #CommonPhase2'
  //   ],
  //   examples: `
  //     | firstName | lastName | email                | phone          | street | zipcode | gender |
  //     | Sen       | Vo       | sen.vo@9thwonder.com | (786) 416-5792 | Test   | 91356   | Woman  |`
  // })

  generateScenario('TC2_03', allScenarioObject, {
    required: 'TC2_01',
    description: 'Ở Tab Location, Có data từ SF trả về tương ứng với zipcode của user cho In Person và  Video Consult luôn luôn hiển thị #POSITIVE',
    dynamic: {
      _fakeData: 'fullDropdown'
    },
    steps: [
      'Then On Location tab, I must see list valid locations have "1" item',
      'And On Location tab, I must see Video Consult box have "2" item',
      // 'And I must see Previous Button',
      // 'And I must see Next Button'
    ],
    reuseExamples: true
  })
  
  generateScenario('TC2_04', allScenarioObject, {
    last: true,
    required: 'TC2_01',
    description: 'Ở tab Location không có location nào tương ứng với Zipcode #NEGATIVE',
    dynamic: {
      _fakeData: 'emptyDropdown'
    },
    steps: [
      `Then On Location tab, I don't see Location list`,
      'And On Location tab, I must see Video Consult box have "1" item',
      // `And I must see Previous Button`,
      // `And I must see Next Button`
    ],
    reuseExamples: true
  })  

  generateScenario('TC2_05', allScenarioObject, {
    required: 'TC2_01',
    description: 'Ở tab Location hiện box Instant Video:(có data)(slot>1)(5mins<=Time<=30mins) #POSITIVE',
    dynamic: {
      _fakeData: 'fullDropdown'
    },
    steps: [
      'And The selected location has slot of today > 1 which time I access has condition with next slot 5 mins <= Time <= 30mins',
      'And I must see Instant Video',
      // 'And I must see Previous Button',
      // 'And I must see Next Button'
    ],
    reuseExamples: true
  })

  generateScenario('TC2_06', allScenarioObject, {
    last: true,
    required: 'TC2_01',
    description: 'Ở tab Location Không hiện box Instant Video:(không có data) #NEGATIVE',
    dynamic: {
      _fakeData: 'emptyDropdown'
    },
    steps: [
      `Then On Location tab, I don't see Instant Video box`,
      // 'And I must see Previous Button',
      // 'And I must see Next Button',
    ],
    reuseExamples: true
  })

  generateScenario('TC2_07', allScenarioObject, {
    last: true,
    required: 'TC2_01',
    description: 'Ở tab Location Không hiện box Instant Video:(có data)(Time>30mins)',
    dynamic: {
      _fakeData: 'withoutInstantVideo'
    },
    steps: [
      'And Time user > 30 mins before start next slot',
      `Then On Location tab, I don't see Instant Video box`,
      // 'And I must see Previous Button',
      // 'And I must see Next Button',
    ],
    reuseExamples: true
  })

  generateScenario('TC2_08', allScenarioObject, {
    last: true,
    required: 'TC2_01',
    description: 'Ở tab Location Không hiện box Instant Video:(có data)(slot<=1)(5mins<=Time<=30mins)',
    dynamic: {
      _fakeData: 'withoutInstantVideo'
    },
    steps: [
      'And The selected location has slot of today <= 1 which time I access has condition with next slot 5 mins <= Time <= 30mins',
      `Then On Location tab, I don't see Instant Video box`,
      // 'And I must see Previous Button',
      // 'And I must see Next Button',
    ],
    reuseExamples: true
  })

  generateScenario('TC2_09', allScenarioObject, {
    last: true,
    required: 'TC2_01',
    description: 'Ở tab Location Không hiện box Instant Video:(có data)(slot<=1)(5mins<=Time)',
    dynamic: {
      _fakeData: 'withoutInstantVideo'
    },
    steps: [
      'And The selected location has slot of today <= 1 which time I access has condition with next slot has time < 5 mins',
      `Then On Location tab, I don't see Instant Video box`,
      // 'And I must see Previous Button',
      // 'And I must see Next Button',
    ],
    reuseExamples: true
  })

  generateScenario('TC2_10', allScenarioObject, {
    required: 'TC2_01',
    description: 'Ở tab Location hiện box Instant Video:(có data)(5mins<Time)',
    dynamic: {
      _fakeData: 'fullDropdown'
    },
    steps: [
      'And The selected location has slot which time I access has condition with next slot has time < 5 mins',
      'And I must see Instant Video',
      // 'And I must see Previous Button',
      // 'And I must see Next Button',
    ],
    reuseExamples: true
  })

  generateScenario('TC2_11', allScenarioObject, {
    required: 'TC2_03',
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

  generateScenario('TC2_12', allScenarioObject, {
    required: 'TC2_03',
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

  generateScenario('TC2_13', allScenarioObject, {
    required: 'TC2_12',
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

  generateScenario('TC2_14', allScenarioObject, {
    last: true,
    required: 'TC2_03',
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

  generateScenario('TC2_15', allScenarioObject, {
    last: true,
    required: 'TC2_03',
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

  generateScenario('TC2_16_01', allScenarioObject, {
    last: true,
    required: 'TC2_11',
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

  generateScenario('TC2_16_02', allScenarioObject, {
    last: true,
    required: 'TC2_12',
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

  generateScenario('TC2_17_01', allScenarioObject, {
    last: true,
    required: 'TC2_11',
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

  generateScenario('TC2_17_02', allScenarioObject, {
    last: true,
    required: 'TC2_12',
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

  generateScenario('TC2_18', allScenarioObject, {
    required: 'TC2_11',
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

  generateScenario('TC2_19', allScenarioObject, {
    last: true,
    required: 'TC2_18',
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

  generateScenario('TC2_20', allScenarioObject, {
    required: 'TC2_13',
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

  generateScenario('TC2_21', allScenarioObject, {
    last: true,
    required: 'TC2_20',
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

  generateScenario('TC2_22_01', allScenarioObject, {
    last: true,
    required: 'TC2_18',
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

  generateScenario('TC2_22_02', allScenarioObject, {
    last: true,
    required: 'TC2_20',
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

  generateScenario('TC2_23_01', allScenarioObject, {
    last: true,
    required: 'TC2_18',
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

  generateScenario('TC2_23_02', allScenarioObject, {
    last: true,
    required: 'TC2_20',
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

  generateScenario('TC2_24_01', allScenarioObject, {
    last: true,
    required: 'TC2_05',
    description: 'Chọn Instant Video button > book thành công',
    dynamic: {
      _fakeData: 'fullDropdownHaveConfirm'
    },
    steps: [
      'When I select Instant Video box',
      'Then I must see Popup Confirm Timezone',
      'When I click Confirm in Popup Confirm Timezone',
      'Given Wait for Admin Ajax "2" times #Common',
      'Then Now I have been redirected to bosley doxy page have query "<firstName>" and "<lastName>"',
    ],
    reuseExamples: true
  })

  generateScenario('TC2_24_02', allScenarioObject, {
    last: true,
    required: 'TC2_10',
    description: 'Chọn Instant Video button > book thành công',
    dynamic: {
      _fakeData: 'fullDropdownHaveConfirm'
    },
    steps: [
      'When I select Instant Video box',
      'Then I must see Popup Confirm Timezone',
      'When I click Confirm in Popup Confirm Timezone',
      'Given Wait for Admin Ajax "2" times #Common',
      'Then Now I have been redirected to bosley doxy page have query "<firstName>" and "<lastName>"',
    ],
    reuseExamples: true
  })

  generateScenario('TC2_25_01', allScenarioObject, {
    last: true,
    required: 'TC2_10',
    description: 'Chọn Instant Video button > book không thành công',
    dynamic: {
      _fakeData: 'fullDropdownHaveConfirm'
    },
    steps: [
      'When I select Instant Video box',
      'Then I must see Popup Confirm Timezone',
      'When I click Confirm in Popup Confirm Timezone',
      'Given Wait for Admin Ajax "2" times #Common',
      'Then Now I have been redirected to bosley doxy page have query "<firstName>" and "<lastName>"',
    ],
    reuseExamples: true
  })

  generateScenario('TC2_25_02', allScenarioObject, {
    last: true,
    required: 'TC2_05',
    description: 'Chọn Instant Video button > book không thành công',
    dynamic: {
      _fakeData: 'fullDropdownHaveConfirm'
    },
    steps: [
      'When I select Instant Video box',
      'Then I must see Popup Confirm Timezone',
      'When I click Confirm in Popup Confirm Timezone',
      'Given Wait for Admin Ajax "2" times #Common',
      'Then Now I have been redirected to bosley doxy page have query "<firstName>" and "<lastName>"',
    ],
    reuseExamples: true
  })
  
  return allScenarioObject
}

module.exports = {
  name: 'Scheduler',
  filePath: 'cypress/integration/schedule/2.fromFreeKit-homepage.feature',
  options: {
    description: 'Check TH URL không có param, cookies có SFID',
    backgroundName: 'Scheduler with cookies',
    backgroundSteps: [
      'Given I want to remove Cookie #Common',
      'Given I want to remove Session #Common'
    ],
    generateScenariosFunction
  }
}
