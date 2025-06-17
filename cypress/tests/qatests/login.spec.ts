import userData from '../../fixtures/users/userData.json'
import LoginPage from '../../pages/loginPage'

const loginPage = new LoginPage()

describe('template spec', () => {

  it('Login Success', () => {
    loginPage.acessLoginPage()
    loginPage.loginWithUser(userData.userSuccess.username,userData.userSuccess.password)
    loginPage.checkFirstLoginPage()
  })

  it('Login Fail', () => {
    loginPage.acessLoginPage()
    loginPage.loginWithUser(userData.userFail.username,userData.userFail.password)
    loginPage.checkAccessInvalid()
  })
})