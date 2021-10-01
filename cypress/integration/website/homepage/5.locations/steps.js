import { fakeLocation } from '../../../common/scripts'

Given('I scroll to Location section​', () => {
  cy.scrollTo(0, 4200)
})

Given('Visit home page and fake location', () => {
  cy.visit('/', fakeLocation(48, 2)); // France
})

Then('I must scroll see location info', () => {
  cy.get('.location-nearest')
    .contains('THE Location Nearest You')

  cy.get('.location-nearest')
    .contains('Boston, Massachusetts')

  cy.get('.location-nearest')
    .contains('545 Boylston St')

  cy.get('.location-nearest')
    .contains('Boston, MA 02116')

  cy.get('.location-nearest')
    .contains('Schedule a Consult')
    .invoke('attr', 'href')
    .should('equal', '/scheduler')

  cy.get('.location-nearest a')
    .contains('Call Now')
    .invoke('attr', 'href')
    .should('equal', 'tel:617-313-3086')
});

Then('I must see location info form', () => {
  cy.get('.box-location-search')
    .contains('THE Location Nearest You')

  cy.get('.box-location-search')
    .contains('Find Location')
});

When('I input zipcode, city or address​', () => {
  cy.get('.box-location-search #location-name')
    .type('92421', { force: true })
});

Then('I click button Find Location​', () => {
  cy.get('.box-location-search')
    .contains('Find Location')
    .click()
});

Then('I must redirect to location', () => {
  cy.url()
    .should('equal', `${Cypress.env('BASE_URL')}/locations?location=92421`)
});
