import { fakeLocation } from '../../../common/scripts'

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
    expect($els.length).to.not.equal(0)
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
})

And(`I can't see the distance in miles`, () => {
})

When(`I click 1 location on the list`, () => {
})

And(`I must see this location is zoom on a map`, () => {
})

When(`I click 1 location on a map`, () => {
})

And(`I must see this location is active on the list`, () => {
})

When(`I input address on search box`, () => {
})

Then(`I must see the suggest list of Google`, () => {
})

When(`I select 1 address on the suggest list`, () => {
})

And(`I must see this address is zoom on a map`, () => {
})
