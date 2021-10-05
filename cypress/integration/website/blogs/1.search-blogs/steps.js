When('I input {string} on search box', (keyword) => {
  cy.get('#search-banner')
    .type(keyword, { force: true })
})

Then('I must see line input have length equal with {string}', (keyword) => {
  // line input must have keyword
  cy.get('.line-input')
    .invoke('text')
    .should('equal', keyword)
})

When('I press enter on keyboard', () => {
  cy.get('#search-banner')
    .type('{enter}', { force: true })
})

Then('I must redirect to {string}', (urlRedirect) => {
  cy.url()
    .should('include', urlRedirect)
})

And('I must see the list results has {string} pages with {string} items', (numPage, countItems) => {
  cy.get('.total-page')
    .invoke('text')
    .should('equal', `of ${numPage}`)
  cy.get('.mod-blog-categories .list-blog-categories>div')
    .should('have.length', countItems)
})
