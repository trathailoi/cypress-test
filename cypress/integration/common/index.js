import { stubAdminAjaxApi } from './scripts'

Given('Visit {string} #Common', (page) => {
  cy.visit(page)
})

Given('Wait {string} ms', (time) => {
  cy.wait(Number(time))
})

Given('Fake admin ajax api #Common', () => {
  stubAdminAjaxApi()
})

Given('Wait for Admin Ajax {string} times #Common', (string) => {
  cy.wait(`@${string}-Times-AdminAjaxApi`)
})

Given('I want to remove Cookie #Common', () => {
  cy.clearCookies()
})

Given('I want to remove Session #Common', () => {
  cy.clearAllWindowSession()
})

Given('Visit home page #Common', () => {
  cy.visit('/')
})

Given('Clear window session #Common', () => {
  cy.clearAllWindowSession()
})

Given('Refresh window #Common', () => {
  cy.reload()
})

Given('Go to Scheduler page #Common', () => {
  cy.get('.menu-item.hidden > .btn').click()
})