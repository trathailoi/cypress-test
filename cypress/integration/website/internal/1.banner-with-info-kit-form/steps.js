import specData from '../../spec-data.json'
import { stubAdminAjaxApi } from '../../../common/scripts'

Given('Fake admin ajax api', () => {
  const fakeData = [
    {
      success: true,
      data: {
        urlRedirect: 'https://bosley-develop.box.carbon8test.com/scheduler/?kitform_thank_you=1'
      }
    }
  ]
  stubAdminAjaxApi(fakeData)
})

When('I input info to form', () =>{
  cy.get('#first-name')
    .type(specData.peopleInfo.firstName, { force: true })
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
  
When('I input info to form with name is {string} {string} {string} {string} {string} {string} {string}', (firstName, lastName, email, phone, street, zipcode, gender) => {
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

Then('I click Get My Free Info Kit button​', () =>{
  cy.get('section.mod-banner-form form button[type=submit]')
    .click()
});
  
Then('I see loading icon and button is disabled', () => {
  cy.get('section.mod-banner-form form .loading')
    .should('not.have.class', 'hidden')
  cy.get('section.mod-banner-form form button[type=submit]')
    .should('have.class', 'disabled')
})

Then(`I must be redirected to scheduler with params kit form thank you`, () =>{
  cy.url()
  .should('equal', `https://bosley-develop.box.carbon8test.com/scheduler/?kitform_thank_you=1`)
});

Then('I can see red error in form', () =>{
  cy.get('.mod-banner-form form .form-group').then($els => {
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
  const url = `https://bosley-develop.box.carbon8test.com/wp-admin/admin-ajax.php*`
  cy.intercept('POST', url, (req) => {
    req.reply({
      success: false,
      data: { Message: 'Something is wrong!' }
    })
    req.alias = `AdminAjaxApi`
  })
})