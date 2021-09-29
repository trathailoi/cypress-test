
Given('I scroll to Full-Width Video section​', () => {
  cy.wait(1000)
  cy.scrollTo(0, 2000)
  cy.get('.mod-banner-video')
    .should('be.visible')
});

When('I click Play Video button​', () => {
  cy.get('a[data-htmlclass=html-popup-video]')
    .click({ force: true })
  
});

Then('I must see lightbox video​', () => {
  cy.get('.popup-show .popup-video')
    .should('be.visible')
});
  
When('I click close button at top-right', () => {
  cy.wait(5000)
  cy.get('.popup-show .popup-video .popup-is-close')
    .click()
});

Then('Lightbox video must be closed', () => {
  cy.get('.popup-show .popup-video')
    .should('not.exist')
});

When('I click outside', () => {
  // đợi hiện overlay
  cy.wait(5000)
  cy.get('.popup-show .mask-pop-overlay')
    .click(15, 40, { force: true })
});

const getIframeDocument = () => {
  return cy
    .get('iframe#ytplayer')
    .its('0.contentDocument').should('exist')
}

const getIframeBody = () => {
  return getIframeDocument()
    .its('body').should('not.be.undefined')
    .then(cy.wrap)
}


When('I Click Pause Video button​', () => {
  cy.wait(5000)
  getIframeBody().find('video').click('center')

  // cy.get('video', { timeout: 10000 })
  //   .click('center', { force: true })
});

Then('Lightbox video must be paused', () => {
  cy.get('video')
    .its('0.paused')
    .should('equal', true);
});
  