import { faker } from '@faker-js/faker';
import LeadsActions from '../../actions/Leads/LeadsActions';
import CommonsUtils from '../../utils/CommonsUtils';

class RegisterLeadPage {
  leadsData = {};
  elements = {
    lnkRegisterSpecificLead: () =>
      cy.get('[data-testid="table-business"] a').first(),
    btnBusinessOptions: () => cy.get('.sidebar-item-text').contains('Empresas'),
    btnLeadsView: () => cy.get('.sidebar-item-text').contains('Oportunidades'),
    btnRegisterLead: () => cy.get('.lead-register-company-button'),
    txtCompanyName: () => cy.get('[data-testid="register-lead-editing__name"]'),
    txtPotential: () =>
      cy.get('[data-testid="register-lead-editing__potentialVolume"]'),
    optPotential: () => cy.get('.ant-select-dropdown-menu', { timeout: 3000 }),
    txtCountry: () => cy.get('[data-testid="register-lead-editing__country"]'),
    optIndustry: () => cy.get('#register-lead-editing__industry'),
    txtCity: () => cy.get('[data-testid="register-lead-editing__city"]'),
    txtAddress: () =>
      cy.get(
        '[data-testid="register-lead-editing__address"] [data-testid="single-input"]',
      ),
    txtWebsite: () =>
      cy.get(
        '[data-testid="register-lead-editing__webSite"] [data-testid="single-input"]',
        { timeout: 3000 },
      ),
    txtPainpoints: () =>
      cy.get('[data-testid="register-lead-editing__painPoints"]'),
    optPainpoints: () => cy.get('.ant-select-dropdown-menu', { timeout: 3000 }),
    optControllers: () =>
      cy.get('[data-testid="register-lead__controller-input"]'),
    btnNextStep: () =>
      cy.get('[data-testid="register-lead__action-buttons__continue"]'),
    txtBusinessInformationFinanceLink: () =>
      cy.get(
        '[data-testid="rg-ti-finance_url_folder"] [data-testid="single-input"]',
        { timeout: 10000 },
      ),
    divContactsContainer: () => cy.get('.register-lead__contacts'),
    optPosition: () => cy.get('.ant-select-dropdown-menu-item'),
    chxForeignClient: () => cy.get('.foreign-client').find('span').eq(0),
    optCityBillInfo: () => cy.get('.ant-select-selection'),
    txtBillInfoDataPostalCode: () =>
      cy.get('[data-testid="tributary-information-postal-code"]'),
    txtBillInfoDataAddress: () =>
      cy.get('[data-testid="tributary-information-address"]'),
    txtBillInfoDataBusinessName: () =>
      cy.get('[data-testid="tributary-information-business-name"]'),
    txtCommanContact: () =>
      cy.get('[data-testid="business-logistic-contact-name"]'),
    txtLogisticEmail: () =>
      cy.get('[data-testid="business-logistic-contact-email"]'),
    txtInvoiceContacName: () =>
      cy.get('[data-testid="business-invoice-contact-name"]'),
    txtInvoicePhone: () =>
      cy.get('[data-testid="business-invoice-contact-phone"]'),
    txtInvoiceEmail: () =>
      cy.get('[data-testid="business-invoice-contact-email"]'),

    btnregisterLeadAccept: () =>
      cy.get('[data-testid="register-lead__action-buttons__continue"]'),
    divFileCompanyLogoContainer: () => cy.get('.register-lead-editing'),
    btnAcceptLead: () => cy.get('[data-testid="dialog-accept"]'),
    inputCompanyName: () =>
      cy
        .contains('label', 'Nombre de la empresa')
        .parent()
        .find('input')
        .should('have.attr', 'data-testid', 'single-input'),
    lblUploadSuccess: () => cy.get('div.ant-notification-notice-description'),
  };

  goToView(useInterceptor) {
    return this.elements.lnkRegisterSpecificLead().then(($leadLink) => {
      const href = $leadLink.attr('href');
      const leadId = CommonsUtils.getLastSegmentRegex(href);
      if (useInterceptor) {
        cy.wrap($leadLink)
          .invoke('html')
          .then((htmlContent) => {
            LeadsActions.interceptAllData(leadId, htmlContent);
          });
      }
      cy.visit(`${Cypress.config('baseUrl')}lead/profile/${leadId}`);
      if (!useInterceptor) this.elements.btnRegisterLead().click();
      cy.wait(1500);
      this.elements
        .inputCompanyName()
        .invoke('val')
        .then((value) => {
          return String(value);
        });
    });
  }

  getLeadInfo() {
    cy.wait('@leadsWithQuoteInformation')
      .its('response.statusCode')
      .should('eq', 200);
    this.elements.btnRegisterLead().click();
  }

  redirectToProfileRegisterLead() {
    this.elements.btnBusinessOptions().click();
    this.elements.btnLeadsView().click();
  }

  fillLocationInformation(business) {
    this.elements.txtCountry().then(($country) => {
      const isDisabled = !!$country.attr('disabled');
      if (!isDisabled) cy.wrap($country).type(business.country);
      cy.wait(1000);
    });
    this.elements.txtCity().then(($city) => {
      const isDisabled = !!$city.attr('disabled');
      cy.log(isDisabled);
      if (!isDisabled) cy.wrap($city).type(business.city);
    });
    this.elements.txtAddress().then(($address) => {
      const isDisabled = !!$address.attr('disabled');
      if (!isDisabled)
        cy.wrap($address).clear().type(faker.location.streetAddress());
    });
  }

  fillControllers(business) {
    this.elements.optControllers().eq(0).type(business.admin).type('{enter}');
    this.elements
      .optControllers()
      .eq(1)
      .type(business.controller)
      .type('{enter}');
    this.elements.optControllers().eq(2).type(business.sales).type('{enter}');
    this.elements
      .optControllers()
      .eq(3)
      .type(business.customerSuccess)
      .type('{enter}');
  }

  fillContacts() {
    this.elements.divContactsContainer().then(($contacts) => {
      const $txtMainContact = $contacts.find(
        '[data-testid="register-lead__edit-contact-input"]',
      );

      if ($txtMainContact.length) {
        const txtMainContact = () =>
          cy.get('[data-testid="register-lead__edit-contact-input"]');

        txtMainContact().then(($contactsFields) => {
          txtMainContact().eq(0).clear().type(faker.company.name());
          txtMainContact()
            .eq(1)
            .type(faker.phone.number({ style: 'international' }));
          cy.wrap($contactsFields.eq(2))
            .invoke('html')
            .then((htmlContent) => {
              if (!htmlContent.includes('@')) {
                txtMainContact()
                  .eq(2)
                  .clear()
                  .type(CommonsUtils.generateRabndomemail());
              }
            });
        });
      }
    });
  }

  fillBusinessInformation(business) {
    this.elements.txtCompanyName().then(($name) => {
      cy.wrap($name)
        .invoke('attr', 'class')
        .then((classAttr) => {
          if (!classAttr.includes('disabled')) {
            cy.wrap($name).type(faker.company.name());
          }
        });
    });
    this.elements.optIndustry().then(($industry) => {
      cy.wrap($industry)
        .invoke('attr', 'class')
        .then((classAttr) => {
          if (!classAttr.includes('disabled')) {
            cy.wrap($industry).click();
            this.elements.optPosition().contains(business.industry).click();
          }
        });
    });
    this.elements.txtPotential().then(($txtPotential) => {
      if ($txtPotential.hasClass('disabled')) {
        cy.wrap($txtPotential).should('have.class', 'disabled');
      } else {
        cy.wrap($txtPotential).click();
        this.elements.optPotential().contains(business.potential).click();
      }
    });
    this.fillLocationInformation(business);
    this.elements.txtWebsite().clear().type(business.website);
    this.elements.txtPainpoints().click();
    this.elements.optPainpoints().contains(business.painPoints).click();
    this.elements.divFileCompanyLogoContainer().then(($logContainer) => {
      const $divFileCompany = $logContainer.find(
        '.register-lead-editing__button',
      );
      if ($divFileCompany.length) {
        const inputFile = $divFileCompany.find('input[type="file"]');
        if (inputFile.length) {
          cy.wrap(inputFile).attachFile({
            filePath: 'resources/images/test.jpg',
            mimeType: 'image/jpeg',
          });
        }
      }
    });
    this.fillControllers(business);
  }

  fillBillingInformation(billingInformation) {
    this.elements
      .txtBusinessInformationFinanceLink()
      .clear()
      .type(billingInformation.financeUrlFolder);
  }

  setForeignClient() {
    this.elements.chxForeignClient().click();
  }

  fillForeignBillInformation(business) {
    const billingContactName = `${faker.person.firstName()} ${faker.person.lastName()}`;
    business.billingContactName = billingContactName;

    this.elements.optCityBillInfo().eq(0).click();
    cy.wait(1000);
    cy.log(business.country);
    this.elements.optPotential().contains(business.country).click();
    this.elements
      .txtBillInfoDataAddress()
      .clear()
      .type(faker.location.streetAddress(true));
    this.elements
      .txtBillInfoDataPostalCode()
      .clear()
      .type(faker.location.streetAddress());
    this.elements
      .txtBillInfoDataBusinessName()
      .clear()
      .type(faker.company.name());
  }
  comexContact() {
    this.elements.txtCommanContact().clear().type(faker.company.name());
    this.elements
      .txtLogisticEmail()
      .clear()
      .type(CommonsUtils.generateRabndomemail());
  }

  invoiceContact() {
    this.elements.txtInvoiceContacName().clear().type(faker.company.name());
    this.elements
      .txtInvoicePhone()
      .clear()
      .type(faker.phone.number({ style: 'international' }));
    this.elements
      .txtInvoiceEmail()
      .clear()
      .type(CommonsUtils.generateRabndomemail());
  }

  saveInformation() {
    cy.wait(1000);
    this.elements.btnNextStep().click();
    cy.wait(5000);
  }

  confirmRegisterOnModal() {
    cy.wait(500);
    this.elements.btnregisterLeadAccept().eq(0).click();
    cy.wait(1000);
    this.elements.btnAcceptLead().eq(0).click();
    cy.url().should('include', '/business/profile/');
    cy.wait(800);
    this.elements.lblUploadSuccess('Listo').should('be.visible');
  }
}

module.exports = {
  page: RegisterLeadPage,
  instance: new RegisterLeadPage(),
};
