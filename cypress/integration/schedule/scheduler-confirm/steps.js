
Given(`I open Scheduler Appointment Confirm page with param has not exist apptid`, () => {
  cy.visit('/lp/a/')
})

Given(`I open Scheduler Appointment Confirm page with param has invalid apptid`, () => {
  cy.visit('/lp/a/?actid=123')
})

Given(`I open Scheduler Appointment Confirm page with param has valid apptid`, () => {
  cy.visit('/lp/a/?actid=a3U190000003ZeBEAU')
})

Then(`I can see message this Appointment not found`, () => {
  cy.contains('Sorry we can’t find your appointment')
  cy.contains('Please call us at 800.965.6405')
  cy.get('a')
    .contains('800.965.6405')
    .invoke('attr', 'href')
    .should('equal', 'tel:+18009656405')
  cy.get('a')
    .contains('Call Now')
    .invoke('attr', 'href')
    .should('equal', 'tel:+18009656405')
})

Then(`This Appointment has detail which Status = {string} and Confirmed = {string}`, (arg1, arg2) => {
})
  
Then(`I can see page with Cancel message`, () => {
  cy.get('h1')
    .contains('Appointment Cancelled')
})

Then(`I can see detail of appointment: Date, Time, Location`, () => {
  cy.get('p[data-uw-styling-context]').then($els => {
    expect($els[0].innerText).to.equal('Sep 15, 2021')
    expect($els[1].innerText).to.equal('9:00 AM')
  })
})

Then(`I can see 1 button Reschedule`, () => {
  cy.get('a > span.btn-text')
    .contains('Reschedule')
    .parent()
    .then($els => {
      expect($els[0].getAttribute('href')).to.equal('/scheduler?zip=&crmid=00Q190000060071EAA')
    })
})

Then(`This Location Appointment has detail which Status = {string} and Confirmed = {string}`, (arg1, arg2) => {
})

Then(`I can see page with request confirm message`, () => {
})

Then(`I can see detail of appointment: Date, Time, Location with address`, () => {
})

Then(`I can	see 3 button Reschedule, Confirm, Cancel`, () => {
})

Then(`This Video Appointment has detail which Status = {string} and Confirmed = {string}`, (arg1, arg2) => {
})

Then(`I can see detail of appointment: Date, Time, Location with video info`, () => {
})

Then(`This Appointment has detail which Confirmed = {string}`, (arg1) => {
})

Then(`I can see page with Confirmed message`, () => {
})

Then(`I can	see 4 button add Calendar`, () => {
})

Then(`I can	see 2 button Reschedule, Cancel`, () => {
})

Then(`I must see Location form with param has SFID and tab1 Name is "Schedule a Free Consultation Now​"`, () => {
})

Then(`I can see 4 button add Calendar`, () => {
})

Then(`I can see 2 button Reschedule, Cancel`, () => {
})

Then(`I can see popup Cancel`, () => {
})

Then(`I can see 3 button Reschedule, Confirm, Cancel`, () => {
})

When(`I click button Reschedule`, () => {
})

When(`I click button Confirm`, () => {
})

When(`I click button Cancel`, () => {
})

When(`I click button No,Go back on popup Cancel`, () => {
})

When(`I click button Yes,Cancel on popup Cancel`, () => {
})