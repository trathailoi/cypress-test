import { stubAdminAjaxApi } from '../../common/scripts'
import { stubbedData } from '../../common/scheduler/spec-data'

Given('Fake Admin Ajax Api with {string} data', (dataString) => {
  stubAdminAjaxApi(stubbedData.withCookies[dataString] || {})
})

Then('I must see Thank You content on Banner', () => {
  cy.contains('Thank You, your free info kit and $250 Gift Card are on their way. Want to discover the best hair solution for you?', { timeout: 10000 })
})