When(`Input {string} on search box`, (keyword) => {
  cy.get('#search-banner')
    .type(keyword)
})

And(`Press enter on keyboard`, () => {
  cy.get('#search-banner')
    .type('{enter}')
})

Then('I can not submit form and I see error message',  () => {
  cy.get('.mod-banner-search-v2 .form-ani')
    .contains('Please choose Website Pages or Blog Posts')
})

Then(`I must see list results have {string} section`, (sectionName) => {
  cy.get('.mod-content-result-s h4')
    .contains(sectionName)
})

When(`I check {string} options`, (sectionOption) => {
  cy.get('.mod-banner-search-v2 .form-group-checkbox')
    .contains(sectionOption)
    .click()
})

When(`I uncheck {string} options`, (sectionOption) => {
  cy.get('.mod-banner-search-v2 .form-group-checkbox')
    .contains(sectionOption)
    .click()
})

And(`I don't see list results have {string} section`, (sectionName) => {
  cy.get('.mod-content-result-s h4')
    .contains(sectionName)
    .should('not.exist')
})

And(`I can't uncheck {string} options`, (sectionName) => {
})

And(`Click Search icon on search box`, () => {
  cy.get('.mod-banner-search-v2 .form-search-result .icon-search')
    .click()
})

When(`I click Show More button on {string} section`, (sectionName) => {
})

When(`I click View All Offer​s`, () => {
})

Then(`I must see popup expand at right-side`, () => {
})

Then(`I can scroll content​ at popup expand`, () => {
})

When(`I click click {string}`, (clickSelector) => {
})

Then(`Popup expand is closed`, () => {
})
