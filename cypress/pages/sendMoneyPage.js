class SendMoneyPage {
  selectorsList() {
    const selectors = {
      newTransationButton: "[data-test='nav-top-new-transaction']",
      choosePerson: "[data-test='user-list-item-uBmeaz5pX']",
      amountMoney: "#amount",
      noteMoney: "#transaction-create-description-input",
      submitSendMoney: "[data-test='transaction-create-submit-payment']"
    }
    return selectors
  }

  newTransationButtonPage(){
    cy.get(this.selectorsList().newTransationButton).click()
  }

  choosePersonPage(){
    cy.get(this.selectorsList().choosePerson).click()
  }

  personToSendMoneyPage(amount, description){
    cy.get(this.selectorsList().amountMoney).type(amount)
    cy.get(this.selectorsList().noteMoney).type(description)
  }

  newTransationButtonPage(){
    cy.get(this.selectorsList().newTransationButton).click()
  }

  submitSendMoneyPage(){
    cy.get(this.selectorsList().submitSendMoney).click()
  }


}

export default SendMoneyPage
