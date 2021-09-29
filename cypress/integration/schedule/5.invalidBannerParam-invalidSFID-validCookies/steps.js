import { stubAdminAjaxApi } from '../../common/scripts'
import { stubbedData } from '../../common/scheduler/spec-data'

Given('Fake Admin Ajax Api with {string} data', (dataString) => {
  stubAdminAjaxApi(stubbedData.withInvalidSFID[dataString] || {})
})

Given('I open Scheduler page with param has invalid SFID and not match key', () => {
  cy.visit('/scheduler/?a=123&cid=BOSLEY.COM&crmid=test')
})