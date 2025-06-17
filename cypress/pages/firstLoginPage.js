class FirstLoginPage {
  selectorsList() {
    const selectors = {
      getStarted: "[data-test='user-onboarding-dialog-title']",
      mainLoginPage: "[data-test='nav-public-tab']"
    }
    return selectors
  }
  checkFirstLoginPage() {
   // cy.location('pathname').should('equal', 'http://localhost:3001/login')
    cy.get(this.selectorsList().getStarted).should('be.visible')
  }

  checkFirstLoginDonePage() {
    cy.get(this.selectorsList().mainLoginPage)
  }
}
export default FirstLoginPage