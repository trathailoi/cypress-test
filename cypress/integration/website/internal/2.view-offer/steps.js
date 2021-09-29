When('I click View All Offer​s', () => {
  cy.get('section.mod-banner-form a')
    .contains('View All Offers')
    .click()
});

const popupSelector = '.mod-popup-offer .popup-offer'
Then('I must see popup expand at right-side', () => {
  cy.get(popupSelector)
    .should('be.visible')

  cy.get(popupSelector)
    .contains('Bosley Offers')

  cy.get(popupSelector)
    .contains('All of Bosley’s current offers')
});

Then('I can scroll content​ at popup expand', () => {
  cy.get(`${popupSelector} .nano-content`)
    .scrollTo('bottom')
  cy.wait(700)

  cy.get(`${popupSelector} .nano-content`)
    .scrollTo('top')
  cy.wait(700)
  
  for (const yPosition of [100, 200, 500, 700, 1000, 1200]) {
    cy.get(`${popupSelector} .nano-content`)
      .scrollTo(0, yPosition)
    cy.wait(700)
  }
});

When('I click click {string}', (clickSelector) => {
  // đợi hiện overlay
  cy.wait(5000)
  if (clickSelector === 'close button at top-right') {
    cy.get(`${popupSelector} .popup-is-close`)
      .click()
  } else {
    cy.get(`.mod-popup-offer .mask-pop-overlay`)
      .click(15, 40, { force: true })
  }
});

Then('Popup expand is closed', () => {
  cy.get(popupSelector)
    .should('not.exist')
});
