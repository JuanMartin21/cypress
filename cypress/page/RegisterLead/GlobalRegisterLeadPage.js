import { instance as RegisterLeadPage } from './RegisterLeadPage';
import { instance as RegisterLeadColombiaExtension } from './RegisterLeadColombiaExtension';
import { instance as RegisterLeadChileExtension } from './RegisterLeadChileExtension';
import { instance as RegisterLeadMexicoExtension } from './RegisterLeadMexicoExtension';
import { instance as RegisterLeadPeruExtension } from './RegisterLeadPeruExtension';

class GlobalRegisterLeadPage {
  globalCompanyCreatorByCountry() {
    const getCreatorByCountry = {
      mexico: (registerLead) =>
        RegisterLeadMexicoExtension.mexicoCompanyCreator(registerLead),
      chile: (registerLead) =>
        RegisterLeadChileExtension.chileCompanyCreator(registerLead),
      colombia: (registerLead) =>
        RegisterLeadColombiaExtension.colombiaCompanyCreator(registerLead),
      peru: (registerLead) =>
        RegisterLeadPeruExtension.peruCompanyCreator(registerLead),
    };

    return getCreatorByCountry;
  }

  globalCompanyCreator(registerLead) {
    const getCreatorByCountry = this.globalCompanyCreatorByCountry();
    const businessCountry = registerLead.business.country
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '');
    const creatorByCountry = getCreatorByCountry[businessCountry];

    RegisterLeadPage.fillBusinessInformation(registerLead.business);
    RegisterLeadPage.fillContacts(registerLead.contacts);
    RegisterLeadPage.saveInformation();
    RegisterLeadPage.fillForeignBillInformation(registerLead.business);

    creatorByCountry(registerLead);

    RegisterLeadPage.comexContact();
    RegisterLeadPage.invoiceContact();
    RegisterLeadPage.saveInformation();
    RegisterLeadPage.confirmRegisterOnModal();
  }
}
module.exports = new GlobalRegisterLeadPage();
