import { faker } from '@faker-js/faker';
import { page as RegisterLeadPage } from './RegisterLeadPage';
import CommonsUtils from '../../utils/CommonsUtils';

const BTN_FILE_FINANCIAL_INFORMATION =
  'input[data-testid="financial-information__file-input"]';

class RegisterLeadChileExtension extends RegisterLeadPage {
  constructor() {
    super();

    this.elements = {
      ...this.elements,
      body: () => cy.get('body'),
      txtBillInfoDataSocialReazon: () =>
        cy.get('[data-testid="tributary-information-business-social-reason"]'),
      txtRegion: () =>
        cy.get('[data-testid="tributary-information-region-default"]'),
      txtProvince: () =>
        cy.get('[data-testid="tributary-information-province-default"]'),
      txtcomplement: () =>
        cy.get('[data-testid="tributary-information-complement"]'),

      txtTributaryVerification: () =>
        cy.get('[data-testid="tributary-information-verification-digit"]'),

      txtFinanceEmail: () =>
        cy.get('[data-testid="business-finance-contact-email"]'),
      btnFileUploadFinancialInformation: () =>
        cy.get(BTN_FILE_FINANCIAL_INFORMATION),
      txtFinanceName: () =>
        cy.get('[data-testid="business-finance-contact-name"]'),
      txtBillInfoDataRut: () =>
        cy.get('[data-testid="tributary-information-rut"]'),
      txtBillInfoDataBusinessPhone: () =>
        cy.get('[data-testid="tributary-information-business-phone"]'),
    };
  }
  chileTaxInformation(billingInformation) {
    this.elements
      .txtBillInfoDataSocialReazon()
      .clear()
      .type(faker.company.name());
    this.elements.txtRegion().type(billingInformation.region).type('{enter}');
    this.elements.txtProvince().type(billingInformation.city).type('{enter}');
    this.elements.txtcomplement().type(billingInformation.Complement);
    this.elements
      .txtTributaryVerification()
      .type(billingInformation.tributaryVerification);
    this.elements
      .txtBillInfoDataBusinessPhone()
      .clear()
      .type(faker.phone.number({ style: 'international' }));
    this.elements
      .txtBillInfoDataRut()
      .clear()
      .type(faker.number.int({ min: 1000000000, max: 9999999999 }).toString());
  }
  chileFillFinanceInformation() {
    this.elements.txtFinanceName().clear().type(faker.company.name());
    this.elements
      .txtFinanceEmail()
      .clear()
      .type(CommonsUtils.generateRabndomemail());
    this.elements.body().then(($body) => {
      const isBtnFileUploadRendered = $body.find(
        BTN_FILE_FINANCIAL_INFORMATION,
      ).length;
      if (isBtnFileUploadRendered) {
        this.elements.btnFileUploadFinancialInformation().attachFile({
          filePath: 'resources/pdfs/DGIfileRegisterLead.pdf',
          mimeType: 'application/pdf',
        });
      }
    });
  }

  chileCompanyCreator(registerLeadChile) {
    this.chileTaxInformation(registerLeadChile.billingInformation);
    this.chileFillFinanceInformation();
  }
}

module.exports = {
  page: RegisterLeadChileExtension,
  instance: new RegisterLeadChileExtension(),
};
