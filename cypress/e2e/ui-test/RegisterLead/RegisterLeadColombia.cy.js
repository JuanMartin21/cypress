const LoginPage = require('../../../pages/HomePage/LoginPage');
import LoginData from '../../../fixtures/ui-testing-data/LoginData.json';
import { instance as RegisterLeadPage } from '../../../pages/RegisterLead/RegisterLeadPage';
import registerLeadColombia from '../../../fixtures/ui-testing-data/RegisterLead/RegisterLeadDataColombia.json';
import GlobalRegisterLeadPage from '../../../pages/RegisterLead/GlobalRegisterLeadPage';

describe('When register lead in Colombia', () => {
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

  it('Should register Colombia lead', () => {
    GlobalRegisterLeadPage.globalCompanyCreator(registerLeadColombia);
  });

  it.skip('Should fill billing information for Colombia', () => {
    RegisterLeadPage.fillBillingInformation(
      registerLeadUruguay.billingInformation,
    );
  });
});
