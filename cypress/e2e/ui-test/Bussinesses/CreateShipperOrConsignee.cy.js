import LoginPage from '../../../page/HomePage/loginTest';
import LoginData from '../../../fixtures/ui-testing-data/LoginData.json';
import Businesses from '../../../pages/Company/BusinessesPage';
import Shipper from '../../../fixtures/ui-testing-data/Shipper.json';

describe('When download a pdf quote ready', () => {
  beforeEach(() => {
    LoginPage.loginWithCredentials(
      LoginData.salesTinchoUser,
      LoginData.salesPass,
    );
  });
  it('create shpper or consignee', () => {
    Businesses.createShipper(Shipper);
  });

  it('deleate shipper or consignee', () => {
    Businesses.deleteShipper(Shipper);
  });
});
