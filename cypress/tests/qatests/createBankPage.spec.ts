import SingUpPage from '../../pages/singUpPage'
import LoginPage from '../../pages/loginPage'
import CreateBankPage from '../../pages/createBankPage'
import userData from '../../fixtures/users/userData.json'

const singUpPage = new SingUpPage()
const loginPage = new LoginPage()
const createBankPage = new CreateBankPage()


describe('template spec', () => {

  it('Create Bank First Login', () => {
      loginPage.acessLoginPage()
      loginPage.loginWithUser(userData.userSuccess.username,userData.userSuccess.password)
      loginPage.checkFirstLoginPage()
      createBankPage.getStartButtonNextPage()
      createBankPage.createBankDetailsPage('Banco Inter', '762619140', '845826771')
      createBankPage.createBankSubmitPage()
      createBankPage.createBankDoneButtonPage()
    })
})