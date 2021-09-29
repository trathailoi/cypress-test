
Given('I scroll to lightbox area', () => {
  cy.scrollTo(0, 300)
});

When('I click lightbox video area', () => {
  cy.get('.mod-large-banner .wrap-large-video')
    .click()
});

Then('I must see lightbox video', () => {
  cy.get('.popup-show')
    .should('be.visible')
});

When('I click close button at top-right', () => {
  cy.wait(5000)
  cy.get('.popup-show .popup-is-close')
    .click()
});

Then('Lightbox video closed', () => {
  cy.get('.popup-show')
    .should('not.exist')
});

When('I click outside', () => {
  // đợi hiện overlay
  cy.wait(5000)
  cy.get('.popup-show .mask-pop-overlay')
    .click(15, 40, { force: true })
});
