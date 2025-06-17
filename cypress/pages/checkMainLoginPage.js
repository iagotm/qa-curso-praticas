class CheckMainLoginPage {
  selectorsList() {
    const selectors = {
      mainLoginPage: "[data-test='nav-public-tab']"
    }
    return selectors
  }
  checkMainLoginPage() {
    //cy.location('pathname').should('equal', '/web/dashboard/index')
    cy.get(this.selectorsList().mainLoginPage).should('be.visible')
  }
}

export default CheckMainLoginPage