import specData from '../spec-data.js'

Given('I open homepage', () => {
  cy.visit('/', { timeout: 120000 })
})

When('I enter new user to form Free Kit with name is {string} {string} {string} {string} {string} {string} {string} #CommonPhase2', (firstName, lastName, email, phone, street, zipcode, gender) => {
  cy.scrollTo(0, 6000)
  if (firstName) {
    cy.get('#first-name', { timeout: 10000 })
        .type(firstName, { force: true })
  }
  if (lastName) {
    cy.get('#last-name', { timeout: 10000 })
      .type(lastName, { force: true })
  }
  if (email) {
    cy.get('#email', { timeout: 10000 })
      .type(email, { force: true })
  }
  if (phone) {
    cy.get('#phone', { timeout: 10000 })
      .type(phone, { force: true })
  }
  if (street) {
    cy.get('#street', { timeout: 10000 })
      .type(street, { force: true })
  }
  if (zipcode) {
    cy.get('#zip', { timeout: 10000 })
      .type(zipcode, { force: true })
  }
  if (gender) {
    const genderTag = `#${String(gender).toLowerCase()}`
    cy.get(genderTag, { timeout: 10000 })
      .click({ force: true })
  }
})

Then('I submit Free Kit form #CommonPhase2', () => {
  cy.contains('Get My Free Info Kit')
    .click()
})

Then('I can see submit free fit result #CommonPhase2', () => {
  cy.contains('Schedule a Consult Today')
  cy.contains('A free, no obligation consultation with a Bosley specialist will get you a customized plan for your unique needs.')
  cy.contains('Schedule a Free Consultation')
})

When('I click schedule a free consultation #CommonPhase2', () => {
  cy.get('a')
    .contains('Schedule a Free Consultation')
    .click()
})

Then('I have been redirect to scheduler page #CommonPhase2', () => {
  cy.url()
    .should('equal', `${Cypress.env('BASE_URL')}/scheduler/`)
})

When('I click Previous button #CommonPhase2', () => {
  cy.contains('Previous Step')
    .click()
})

Then('I can see user info is {string} {string} {string} {string} {string} {string} {string} #CommonPhase2', (firstName, lastName, email, phone, street, zipcode, gender) => {
  if (firstName) {
    cy.get('#first-name1', { timeout: 10000 })
      .invoke('val')
      .should('equal', firstName)
  }
  if (lastName) {
    cy.get('#first-name2', { timeout: 10000 })
      .invoke('val')
      .should('equal', lastName)
  }
  if (email) {
    cy.get('#first-name12', { timeout: 10000 })
      .invoke('val')
      .should('equal', email)
  }
  if (phone) {
    cy.get('#first-name3', { timeout: 10000 })
      .invoke('val')
      .should('equal', phone)
  }
  if (street) {
    cy.get('#first-name4', { timeout: 10000 })
      .invoke('val')
      .should('equal', street)
  }
  if (zipcode) {
    cy.get('#first-name5', { timeout: 10000 })
      .invoke('val')
      .should('equal', zipcode)
  }
})