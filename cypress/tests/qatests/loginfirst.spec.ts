import userData from '../../fixtures/users/userData.json'
import LoginPage from '../../pages/loginPage'
import FirstLoginPage from '../../pages/firstLoginPage'

const loginPage = new LoginPage()
const firstLoginPage = new FirstLoginPage()

describe('template spec', () => {

  it('Login Success', () => {
    loginPage.acessLoginPage()
    loginPage.loginWithUser(userData.userSuccess.username,userData.userSuccess.password)
    firstLoginPage.checkFirstLoginPage()
  })

  it('Login Fail', () => {
    loginPage.acessLoginPage()
    loginPage.loginWithUser(userData.userFail.username,userData.userFail.password)
    loginPage.checkAccessInvalid()
  })
})