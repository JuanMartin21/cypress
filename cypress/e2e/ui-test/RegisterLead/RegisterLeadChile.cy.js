const LoginPage = require('../../../pages/HomePage/LoginPage');
import LoginData from '../../../fixtures/ui-testing-data/LoginData.json';
import { instance as RegisterLeadPage } from '../../../pages/RegisterLead/RegisterLeadPage';
import registerLeadChile from '../../../fixtures/ui-testing-data/RegisterLead/RegisterLeadDataChile.json';
import GlobalRegisterLeadPage from '../../../pages/RegisterLead/GlobalRegisterLeadPage';

describe('When register lead in Chile', () => {
  let companyName = undefined;

  beforeEach(() => {
    Cypress.on('uncaught:exception', (err, runnable) => {
      return false;
    });
    LoginPage.loginWithCredentials(LoginData.salesUser, LoginData.salesPass);
    RegisterLeadPage.redirectToProfileRegisterLead();
    RegisterLeadPage.goToView(false).then((companyNameResponse) => {
      companyName = companyNameResponse;
    });
  });

  it('Should register chile lead', () => {
    GlobalRegisterLeadPage.globalCompanyCreator(registerLeadChile);
  });
});
