import { fakeLocation } from '../../../common/scripts'

Given('Visit Location Page and fake location', () => {
  cy.visit('/', fakeLocation(48, 2)); // France
})

Then(`I must see my location refill on searchbox`, () => {
})

And(`I must see the distance in miles and sort from nearest to farthest`, () => {
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
