Given('I scroll to Before-After​ section', () => {
  cy.scrollTo(0, 600)
  cy.wait(500)
});

Then('I must see list Before After Gallery Men have {string} items', (countItems) => {
  
  if (Number(countItems) === 0) {
    cy.contains('No Results Found.') 
  } else {
    cy.get('.mod-before-after .bf-category.filted:visible')
      .should('have.length', countItems)
  }
})

When('I click load more', () => {
  cy.get('.mod-before-after .load-more-filter')
    .click()
  cy.wait(500)
})

And('I must see load more button', () => {
  cy.get('.mod-before-after .load-more-filter')
    .should('be.visible')
})

And('I must not see load more button', () => {
  cy.get('.mod-before-after .load-more-filter')
    .should('not.be.visible')
})
