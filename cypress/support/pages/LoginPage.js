class LoginPage{
    //Define elements
    elements = {
        textBox_userName: ()=> cy.xpath("//input[@id='user-name']"),
        textBox_password: ()=> cy.get('#password'),
        loginButton: ()=> this.cy.get('#login-button')
    }

    //Operations / Methosd we want to perform

    fill_textBox_username(username) {
        this.textBox_userName.type(username)
    }
    fill_textBox_password(password) {
        this.textBox_password.type(password)
    }
    click_login_button() {
        this.loginButton.click()
    }
}

export default new LoginPage();