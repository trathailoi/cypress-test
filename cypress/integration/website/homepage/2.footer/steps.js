import specData from '../../spec-data.json'
import { stubAdminAjaxApi } from '../../../common/scripts'

Given('Fake admin ajax api', () => {
  const responseSuccessForm = {
    success: true,
    data: {
      __type: "Bosley_Self_Service.BosleyshortformDataObject",
      SFID: "00Q190000060EqsEAE",
      Email: "",
      Message: "SUCCESS",
      ReturnCode: 200,
      isLeadConsultProcedure: "Lead",
      isNew: true,
      zipCode: "41026",
      successMessage:
        "Thank you for your interest! Check your email for your Bosley Info Kit.",
    },
  }
  stubAdminAjaxApi([
    {
      success: true,
      data: {}
    },
    responseSuccessForm
  ])
})


Given(/^I scroll to footer​ section$/, () =>{
  cy.scrollTo('bottom')
});

Given(/^I input First Name, Last Name, Phone​$/, () =>{
  cy.get('#first-name-footer')
    .type(specData.peopleInfo.firstName)
  cy.get('#last-name-footer')
    .type(specData.peopleInfo.lastName, { force: true })
  cy.get('#phone-footer')
    .type(specData.peopleInfo.phoneNumber, { force: true })
});

When(/^I click subscribe button​$/, () =>{
  cy.get('.form-footer button[type=submit]')
    .click()
});

Then('I can see subcribe button is disabled and loading icon', () => {
  cy.get('.form-footer button[type=submit]')
    .should('have.class', 'disabled')
  cy.get('.form-footer .loading')
    .should('not.have.class', 'hidden')
})

Then(/^I can see subcribe button is active and loading icon hidden$/, () =>{
  cy.get('.form-footer button[type=submit]')
    .should('not.have.class', 'disabled')
  cy.get('.form-footer .loading')
    .should('have.class', 'hidden')
});

Then(/^I must see popup form Thanks for subscribing$/, () =>{
  cy.get('.popup-form-footer')
    .should('be.visible')
});

When(/^I input Email, Street Address, Zipcode, chọn Man or Woman​$/, () =>{
  cy.get('#email-popup')
    .type(specData.peopleInfo.email)
  cy.get('#address-popup')
    .type(specData.peopleInfo.streetAddress, { force: true })
  cy.get('#zip-popup')
    .type(specData.peopleInfo.zipCode, { force: true })});

Then(/^I click Send Info Kit button​$/, () =>{
  cy.get('.popup-form-footer button[type=submit]')
    .click()
});

Then('I can see send kit button is disabled and loading icon', () => {
  // submit form => disable button, show loading
  cy.get('.popup-form-footer button[type=submit]')
    .should('have.class', 'disabled')
  cy.get('.popup-form-footer .loading')
    .should('not.have.class', 'hidden')
})

Then('I can see send kit button is active and loading icon hidden', () => {
  // submitted => remove disabled, hide loading
  cy.get('.popup-form-footer button[type=submit]')
    .should('not.have.class', 'disabled')
  cy.get('.popup-form-footer .loading')
    .should('have.class', 'hidden')
})

Then(/^I must see thank you message$/, () =>{
  cy.contains('Thank you for your interest! Check your email for your Bosley Info Kit.')
    .should('be.visible')
});

Then(/^I can see red error in subcribe form$/, () =>{
  cy.get('.form-footer .form-group').then($els => {
    for (const el of $els) {
      cy.get(el).should('have.class', 'error')
    }
  })
});

Then(/^I can see red error in popup form$/, () =>{
  // for (let i = 1; i <= 3; i++) {
  //   cy.get(`.popup-form-footer .form-group:nth-child(${i})`)
  //     .should('have.class', 'error')
  cy.get(`.popup-form-footer .form-group:nth-child(1)`)
    .should('have.class', 'error')
  cy.get(`.popup-form-footer .form-group:nth-child(2)`)
    .should('have.class', 'error')
  cy.get(`.popup-form-footer .form-group:nth-child(4)`)
    .should('have.class', 'error')
});
