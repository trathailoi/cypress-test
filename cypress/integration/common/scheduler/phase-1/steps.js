Then('I can see About you form #CommonPhase1', () => {
  cy.get('.tab-about').should('have.class', 'bg-orange-100')
  cy.get('.tab-location').should('have.class', 'bg-white')
  cy.get('.tab-date-time').should('have.class', 'bg-white')
  cy.contains('Tell Us About You')
})

When('I enter new user with name is {string} {string} {string} {string} {string} {string} {string} #CommonPhase1', (firstName, lastName, email, phone, street, zipcode, gender) => {
  if (firstName) {
    cy.get('#first-name1', { timeout: 10000 })
        .type(firstName, { force: true }) // hiện tại bị che bởi fixed nav nên cần force
  }
  if (lastName) {
    cy.get('#first-name2', { timeout: 10000 })
      .type(lastName, { force: true })
  }
  if (email) {
    cy.get('#first-name12', { timeout: 10000 })
      .type(email, { force: true })
  }
  if (phone) {
    cy.get('#first-name3', { timeout: 10000 })
      .type(phone, { force: true })
  }
  if (street) {
    cy.get('#first-name4', { timeout: 10000 })
      .type(street, { force: true })
  }
  if (zipcode) {
    cy.get('#first-name5', { timeout: 10000 })
      .type(zipcode, { force: true })
  }
  if (gender) {
    const genderTag = `#${gender}`
    cy.get(genderTag, { timeout: 10000 })
      .click({ force: true })
  }
})

And('I submit Next Step button at About you form #CommonPhase1', () => {
  cy.contains('Next Step').click()
})
