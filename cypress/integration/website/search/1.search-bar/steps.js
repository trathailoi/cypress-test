When('Click Search icon on navigation', () => {
  cy.get('.open-search .icomoon.icon-search').click()
})

Then('Search box must be display and forcus', () => {
  // đợi xíu chờ js xử lý
  cy.wait(500)
  cy.get('.form-search')
    .should('be.visible')

  cy.focused().should('have.attr', 'id', 'search')
})

When('Input {string} on search box', (keyword) => {
  cy.get('#search')
    .type(keyword)
  
})

Then('I must see line input have length equal with {string}', (keyword) => {
  // line input must have keyword
  cy.get('.form-search .line-input')
    .invoke('text')
    .should('equal', keyword)
})

And('Press enter on keyboard', () => {
  cy.get('#search')
    .type('{enter}')
})

And('Click Search icon on search box', () => {
  cy.get('.form-search .icon-search')
    .click()
})

Then('I must redirect to {string}', (urlRedirect) => {
  cy.url()
    .should('include', urlRedirect)
})
