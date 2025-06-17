class LoginPage {
  selectorsList() {
    const selectors = {
      usernameField: "[name='username']",
      passwordField: "[name='password']",
      loginButton: "[type='submit']",
      wrongCredentialAlert: "[role='alert']",
      getStarted: "[data-test='user-onboarding-dialog-title']",
      mainLoginPage: "[data-test='nav-public-tab']"
    }
    return selectors
  }
  acessLoginPage() {
    cy.visit('http://localhost:3000/')
  }

  loginWithUser(username, password){
    cy.get(this.selectorsList().usernameField).type(username)
    cy.get(this.selectorsList().passwordField).type(password)
    cy.get(this.selectorsList().loginButton).click()
  }

  checkAccessInvalid(username, password){
    cy.get(this.selectorsList().wrongCredentialAlert)
  }
  checkFirstLoginPage() {
    //cy.location('pathname').should('equal', 'http://localhost:3001/login')
    cy.get(this.selectorsList().getStarted).should('be.visible')
  }

  checkFirstLoginDonePage() {
    cy.get(this.selectorsList().mainLoginPage)
  }
}

export default LoginPage