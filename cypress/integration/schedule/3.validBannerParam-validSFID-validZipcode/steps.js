import { stubAdminAjaxApi } from '../../common/scripts'
import { stubbedData } from '../../common/scheduler/spec-data'

Given('Fake Admin Ajax Api with {string} data', (dataString) => {
  stubAdminAjaxApi(stubbedData.withValidSFID[dataString] || {})
})

Given('I open Scheduler page with param has valid SFID, match key and valid Zipcode', () => {
  cy.visit('/scheduler/?a=b&zip=91356&cid=BOSLEY.COM&crmid=00Q56000006rYv0EAE')
})
