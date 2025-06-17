import SingUpPage from '../../pages/singUpPage'
import LoginPage from '../../pages/loginPage'
import CreateBankPage from '../../pages/createBankPage'
import userData from '../../fixtures/users/userData.json'

const singUpPage = new SingUpPage()
const loginPage = new LoginPage()
const createBankPage = new CreateBankPage()


describe('template spec', () => {
 
  it.only('Enviar Dinheiro Saldo Sucifiente', () => {
      loginPage.acessLoginPage()
      loginPage.loginWithUser(userData.userSuccess.username,userData.userSuccess.password)
      loginPage.checkFirstLoginDonePage()
      cy.get('[data-test="nav-top-new-transaction"]').click()
      cy.get('[data-test="user-list-item-uBmeaz5pX"]').click()
      cy.get('#amount').type('500')
      cy.get('#transaction-create-description-input').type('Pagamento de Boleto')
      cy.get('[data-test="transaction-create-submit-payment"]').click()
    })

    //it.only('Enviar Dinheiro Saldo Insuficiente', () => {
    //  loginPage.acessLoginPage()
    //  loginPage.loginWithUser(userData.userSuccess.username,userData.userSuccess.password)
    //  loginPage.checkFirstLoginDonePage()
    //  cy.get('[data-test="nav-top-new-transaction"]').click()
    //  cy.get('[data-test="user-list-item-uBmeaz5pX"]').click()
    //  cy.get('#amount').type('500')
    //  cy.get('#transaction-create-description-input').type('Pagamento de Boleto')
    //  cy.get('[data-test="transaction-create-submit-payment"]').click()
    //})
})