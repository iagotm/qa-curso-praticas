import userData from '../../fixtures/users/userData.json'
import LoginPage from '../../pages/loginPage'
import TransactionHistoryPage from '../../pages/transactionHistoryPage'

const loginPage = new LoginPage()
const transactionHistoryPage = new TransactionHistoryPage()

describe('template spec', () => {

  it('Exibir Historico de Transação', () => {
    loginPage.acessLoginPage()
    loginPage.loginWithUser(userData.userSuccess.username,userData.userSuccess.password)
    loginPage.checkFirstLoginDonePage()
    transactionHistoryPage.mineTransationNavButton()
    //cy.get('[data-test="transaction-list-empty-create-transaction-button"]').should('be.visible')
    //transactionHistoryPage.noTransactionAlertPage()
    transactionHistoryPage.noTransactionStatus()
  })

   it('Exibir Historico de Transação', () => {
     loginPage.acessLoginPage()
     loginPage.loginWithUser(userData.userSuccess.username,userData.userSuccess.password)
     loginPage.checkFirstLoginDonePage()
     transactionHistoryPage.mineTransationNavButton()
     transactionHistoryPage.transactionListStatus()
   })
})