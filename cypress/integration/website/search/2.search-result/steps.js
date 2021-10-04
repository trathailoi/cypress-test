import { fakeData } from './spec-data.json'

When(`Input {string} on search box`, (keyword) => {
  cy.get('#search-banner')
    .type(keyword)
})

And(`Press enter on keyboard`, () => {
  cy.get('#search-banner')
    .type('{enter}')
})

const mapSectionSelector = {
  'Website pages': '.wrapper-list-search:nth-child(1)',
  'Blog Posts': '.wrapper-list-search:nth-child(2)',
}

Then(`I must see list results have {string} section have {string} items`, (sectionName, countItems) => {
  cy.get(`${mapSectionSelector[sectionName]} .heading-result-search h4`)
    .contains(sectionName)
  cy.get(`${mapSectionSelector[sectionName]} .list-items-search>div.item`)
    .should('have.length', countItems)
})

When(`I click Show More button on {string} section`, (sectionName) => {
  cy.get(`${mapSectionSelector[sectionName]} .load-more`)
    .click()
})

Given('Fake data load more {string} and {string} more items', (sectionName, moreText) => {
  const mapFakeData = {
    'Website pages-still have': 'showMoreWebsitePages',
    'Blog Posts-still have': 'showMoreBlogPosts',
    'Website pages-no': 'showMoreWebsitePagesNoMore',
    'Blog Posts-no': 'showMoreBlogPostsNoMore',
  }
  const resData = fakeData[mapFakeData[`${sectionName}-${moreText}`]]
  const url = `${Cypress.env('BASE_URL')}/wp-admin/admin-ajax.php*`
  cy.intercept('GET', url, (req) => {
    req.reply(resData)
    req.alias = `loadMoreApi`
  })
})

Given('Wait for load more', () => {
  cy.wait(`@loadMoreApi`)
})

Then(`I must see Show More button on {string} section`, (sectionName) => {
  cy.get(`${mapSectionSelector[sectionName]} .load-more`)
    .should('be.visible')
})

Then(`I must not see Show More button on {string} section`, (sectionName) => {
  cy.get(`${mapSectionSelector[sectionName]} .load-more`)
    .should('not.be.visible')
})

And(`Click Search icon on search box`, () => {
  cy.get('.mod-banner-search-v2 .form-search-result .icon-search')
    .click()
})

When('I click View All Offer​s', () => {
  cy.get('.open-offer')
    .contains('View All')
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
  cy.wait(3000)
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
