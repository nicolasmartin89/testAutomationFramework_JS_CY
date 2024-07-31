/// <reference types="cypress" />

//Test Suite
describe('Sauce Demo - [LOGIN]', () => {
  //Execute before each test case
  beforeEach(() => {
    
  })

const login_credentials = require('/cypress/fixtures/login_credentials_saucedemo.json');
const valid_username_login = login_credentials.valid_usarname_1;
const valid_password_login = login_credentials.valid_password_1;


  //Test Case for SauceDemo.
  it('@regression @sanity [LOGIN] Login with valid credentials. Validate that User is able to login with valid credentials', () => {
    
    cy.goToApp()

    //cy.get('#user-name').type('standard_user')

    cy.xpath("//input[@id='user-name']").type(valid_username_login)
    cy.get('#password').type(valid_password_login)

    cy.get('#login-button').click()

    cy.get('.product_label').should('have.text','Products')
  })

    //Test Case for Google.
  it('@regression [GOOGLE] Navigate to google page. Validate that User is able to see the Page Title', () => {
    
    cy.visit('http://google.com')

    cy.get('.uU7dJb').should('have.text', "Argentina")
    
  })
})
