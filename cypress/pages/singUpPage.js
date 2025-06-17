class SingUpPage {
  selectorsList() {
    const selectors = {
      firstNameField: "[name='firstName']",
      lastNameField: "[name='lastName']",
      usernameField: "[name='username']",
      passwordField: "[name='password']",
      passwordAlertField: "#password-helper-text",
      passwordConfirmField: "[name='confirmPassword']",
      passwordConfirmAlertField: "#confirmPassword-helper-text",
      submitButton: "[type='submit']"
    }
    return selectors
  }
  singUpButtonPage() {
    cy.get('[href="/signup"]').click()
  }

  fillAccountDetails(firstName, lastName, username, password, passwordConfirm) {
    cy.get(this.selectorsList().firstNameField).type(firstName)
    cy.get(this.selectorsList().lastNameField).type(lastName)
    cy.get(this.selectorsList().usernameField).type(username)
    cy.get(this.selectorsList().passwordField).type(password)
    cy.get(this.selectorsList().passwordConfirmField).type(passwordConfirm)
  }

  fillAccountFailPasswordBlank(firstName, lastName, username) {
    cy.get(this.selectorsList().firstNameField).type(firstName)
    cy.get(this.selectorsList().lastNameField).type(lastName)
    cy.get(this.selectorsList().usernameField).type(username)
    cy.get(this.selectorsList().passwordConfirmField).click()
    cy.get(this.selectorsList().passwordField).click()
    cy.get(this.selectorsList().passwordConfirmField).click()
    cy.get(this.selectorsList().passwordConfirmAlertField)
    cy.get(this.selectorsList().passwordAlertField)
  }

  fillAccountMustContain(firstName, lastName, username, password, passwordConfirm) {
    cy.get(this.selectorsList().firstNameField).type(firstName)
    cy.get(this.selectorsList().lastNameField).type(lastName)
    cy.get(this.selectorsList().usernameField).type(username)
    cy.get(this.selectorsList().passwordField).type(password)
    cy.get(this.selectorsList().passwordConfirmField).type(passwordConfirm)
    cy.get(this.selectorsList().passwordAlertField)
  }

  fillAccountWrongPassword(firstName, lastName, username, password, passwordConfirm) {
    cy.get(this.selectorsList().firstNameField).type(firstName)
    cy.get(this.selectorsList().lastNameField).type(lastName)
    cy.get(this.selectorsList().usernameField).type(username)
    cy.get(this.selectorsList().passwordField).type(password)
    cy.get(this.selectorsList().passwordConfirmField).type(passwordConfirm)
    cy.get(this.selectorsList().passwordConfirmAlertField)
  }

  submitSingUpPage() {
    cy.get(this.selectorsList().submitButton).click()
  }
}

export default SingUpPage