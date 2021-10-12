import { checkBanner } from './common-scripts'
import specData from './spec-data'
import { adminAjaxUrl } from '../scripts'

Given('I open Scheduler page non-param', () => {
  cy.visit('/scheduler')
})

Given('I set cookie with full SF info valid', () => {
  for (const key in specData.cookies) {
    cy.setCookie(key, specData.cookies[key])
  }
})

Given('I set cookie SFID valid', () => {
  const key = 'bosley_crmid'
  cy.setCookie(key, specData.cookies[key])
})

Then('On Location tab, I must see list valid locations have {string} item', (itemLength) => {
  // stub có 1 locations
  // locations
  cy.get('.mod-location-step .container .row .col:nth-child(1) .sche-par-box .sche-loc-box')
    .should('have.length', Number(itemLength))
})

And('I must see Previous Button', () => {
  cy.contains('Previous Step')
})

And('I must see Next Button', () => {
  cy.contains('Next Step')
})

When('I select first item in list Location', () => {
  // stub có 1 locations
  // locations
  cy.get('.mod-location-step .container .row .col:nth-child(1) .sche-par-box .sche-loc-box')
    .first()
    .click({ force: true })
})

And('I submit Next Step button at Location Tab', () => {
  cy.contains('Next Step').click()
})

And(`On Location tab, I don't see Location list`, () => {
  // stub có 0 locations
  // locations
  cy.get('.mod-location-step .container .row .col:nth-child(1) .sche-par-box .sche-loc-box')
    .should('not.exist')
  cy.contains('NO LOCATIONS CURRENTLY FOUND')
  cy.contains('Please call us at 800.965.6405 or schedule a Video Consultation')
  cy.contains('Call Now')
    .invoke('attr', 'href')
    .then(href => {
      expect(href).to.equal('tel:+18009656405')
    })
})

And('On Location tab, I must see Video Consult box have {string} item', (itemLength) => {
  // stub có 1 video
  // videos
  cy.get('.mod-location-step .container .row .col:nth-child(2) .sche-par-box .sche-loc-box')
    .should('have.length', Number(itemLength))
})

const instantHeaderText = 'Instant Video Consult'
const instantSubText = 'Select to meet now with a Bosley Hair Restoration specialist.'

And('I must see Instant Video', () => {
  cy.contains(instantHeaderText)
    .should('be.visible')
  cy.contains(instantSubText)
    .should('be.visible')
})

When('I select Instant Video box', () => {
  cy.contains(instantHeaderText)
    .click()
})

And(`On Location tab, I don't see Instant Video box`, () => {
  cy.get('.mod-location-step .container .row .col:nth-child(2) .sche-par-box .sche-loc-box').then($els => {
    for (const $el of $els) {
      const elInnerText = $el.innerText
      expect(elInnerText).to.not.include(instantHeaderText)
      expect(elInnerText).to.not.include(instantSubText)
    }
  })
})

When('I select first item in list Video Consult', () => {
  // stub có 1 video
  // videos
  cy.get('.mod-location-step .container .row .col:nth-child(2) .sche-par-box .sche-loc-box')
    .first()
    .click({ force: true })
})

When('I select {string} nth-item in list Video Consult', (number) => {
  // stub có 1 video
  // videos
  cy.get(`.mod-location-step .container .row .col:nth-child(2) .sche-par-box .sche-loc-box:nth-of-type(${1 + Number(number)})`)
    .first()
    .click({ force: true })
})

And(`On Location tab, I don't see Video Consult box`, () => {
  // stub có 0 video
  // videos
  // cy.get('.mod-location-step .container .row .col:nth-child(2) .sche-par-box .sche-loc-box')
  //   .should('not.exist')
  cy.contains('NO LOCATIONS CURRENTLY FOUND')
  cy.contains('Please call us at 800.965.6405 or schedule a Video Consultation')
})

And('I must see Default Banner and Disclaimer', () => {
  checkBanner()
})

Then('I must see Location form', () => {
  // check tab style
  cy.get('.tab-location').should('have.class', 'bg-orange-100')
  // cy.contains('Tell Us About You')
})

And('I can see Input Zipcode to get location Popup', () => {
})

When('The selected location has a slot of today which time I access has condition with next slot 5 mins <= Time <= 30mins', () => {
})

And('The selected location has slot which time I access has condition with next slot has time < 5 mins',()=>{
})

And('The selected location has slot of today > 1 which time I access has condition with next slot 5 mins <= Time <= 30mins',()=>{  
})

And('The selected location has slot of today <= 1 which time I access has condition with next slot 5 mins <= Time <= 30mins', () => {
})

And('The selected location has slot of today <= 1 which time I access has condition with next slot has time < 5 mins', () => {
})

And('Time user > 30 mins before start next slot', () => {
})

And('Time user < mins before start next slot', () => {
})

Then('I must see selected location info', () => {
  // const expectText = 'New Orleans, 2450 Severn Ave., Suite 510, Metairie, LA 70001'
  cy.get('.loc-mes .text-black')
    .invoke('text')
    .then(text => {
      // vì có chứa \n nên phải expect thế này
      expect(text).to.include('New Orleans, 2450 Severn Ave., Suite 510')
      expect(text).to.include('Metairie, LA 70001')
    })
})

Then('On Date-Time Tab, I must see list date available', () => {
  cy.get('.tab-date-time').should('have.class', 'bg-orange-100')
  cy.contains('Choose a Date and Time')
  // cy.contains('If you do not find an available time slot, please call us at 800.965.6405')
  cy.get('.slick-track .slider-date-item')
    .should('be.visible')

  cy.get('.slick-track .slider-date-item > button')
    .should('have.length', 17)
})

Then('On Date-Time Tab, I must see list date available have {string} item', (itemLength) => {
  cy.get('.tab-date-time').should('have.class', 'bg-orange-100')
  cy.get('.slick-track .slider-date-item')
    .should('be.visible')

  cy.get('.slick-track .slider-date-item > button')
    .should('have.length', Number(itemLength))
})

Then(`On Date-Time Tab, I see error message, button Call Now, links`, () => {
  cy.contains('OOPS! SOMETHING WENT WRONG…')

  cy.contains('Call Now')
    .invoke('attr', 'href')
    .then(href => {
      expect(href).to.equal('tel:+18009656405')
    })

  cy.contains('Schedule a Video Consultation')

  cy.contains('Error: There was a problem loading our calendar and appointment times.')
})

When('I click button next slide in list date', () => {
  cy.get('.slider-date .slick-next')
    .click()
})

Then('I see button load more dates', () => {
  cy.contains('Load More Dates')
})

And('I click load more dates', () => {
  cy.contains('Load More Dates')
    .click()
})

And(`I must see No more dates availables`, () => {
  cy.contains('No more dates available')
})

When('I select date', () => {
  cy.get('.slick-track .slider-date-item:nth-child(1) > button').click()
})

Then('I must see list times', () => {
  cy.get('.select-time-zone')
    .should('be.visible')

  cy.get('.select-time-zone .btn-time')
    .should('have.length', 25)
})

Then(`I don't see list times`, () => {
  cy.get('.select-time-zone')
    .should('not.exist')
})

const mapTimezoneText = {
  PT: 'Pacific Time',
  MT: 'Mountain Time',
  CT: 'Central Time',
  ET: 'Eastern Time',
}

And('I must see dropdown timezone with default value {string}', (timezone) => {
  cy.contains(`Showing times for ${mapTimezoneText[timezone]}`)
})

When('I select timezone with {string} value', (timezone) => {
  cy.get('.time-select-box a.dropdown-toggle')
  .click()
  
  cy.get('.time-select-box div.dropdown-menu')
    .contains(timezone)
    .click({ force: true })
})

When('I select first item in list time', () => {
  cy.get('.select-time-zone .btn-time')
    .first()
    .click()
})

When('I submit Book Appointment', () => {
  cy.contains('Book Appointment').click({ force: true })
})

Then('After call Api {string} times, I must see book appointment of {string} thank you page', (times, type) => {
  cy.wait(`@${times}-Times-AdminAjaxApi`).then(req => {
    const { response } = req
    const { body } = response

    cy.contains('Your Consultation is Scheduled')
    cy.contains('Thank you for scheduling your free consultation with Bosley. We look forward to meeting with you to discuss your hair restoration goals.')

    cy.contains('A CONFIRMATION EMAIL AND TEXT ARE ON THE WAY. CALL WITH QUESTIONS:')
    cy.contains('Your Consultation Details')


    cy.get('.mod-thank-you .items-center:nth-child(2) p').then($els => {
      expect($els[0].innerText).to.equal('Aug 27, 2021')
      expect($els[1].innerText).to.includes('8:00 AM') // vì có thể sẽ có timezone MST, PST,....
      if (type === 'location') {
        expect($els[2].innerText).to.includes('New Orleans')
        expect($els[2].innerText).to.includes('2450 Severn Ave., Suite 510')
        expect($els[2].innerText).to.includes('Metairie, LA 70001')
      } else {
        expect($els[2].innerText).to.includes('Video')
        expect($els[2].innerText).to.includes('Use the platform you like best: Zoom, WhatsApp, Skype, etc.')
      }
    })

    cy.contains('Outlook')
      .invoke('attr', 'href')
      .then(href => {
        expect(href).to.equal(body.data.calendar_outlook)
      })
    cy.contains('Google')
      .invoke('attr', 'href')
      .then(href => {
        expect(href).to.equal(body.data.calendar_google)
      })
      
    cy.contains('Yahoo')

    cy.contains('Apple iCal')
  })
})

Then('I must see book appointment of {string} thank you page', (type) => {
  cy.wait('@AdminAjaxApi').then(req => {
    const { response } = req
    const { body } = response

    cy.contains('Your Consultation is Scheduled')
    cy.contains('Thank you for scheduling your free consultation with Bosley. We look forward to meeting with you to discuss your hair restoration goals.')

    cy.contains('A CONFIRMATION EMAIL AND TEXT ARE ON THE WAY. CALL WITH QUESTIONS:')
    cy.contains('Your Consultation Details')


    cy.get('.mod-thank-you .items-center:nth-child(2) p').then($els => {
      expect($els[0].innerText).to.equal('Aug 27, 2021')
      expect($els[1].innerText).to.includes('8:00 AM') // vì có thể sẽ có timezone MST, PST,....
      if (type === 'location') {
        expect($els[2].innerText).to.includes('New Orleans')
        expect($els[2].innerText).to.includes('2450 Severn Ave., Suite 510')
        expect($els[2].innerText).to.includes('Metairie, LA 70001')
      } else {
        expect($els[2].innerText).to.includes('Video')
        expect($els[2].innerText).to.includes('Use the platform you like best: Zoom, WhatsApp, Skype, etc.')
      }
    })

    cy.contains('Outlook')
      .invoke('attr', 'href')
      .then(href => {
        expect(href).to.equal(body.data.calendar_outlook)
      })
    cy.contains('Google')
      .invoke('attr', 'href')
      .then(href => {
        expect(href).to.equal(body.data.calendar_google)
      })
      
    cy.contains('Yahoo')

    cy.contains('Apple iCal')
  })
})

Then('After call Api {string} times, I book appointment failed', (string) => {
  cy.wait(`@${string}-Times-AdminAjaxApi`)
  cy.get('.popup-show .popup-inner')
    .invoke('text')
    .then(text => {
      expect(text).to.includes('OOPS! SOMETHING WENT WRONG…')
      expect(text).to.includes('It looks like Aug 27, 2021')
      expect(text).to.includes('8:00 AM') // vì có thể chứa timezone MST, PST...
      expect(text).to.includes('is no longer available.')
      expect(text).to.includes('Please select another time slot for your appointment')
      expect(text).to.includes('Select another time')
    })
})

Then('I book appointment failed', () => {
  cy.get('.popup-show .popup-inner')
    .invoke('text')
    .then(text => {
      expect(text).to.includes('OOPS! SOMETHING WENT WRONG…')
      expect(text).to.includes('It looks like Aug 27, 2021')
      expect(text).to.includes('8:00 AM') // vì có thể chứa timezone MST, PST...
      expect(text).to.includes('is no longer available.')
      expect(text).to.includes('Please select another time slot for your appointment')
      expect(text).to.includes('Select another time')
    })
})

Then('I must see Popup Confirm Timezone', () => {
  cy.contains('Are you sure you want to start a video consultation now?')
})

When('I click Confirm in Popup Confirm Timezone', () => {
  cy.window().then((win) => {
    cy.stub(win, 'open').as('windowOpen'); 
  });  
  cy.contains('Confirm')
    .click()
})

Then('Now I have been redirected to bosley doxy page have query {string} and {string}', (firstName, lastName) => {
  const fullName = [firstName, lastName].filter(Boolean).join(' ')
  cy.get('@windowOpen')
    .should('be.calledWith', `https://bosley.doxy.me/videoconsult?username=${fullName}`, '_blank')
})

Then('Now I have been redirected to bosley doxy page', () => {
  cy.get('@windowOpen')
    .should('be.calledWith', 'https://bosley.doxy.me/videoconsult?username=', '_blank')
})

Then('I can see book appoinment info and {string} info', (type) => {
  cy.contains('Book My Appointment')
  cy.get('.scheduler-info-booking p').then($els => {
    expect($els[0].innerText).to.equal('Aug 27, 2021')
    expect($els[1].innerText).to.includes('8:00 AM')
    if (type === 'location') {
      expect($els[2].innerText).to.includes('New Orleans')
      expect($els[2].innerText).to.includes('2450 Severn Ave., Suite 510')
      expect($els[2].innerText).to.includes('Metairie')
      expect($els[2].innerText).to.includes('LA, 70001')
    } else {
      expect($els[2].innerText).to.includes('Video')
      expect($els[2].innerText).to.includes('Use the platform you like best: Zoom, WhatsApp, Skype, etc.')
    }
  })
})

And('I can see consult language and observation consent', () => {
  cy.contains('Consult Language')
  cy.get('label[for=consultLanguage1]')
    .invoke('text')
    .should('equal', 'English')

  cy.get('label[for=consultLanguage2]')
    .invoke('text')
    .should('equal', 'Spanish')

  cy.contains('Observation Consent*')
  cy.get('label[for=consentForObservation1]')
    .invoke('text')
    .should('equal', 'Yes')
  cy.get('label[for=consentForObservation2]')
    .invoke('text')
    .should('equal', 'No')
  cy.contains('*For training purposes, I consent to my consultation with the Specialist being observed via non-recorded and secure videoconference link.')
})

And('I choose consult language {string} and observation consent {string}', (consultLanguage, observationConcent) => {
  cy.get(`label[for=consultLanguage${consultLanguage === 'English' ? 1 : 2}]`)
    .click()

  cy.get(`label[for=consentForObservation${observationConcent === 'yes' ? 1 : 2}]`)
    .click()
})

Then('I must see Banner and Disclaimer match with banner value in params', () => {
  checkBanner({
    bannerHeaders: ['50% Off* a Bosley Hair Restoration Procedure.'],
    bannerSubHeaders: ['Get 800 grafts for $3600 only for $4.50 per graft. Additional grafts $4.50 each.'],
    bannerDisclaimers: [
      'Offers may not be used with any other discounts or special offers from Bosley except where otherwise noted. Limit one discount or coupon per product/service type per customer (i.e. TriGen+ and PRP offers cannot be used together). Offers valid only during the promotional period only. Offers not redeemable for cash. All discounts apply to Bosley’s standard rates and fees, and are not valid with any other offer, coupon discount or certificate except otherwise noted.',
      '^Financing is provided by independent third-party lenders, and the lenders independently approve the financing and its terms and conditions. Actual monthly payments will vary from lender to lender based upon the amount financed, the terms for which you apply, and your credit standing. Rates for various lenders’ programs range from 0.00% to 28.99%. Additional terms and conditions may apply depending on the lender selected.',
      'All information is subject to change without notice. Offers have no cash value and may not be redeemed for cash. Offers are not valid with any other offer, coupon or certificate. Offer not transferable. Void where prohibited. Offers are void if sold, exchanged, transferred or reproduced.',
      'Professional services provided by the affiliated physicians of the Bosley Medical Group (“Bosley physicians”). Bosley physicians are available only at Bosley Surgical Offices. Candidacy for hair restoration can only be determined by a Bosley physician upon examination, diagnosis and prescription of a treatment plan. Your Bosley physician will determine if you are a candidate for hair restoration and recommend the optimal number of grafts to achieve your individual hair restoration goals. A patient may require more than one procedure to achieve their desired results. Ask your Bosley physician during your free consultation about your individual case. Individual results may vary.'
    ],
    bannerImageUrl: `${Cypress.env('BASE_URL')}/wp-content/uploads/2021/08/nick-gray-banner-scheduler.jpg`
  })
})

Then('I can see Location tab is active', () => {
  cy.get('.tab-location').should('have.class', 'bg-orange-100')
  cy.contains('Select a Location')
})

Then('I must see validate field has red box-border', () => {
  // check validate error
  cy.get('form .form-group').then($els => {
    let checkHaveError = false
    for (const el of $els) {
      if (el.classList.contains('error')) {
        checkHaveError = true
        break
      }
    }
    expect(checkHaveError).to.equal(true)
  })
})

Then(`I must see the first tab label is "Schedule a Free Consultation Now​"`, () => {
  cy.contains('Schedule a Free Consultation Now')
})

Then('I do not see Previous Button', () => {
  cy.get('.text-center a.text-btn-dark span.icon-chevron-left')
    .should('not.exist')
})


Given('Stub api {string} #CommonScheduler', (responseString) => {
  cy.intercept('POST', adminAjaxUrl, (req) => {
    req.reply(specData.stubResponse[responseString] || specData.stubResponse.default)
    req.alias = `AdminAjaxApi`
  })
})

Given('Wait for fetch data #CommonScheduler', () => {
  cy.wait('@AdminAjaxApi')
})