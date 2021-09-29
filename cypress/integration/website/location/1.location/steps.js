import { fakeLocation } from '../../../common/scripts'

const LOCATION_LENGTH = 73

Given('Visit Location Page and fake location', () => {
  cy.visit('https://bosley-develop.box.carbon8test.com/locations', fakeLocation(48, 2)); // France
})

Then(`I must see my location refill on searchbox`, () => {
  cy.get('.search-location #location')
    .invoke('val')
    .should('include', 'France')
})

And(`I must see the distance in miles and sort from nearest to farthest`, () => {
  cy.window().then(win => {
    const $els = win.$('.list-location .list-item-location .box-find-location')
    expect($els.length).to.equal(LOCATION_LENGTH)
    const locationMiles = []
    for (const el of $els) {
      const mileText = el.querySelector('.mile').innerText
      const mileNumber = Number(String(mileText || '').replace(' mi', ''))
      locationMiles.push(mileNumber)
    }
    const sortedLocationMiles = JSON.parse(JSON.stringify(locationMiles)).sort((a, b) => a < b ? -1 : 1)
    expect(sortedLocationMiles).to.deep.equal(locationMiles)
  })
})

Then(`I must see list location sort alphabet by name`, () => {
  cy.window().then(win => {
    const $els = win.$('.list-location .list-item-location .box-find-location')
    cy.wrap($els).as('listLocationElement')
    expect($els.length).to.equal(LOCATION_LENGTH)
    const locationCityStates = []
    for (const el of $els) {
      const locationText = el.querySelector('.left-content h4').innerText
      const splittedLocationText = locationText.split(', ')
      const locationCityState = `${splittedLocationText[1]},${splittedLocationText[0]}`
      locationCityStates.push(locationCityState)
    }
    const sortedLocationCityStates = JSON.parse(JSON.stringify(locationCityStates)).sort((a, b) => a < b ? -1 : 1)
    console.log('sortedLocationCityStates', )
    console.log('locationCityStates', )
    expect(sortedLocationCityStates).to.deep.equal(locationCityStates)
  })
})

And(`I can't see the distance in miles`, () => {
  cy.get('@listLocationElement').then($els => {
    let checkAllMileIsHdden = true
    for (const el of $els) {
      const checkMileIsHidden = el.querySelector('.mile').classList.contains('hidden')
      if (!checkMileIsHidden) {
        checkAllMileIsHdden = false
        break
      }
      // expect(checkMileIsHidden).to.equal(true)
    }
    expect(checkAllMileIsHdden).to.equal(true)
  })
})

When(`I click 1 location on the list`, () => {
  cy.get('.list-location .list-item-location .box-find-location')
    .first()
    .click()
})

And(`I must see this location is zoom on a map`, () => {
})

When(`I click 1 location on a map`, () => {
})

And(`I must see this location is active on the list`, () => {
})

When(`I input address on search box`, () => {
  cy.get('.search-location #location')
    .type('Vietnam')
})

Then(`I must see the suggest list of Google`, () => {
  const suggestTexts = [
    "Vietnam Town Rd, San Jose, CA, USA",
    "Vietnamská, Bratislava, Slovakia",
    "Vietnam Supermarket, London, UK",
    "Vietnam Tengah, Vietnam"
  ]
  for (const suggestText of suggestTexts) {
    cy.contains(suggestText)
  }
})

When(`I select 1 address on the suggest list`, () => {
})

And(`I must see this address is zoom on a map`, () => {
})
