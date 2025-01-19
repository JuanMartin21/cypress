const LoginPage = require('../../../pages/HomePage/LoginPage');
import LoginData from '../../../fixtures/ui-testing-data/LoginData.json';
import { instance as RegisterLeadPage } from '../../../pages/RegisterLead/RegisterLeadPage';
import registerLeadPeru from '../../../fixtures/ui-testing-data/RegisterLead/RegisterLeadDataPeru.json';
import GlobalRegisterLeadPage from '../../../pages/RegisterLead/GlobalRegisterLeadPage';

describe('When register lead in Perú', () => {
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

  it('Should register Perú lead', () => {
    GlobalRegisterLeadPage.globalCompanyCreator(registerLeadPeru);
  });
});
