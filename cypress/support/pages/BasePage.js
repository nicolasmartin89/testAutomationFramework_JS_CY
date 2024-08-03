class BasePage{

    clickOnWebElement(element){
        cy.log("Clicking the" + element + " button")
        element.click()
    }

    fillTextBox(element, textToFill){
        cy.log("Filling" + element + " with this text: "+ textToFill)
        element.clear()
        element.type(textToFill)
    }

    mouseHover_Force(element){
        element.trigger('mouseover', {force:true})
    }

    clickOnWebElement_Force(element){
        element.click({force:true})
    }

}
export default new BasePage()   