Given('I scroll to Tab module section', () => {
  cy.scrollTo(0, 7500)
})

const tabExpects = [
  {
    texts: [
      'Tab 1 heading'
    ]
  },
  {
    texts: [
      'Tab 2 heading'
    ]
  },
  {
    texts: [
      'Tab 3 heading'
    ]
  },
  {
    texts: [
      'Tab 4 heading'
    ]
  },
  {
    texts: [
      'Tab 5 heading'
    ]
  },
  {
    texts: [
      'Tab 6 heading'
    ]
  },
]

When('I click tab {string}', (tab) => {
  cy.get(`.mod-tabbed .list-tabbed .tabbed-item:nth-child(${tab})`)
    .click()
})

Then('Tab {string} is active', (tab) => {
  cy.get(`.mod-tabbed .list-tabbed .tabbed-item:nth-child(${tab})`)
    .should('have.class', 'is-active')
})

Then('I can see tab {string} content', (tab) => {
  const tabContentSelector = `.mod-tabbed .list-content-tabbed div[data-tab="${Number(tab - 1)}"]`
  cy.get(tabContentSelector)
    .should('be.visible')
    .should('have.class', 'is-active')

  const tabObj = tabExpects[Number(tab - 1)]
  for (const text of tabObj.texts) {
    cy.get(tabContentSelector)
      .contains(text)
  }
})