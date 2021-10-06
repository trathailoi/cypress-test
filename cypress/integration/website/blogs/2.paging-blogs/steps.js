// let result = []
// for (const el of document.querySelectorAll('.list-blog-categories>div.text-p-xl-large')) {
//     const itemInfo = {}
//     itemInfo.backgroundImage = el.querySelector('.bg-blog-cate').getAttribute('style')
//     itemInfo.link = el.querySelector('.bg-blog-cate a').getAttribute('href')
//     itemInfo.title = el.querySelector('h3').innerText
//     result.push(itemInfo)
// }
// console.log(result)
import { fakeData, expectList } from './spec-data.json'


Given('Fake data page {string}', (page) => {
  const resData = fakeData[`page${page}`]
  const url = `${Cypress.env('BASE_URL')}/wp-admin/admin-ajax.php*`
  cy.intercept('GET', url, (req) => {
    req.reply(resData)
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

  const pageExpectData = expectList[`page${page}`]
  cy.window().then(win => {
    let i = 0
    for (const el of win.$('.mod-blog-categories .list-blog-categories>div.text-p-xl-large')) {
      const itemInfo = {
        backgroundImage: el.querySelector('.bg-blog-cate').getAttribute('style'),
        link: el.querySelector('.bg-blog-cate a').getAttribute('href'),
        title: el.querySelector('h3').innerText
      }
      const expectObj = pageExpectData[i]
      expect(itemInfo.backgroundImage).to.include(expectObj.backgroundImage)
      expect(itemInfo.link).to.include(expectObj.link)
      expect(itemInfo.title).to.equal(expectObj.title)
      i++
    }
  })
})