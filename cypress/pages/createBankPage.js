class CreateBankPage {
  selectorsList() {
    const selectors = {
      getStartButtonNext: "[data-test='user-onboarding-next']",
      bankAccountName: "#bankaccount-bankName-input",
      bankAccountRouting: "#bankaccount-routingNumber-input",
      bankAccountNumber: "#bankaccount-accountNumber-input",
      submitSaveBank: "[data-test='bankaccount-submit']",
      doneButton: "[data-test='user-onboarding-next']"
    }
    return selectors
  }

  getStartButtonNextPage() {
    cy.get(this.selectorsList().getStartButtonNext).click() 
  }

  createBankDetailsPage(bankname, bankroute, banknumber) {
    cy.get(this.selectorsList().bankAccountName).type(bankname)
    cy.get(this.selectorsList().bankAccountRouting).type(bankroute)
    cy.get(this.selectorsList().bankAccountNumber).type(banknumber)
  }
   createBankSubmitPage() {
    cy.get(this.selectorsList().submitSaveBank).click() 
  }

   createBankDoneButtonPage() {
    cy.get(this.selectorsList().doneButton).click() 
  }
}

export default CreateBankPage