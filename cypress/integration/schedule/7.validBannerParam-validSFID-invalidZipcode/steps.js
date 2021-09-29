import { stubAdminAjaxApi } from '../../common/scripts'
import { stubbedData } from '../../common/scheduler/spec-data'

Given('Fake Admin Ajax Api with {string} data', (dataString) => {
  stubAdminAjaxApi(stubbedData.withValidSFID[dataString] || {})
})

Given(`I open Scheduler page with param has valid SFID, match key but invalid Zipcode`, () => {
  cy.visit('/scheduler/?a=b&cid=BOSLEY.COM&crmid=00Q56000003pURyEAM&zip=test')
})

Then(`I must see Zipcode popup`, () => {
  cy.get('.popup-zip-code', { timeout: 10000 })
    .should('be.visible')
    .contains('Change Location')

  cy.get('.popup-zip-code')
    .contains('Update zip code to find different locations.')

  cy.get('.popup-zip-code button > span')
    .contains('Update')
})

Then(`I click submit button`, () => {
  cy.get('.popup-zip-code button > span')
    .contains('Update')
    .click()
})

When(`I input invalid zipcode {string}`, (zip) => {
  if (zip) {
    cy.get('.popup-zip-code input')
      .type(zip)
  }
})

When(`I input valid zipcode {string}`, (zip) => {
  if (zip) {
    cy.get('.popup-zip-code input')
      .type(zip)
  }
})
