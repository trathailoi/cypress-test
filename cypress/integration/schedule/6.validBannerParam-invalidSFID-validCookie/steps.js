import { stubAdminAjaxApi } from '../../common/scripts'
import { stubbedData } from '../../common/scheduler/spec-data'

Given('Fake Admin Ajax Api with {string} data', (dataString) => {
  stubAdminAjaxApi(stubbedData.withInvalidSFID[dataString] || {})
})

Given('I open Scheduler page with valid banner param, invalid crmid', () => {
  cy.visit(' /scheduler/?a=b&cid=BOSLEY.COM&crmid=test')
})