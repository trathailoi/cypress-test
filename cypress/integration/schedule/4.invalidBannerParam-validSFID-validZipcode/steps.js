import { stubAdminAjaxApi } from '../../common/scripts'
import { stubbedData } from '../../common/scheduler/spec-data'

Given('Fake Admin Ajax Api with {string} data', (dataString) => {
  stubAdminAjaxApi(stubbedData.withValidSFID[dataString] || {})
})

Given('I open Scheduler page with param has invalid banner param but valid SFID and valid Zipcode', () => {
  cy.visit('/scheduler/?a=123&zip=91356&cid=BOSLEY.COM&crmid=00Q56000006rYv0EAE')
})
