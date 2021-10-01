import { fakeApiData } from './spec-data.json'

Given('I scroll to Review Section', () => {
  cy.scrollTo(0, 2700)
})

Then('I must see list review have {string} items', (countItem) => {
  cy.get('.list-review .commom-pin-item')
    .should('have.length', countItem)
})

Given('Fake api load more with show load more is {string}', (showMoreString) => {
  const url = `${Cypress.env('BASE_URL')}/wp-admin/admin-ajax.php*`
  cy.intercept('GET', url, (req) => {
    req.reply(showMoreString === 'true' ? fakeApiData.withLoadMore : fakeApiData.withOutLoadMore)
    req.alias = `loadMoreApi`
  })
})

When('I click load more', () => {
  cy.get('.mod-review .load-more-review')
    .click()
})

Then('I see loading icon and button load more is disabled', () => {
  cy.get('.mod-review .loading')
    .should('not.have.class', 'hidden')
  cy.get('.mod-review .load-more-review')
    .should('have.class', 'disabled')
})

Then('I do not see loading icon and button load more is active', () => {
  cy.get('.mod-review .loading')
    .should('have.class', 'hidden')
  cy.get('.mod-review .load-more-review')
    .should('not.have.class', 'disabled')
})

Given('Wait for api load more', () => {
  cy.wait('@loadMoreApi')
})

And('I must see load more button', () => {
  cy.get('.mod-review .load-more-review')
    .should('be.visible')
})

And('I do not see load more button', () => {
  cy.get('.mod-review .load-more-review')
    .should('not.be.visible')
})
