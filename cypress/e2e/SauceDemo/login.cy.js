/// <reference types="cypress" />

//Test Suite
describe('Sauce Demo - [LOGIN]', () => {
  //Execute before each test case
  beforeEach(() => {
    cy.goToApp()
  })

  //Test Case
  it('[LOGIN] Login with valid credentials. Validate that User is able to login with valid credentials', () => {
    //cy.get('#user-name').type('standard_user')

    cy.xpath("//input[@id='user-name']").type('standard_user')
    cy.get('#password').type('secret_sauce')

    cy.get('#login-button').click()

    cy.get('.product_label').should('have.text','Products')
  })
})
