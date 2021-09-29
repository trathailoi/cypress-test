Then('Alert bar should be showing up', () => {
  cy.get('.mod-alert-bar')
    .should('be.visible')
})

When('Click close alert bar', () => {
  cy.get('.mod-alert-bar .icon-close1')
    .click()
})

Then('Alert bar should NOT be showing up', () => {
  cy.get('.mod-alert-bar')
    .should('not.be.visible')
})

Then('Alert bar should NOT be showing', () => {
  cy.get('.mod-alert-bar')
    .should('not.exist')
})