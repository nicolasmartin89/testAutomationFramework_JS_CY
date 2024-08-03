import BasePage from "./BasePage"

class LoginPage{
    //Define elements
    elements = {
        textBox_userName: ()=> cy.xpath("//input[@id='user-name']"),
        textBox_password: ()=> cy.get('#password'),
        loginButton: ()=> cy.get('#login-button')
    }

    //Operations / Methosd we want to perform

    fill_textBox_username(username) {
        //this.textBox_userName.type(username)
        BasePage.fillTextBox(this.elements.textBox_userName(), username)
    }
    fill_textBox_password(password) {
        //this.textBox_password.type(password)
        BasePage.fillTextBox(this.elements.textBox_password(), password)
    }
    click_login_button() {
        //this.loginButton.click()
        BasePage.clickOnWebElement(this.elements.loginButton())
    }
}

export default new LoginPage();