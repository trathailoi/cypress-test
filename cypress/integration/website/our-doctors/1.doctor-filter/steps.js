Given('I scroll to Bosley Doctors section', () => {
  cy.scrollTo(0, 500)
})

And('I must see list Bosley Doctors have {string} items', (countItems) => {
  cy.get('.mod-search-doctors .list-search-doctors .doctor-item:visible')
    .should('have.length', Number(countItems))
})

When('I click filter on the right side', () => {
  cy.get('.mod-search-doctors a.dropdown-toggle')
  .click()
})

Then('I must see the dropdown displayed', () => {
  cy.get('.mod-search-doctors .dropdown-menu')
    .should('be.visible')
})

When('I choose option {string} to filter', (option) => {
  cy.get('.mod-search-doctors .dropdown-menu')
    .contains(option)
    .click()
})

Then('I must see the dropdown closed', () => {
  cy.get('.mod-search-doctors .dropdown-menu')
    .should('not.be.visible')
})
