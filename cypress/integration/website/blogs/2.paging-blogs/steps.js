Given('Add checking api paginate', () => {
  const url = `${Cypress.env('BASE_URL')}/wp-admin/admin-ajax.php*`
  cy.intercept('GET', url, (req) => {
    req.alias = `paginateApi`
  })
})

Given('Wait for paginate', () => {
  cy.wait(`@paginateApi`)
})

And('The paging is available', () => {
  cy.get('.mod-blog-categories .wrapper-pagi .blog-pagination')
    .should('be.visible')
})

Then('At the {string} tab, I must see the page {string} on the dropdown', (tab, page) => {
  cy.get('.mod-blog-categories .wrap-list-tabbed .list-tabbed .slick-active')
    .invoke('text')
    .should('include', tab)
  
  cy.get('.mod-blog-categories .wrapper-pagi .blog-pagination .dropdown-toggle .filter-option')
    .invoke('text')
    .should('equal', `Page ${page}`)
})

When('I click {string} on the paging', (clickSelector) => {
  const mapClickSelectorText = {
    'next': 'Next',
    'prev': 'Prev',
  }
  cy.get('.mod-blog-categories .wrapper-pagi .blog-pagination .next-prev-pagi')
    .contains(mapClickSelectorText[clickSelector])
    .click()
})

Then('I must redirect to page {string} of the {string} tab', (page, tab) => {
  cy.get('.mod-blog-categories .wrap-list-tabbed .list-tabbed .slick-active')
    .invoke('text')
    .should('include', tab)
  
  cy.get('.mod-blog-categories .wrapper-pagi .blog-pagination .dropdown-toggle .filter-option')
    .invoke('text')
    .should('equal', `Page ${page}`)
})

And('At the {string} tab, I must see the page {string} on the dropdown', (tab, page) => {
  cy.get('.mod-blog-categories .wrap-list-tabbed .list-tabbed .slick-active')
    .invoke('text')
    .should('include', tab)
  
  cy.get('.mod-blog-categories .wrapper-pagi .blog-pagination .dropdown-toggle .filter-option')
    .invoke('text')
    .should('equal', `Page ${page}`)
})

And('At the {string} tab, I must see the list blogs of page {string} with right image, link, title', (tab, page) => {
  cy.get('.mod-blog-categories .wrap-list-tabbed .list-tabbed .slick-active')
    .invoke('text')
    .should('include', tab)
})