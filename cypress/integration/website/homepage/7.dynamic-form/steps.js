import specData from '../../spec-data.json'

Given('Set session hide Dynamic form', () => {
  cy.setCookie('HiddenFormDynamic', 'true')
})

Given('I scroll to Dynamic Form​ section', () =>  {
  cy.scrollTo(0, 6500)
});

When('I input info to dynamic form', () =>{
  cy.get('#first-name')
    .type(specData.peopleInfo.firstName)
  cy.get('#last-name')
    .type(specData.peopleInfo.lastName, { force: true })
  cy.get('#email')
    .type(specData.peopleInfo.email, { force: true })
  cy.get('#phone')
    .type(specData.peopleInfo.phoneNumber, { force: true })
  cy.get('#street')
    .type(specData.peopleInfo.streetAddress, { force: true })
  cy.get('#zip')
    .type(specData.peopleInfo.zipCode, { force: true })
});


When('I input info to dynamic form with name is {string} {string} {string} {string} {string} {string} {string}', (firstName, lastName, email, phone, street, zipcode, gender) => {
  if (firstName) {
    cy.get('#first-name')
      .type(firstName, { force: true })
  }
  if (lastName) {
    cy.get('#last-name')
    .type(lastName, { force: true })
  }
  if (email) {
    cy.get('#email')
    .type(email, { force: true })
  }
  if (phone) {
    cy.get('#phone')
    .type(phone, { force: true })
  }
  if (street) {
    cy.get('#street')
    .type(street, { force: true })
  }
  if (zipcode) {
    cy.get('#zip')
    .type(zipcode, { force: true })
  }
  if (gender) {
    const genderTag = `#${String(gender).toLowerCase()}`
    cy.get(genderTag, { timeout: 10000 })
      .click({ force: true })
  }
})

When('I click Get My Free Info Kit button​', () =>{
  cy.get('section.mod-dynamic-form form button[type=submit]')
    .click()
});

Then('I see loading icon and button is disabled', () => {
  // submit form => disable button, show loading
  cy.get('section.mod-dynamic-form form .loading')
    .should('not.have.class', 'hidden')
  cy.get('section.mod-dynamic-form form button[type=submit]')
    .should('have.class', 'disabled')
})

// Then('I do not see loading icon and button is active', () => {
//   // submit form => disable button, show loading
//   cy.get('section.mod-dynamic-form form .loading')
//     .should('have.class', 'hidden')
//   cy.get('section.mod-dynamic-form form button[type=submit]')
//     .should('not.have.class', 'disabled')
// })

Then(`Section Dynamic form is hidden`, () =>{
  cy.get('section.mod-dynamic-form')
    .should('not.be.visible')
});

Then('I must see section Schedule​', () =>{
    cy.get('.mod-half-text-illustration')
      .contains('Schedule a Consult Today')
    cy.get('.mod-half-text-illustration')
      .contains('A free, no obligation consultation with a Bosley specialist will get you a customized plan for your unique needs.')
    cy.get('.mod-half-text-illustration a')
      .contains('Schedule a Free Consultation')
      .invoke('attr', 'href')
      .should('equal', `${Cypress.env('BASE_URL')}/scheduler/`)
});


Then('I can see red error in dynamic form', () =>{
  cy.get('.mod-dynamic-form form .form-group').then($els => {
    let checkHaveError = false
    for (const el of $els) {
      if (el.classList.contains('error')) {
        checkHaveError = true
        break
      }
    }
    expect(checkHaveError).to.equal(true)
  })
});

Given('Fake admin ajax api false', () => {
  const url = `${Cypress.env('BASE_URL')}/wp-admin/admin-ajax.php*`
  cy.intercept('POST', url, (req) => {
    req.reply({
      success: false,
      data: { Message: 'Something is wrong!' }
    })
    req.alias = `AdminAjaxApi`
  })
})

// Given('Wait for fetch data false', () => {
//   cy.wait(`@AdminAjaxApi`)
// })

// Then('I can see text something is wrong at dynamic form', () => {
//   cy.get('.mod-dynamic-form')
//     .contains('Something is wrong!')
// })