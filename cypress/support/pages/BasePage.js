class BasePage{

    clickOnWebElement(element){
        element.click()
    }

    fillTextBox(element, textToFill){
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
export default BasePage()   