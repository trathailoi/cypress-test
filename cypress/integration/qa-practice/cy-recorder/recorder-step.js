import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";

Given(`I visit website and search keyword`,()=>{
  cy.visit('https://bosley-develop.box.carbon8test.com');
  cy.get('.py-8 > .hidden > .icomoon').click();
  cy.get('#search').click();
  cy.get('#search').type('{backspace}');
  cy.get('#search').type('{backspace}');
  cy.get('#search').type('{backspace}');
  cy.get('#search').type('{backspace}');
  cy.get('#search').type('{backspace}');
  cy.get('#search').type('{backspace}');
  cy.get('#search').type('hair');
  cy.get('.w-27 > .icomoon').click();
  cy.get('.header-search-form').submit();
})

Then(`I must redirect search page with list result`,()=>{
  cy.url().should('contains', 'https://bosley-develop.box.carbon8test.com/search-result/');
  cy.get('.group-cont-rs-s:nth-child(1) .btn').click();
})

Given(`I visit Scheduler page`,()=>{
  cy.visit('https://bosley-develop.box.carbon8test.com/scheduler/');
})

Then(`I must see Default Banner and Disclaimer`,()=>{
  cy.get('.scheduler-content-banner').should('be.visible')
  cy.get('.scheduler-content-banner > p').should('have.text', 'Schedule your free in-person or video consultation to learn more about our hair loss solutions, ask any questions you might have, and work with a Bosley specialist to customize a plan to reach your hair restoration goals.');
  cy.get('.tab-about')
    .should('be.visible')
    .should('have.css', 'background-color').and('eq', 'rgb(240, 73, 35)')
  cy.contains('Tell Us About You').should('be.visible')
})