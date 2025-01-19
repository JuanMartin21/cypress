import { faker } from '@faker-js/faker';
import { page as RegisterLeadPage } from './RegisterLeadPage';

const BTN_FILE_PAYMENT_INFORMATION =
  'input[data-testid="payment-information__file-input"]';

class RegisterLeadMexicoExtension extends RegisterLeadPage {
  constructor() {
    super();

    this.elements = {
      ...this.elements,
      body: () => cy.get('body'),
      optCityBillInfo: () => cy.get('.ant-select-selection'),
      optPotential: () =>
        cy.get('.ant-select-dropdown-menu', { timeout: 3000 }),
      txtTributaryTaxRegime: () =>
        cy.get('[data-testid="tributary-information-tax-regime"]'),
      btnFileUploadPaymentInformation: () =>
        cy.get(BTN_FILE_PAYMENT_INFORMATION),
      txtBusinessAccount: () =>
        cy.get('[data-testid="business-account-to-transfer"]'),
      txtBillInfoDataSocialReazon: () =>
        cy.get('[data-testid="tributary-information-business-social-reason"]'),
      txtBillInfoDataRut: () =>
        cy.get('[data-testid="tributary-information-rut"]'),
      txtBillInfoDataBusinessPhone: () =>
        cy.get('[data-testid="tributary-information-business-phone"]'),
    };
  }
  fillForeignBillInformationCity(business) {
    this.elements.optCityBillInfo().eq(1).click();
    cy.wait(500);
    this.elements.optPotential().contains(business.city).click();
    this.elements.txtTributaryTaxRegime().click();
    cy.wait(500);
    this.elements
      .optPotential()
      .contains(business.tributaryInformation)
      .click();
    this.elements
      .txtBillInfoDataSocialReazon()
      .clear()
      .type(faker.company.name());
    this.elements
      .txtBillInfoDataBusinessPhone()
      .clear()
      .type(faker.phone.number({ style: 'international' }));
    this.elements
      .txtBillInfoDataRut()
      .clear()
      .type(faker.number.int({ min: 1000000000, max: 9999999999 }).toString());
  }
  paymentInformation(business) {
    this.elements.txtBusinessAccount().type(business.accountNumber);
    this.elements.body().then(($body) => {
      const isBtnFileUploadRendered = $body.find(
        BTN_FILE_PAYMENT_INFORMATION,
      ).length;

      if (isBtnFileUploadRendered) {
        this.elements.btnFileUploadPaymentInformation().attachFile({
          filePath: 'resources/pdfs/DGIfileRegisterLead.pdf',
          mimeType: 'application/pdf',
        });
      }
    });
  }

  mexicoCompanyCreator(registerLeadMexico) {
    this.fillForeignBillInformationCity(registerLeadMexico.business);
    this.paymentInformation(registerLeadMexico.business);
  }
}

module.exports = {
  page: RegisterLeadMexicoExtension,
  instance: new RegisterLeadMexicoExtension(),
};
