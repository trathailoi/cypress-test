const mapOption = {
  'FUE': 'fue',
  'FUT': 'fut',
  'SMP': 'smp',
  'Eyebrow Restoration': 'eyebrow-restoration',
  'LLLT': 'lllt',
  'PRP': 'prp',
  'BosleyMD​': 'bosleymd%e2%80%8b',
  'BosleyRx​': 'bosleyrx%e2%80%8b',
  'BioGraft​': 'biograft%e2%80%8b'
}

Given('I must see list before after have {string} items', (countItems) => {
  cy.get('.mod-before-after .bf-category.filted')
    .should('have.length', countItems)
})

Given('I click filter in right side', () => {
  cy.get('p[data-id=filter-ba]')
    .click()
})

Then('Filter div is expand', () => {
  cy.get('.filter-container')
    .should('be.visible')
})

When('I choose option {string}', (option) => {
  cy.get('.list-filter .col-left label')
    .contains(option)
    .click()
})

And('I click Apply Filters button', () => {
  cy.get('.list-btn-filter a.apply-filter')
    .click()
})

Then('Filter div is collapse', () => {
  cy.get('.filter-container')
    .should('not.be.visible')
})

And('I see filter option {string} show in headline', (option) => {
  cy.get('.list-apply .apply-item')
    .contains(option)
})

And('I click Reset Filters button', () => {
  cy.get('.list-btn-filter a.reset-filter')
    .click()
})

And('I do not see filter option {string} show in headline', (option) => {
  cy.get('.list-apply .apply-item')
    .contains(option)
    .should('not.exist')
})

Then('All option is not checked', () => {
  cy.window(win => {
    const $els = win.$('.list-filter .col-left input')
    let isAllUnchecked = true
    for (const el of $els) {
      if (el.checked) {
        isAllUnchecked = false
        break
      }
    }
    expect(isAllUnchecked).to.equal(true)
  })
})

When('I click x icon at filter option {string}', (option) => {
  cy.get(`.list-apply .apply-item div[data-checkbox=${mapOption[option]}] .icon-close1`)
    .click()
})

Then('Option {string} is not checked', (option) => {
  cy.get(`#${mapOption[option]}`)
    .should('not.be.checked')
})