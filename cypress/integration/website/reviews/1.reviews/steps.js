
import { expect } from 'chai'
import { fakeData, mapFilter, expectData } from './spec-data.json'

Given('Fake admin ajax api get {string}', (filter) => {
  const url = `https://bosley-develop.box.carbon8test.com/wp-admin/admin-ajax.php*`
  cy.intercept('GET', url, (req) => {
    req.reply(fakeData[mapFilter[filter]])
    req.alias = `AdminAjaxApi`
  })
})

Given('Wait for fetch data', () => {
  cy.wait(`@AdminAjaxApi`)
})

Then('I can see loading icon', () => {
  cy.get('.mod-review .loading2 ')
    .should('not.have.class', 'hidden')
})

Then('I do not see loading icon', () => {
  cy.get('.mod-review .loading2 ')
    .should('have.class', 'hidden')
})

Then('I must see list {string} review', (filter) => {
  const filterExpectData = expectData[mapFilter[filter]]
  cy.get('.mod-review .list-review .review-item')
    .then($els => {
      let i = 0
      for (const el of $els) {
        const elInnerText = el.innerText
        const itemData = filterExpectData.items[i]
        expect(elInnerText).to.include(itemData.date)
        expect(elInnerText).to.include(itemData.content)
        expect(el.querySelectorAll('.list-start .icon-star').length).to.equal(itemData.rating)
        i++
      }
    })
})

When('I change filter to {string} value', (filter) => {
  cy.get('.mod-review div.dropdown')
    .click()

  cy.get('.mod-review div.dropdown-menu')
    .contains(filter === 'All' ? 'Filter by Location' : filter)
    .click()
})

When('I click show more', () => {
  cy.get('.mod-review')
    .contains('Show More')
    .click()
})

Then('I can see loading icon after show more', () => {
  cy.get('.mod-review .loading ')
    .should('not.have.class', 'hidden')
})

Then('I do not see loading icon after show more', () => {
  cy.get('.mod-review .loading ')
    .should('have.class', 'hidden')
})