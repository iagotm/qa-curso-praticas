import SingUpPage from '../../pages/singUpPage'
import LoginPage from '../../pages/loginPage'
describe('template spec', () => {

  const singUpPage = new SingUpPage()
  const loginPage = new LoginPage()

  it.only('Register Account Success', () => {
    loginPage.acessLoginPage()
    singUpPage.singUpButtonPage();
    singUpPage.fillAccountDetails('Jonas', 'Vieira', 'jonasbank', 'test123', 'test123')
    singUpPage.submitSingUpPage()
  })

  it('Register Account Fail (Password Blank)', () => {
    loginPage.acessLoginPage()
    singUpPage.singUpButtonPage();
    singUpPage.fillAccountFailPasswordBlank('Jonas', 'Vieira', 'jonasbank')
  })

  it('Register Account Fail (Password Must Contain)', () => {
    loginPage.acessLoginPage()
    singUpPage.singUpButtonPage();
    singUpPage.fillAccountMustContain('Jonas', 'Vieira', 'jonasbank', '123', '123')
  })

  it('Register Account Fail (Password Wrong)', () => {
    loginPage.acessLoginPage()
    singUpPage.singUpButtonPage();
    singUpPage.fillAccountWrongPassword('Jonas', 'Vieira', 'jonasbank', 'test123', 'test124')
  })

})