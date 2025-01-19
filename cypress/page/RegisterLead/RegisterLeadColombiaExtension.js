import { faker } from '@faker-js/faker';
import { page as RegisterLeadPage } from './RegisterLeadPage';
import CommonsUtils from '../../utils/CommonsUtils';

const BTN_FILE_CHAMBER_COMMERCE = '[data-testid="chamber_of_commerce__attach"]';
const BTN_FILE_IDENTIFICATION_DOCUMENT =
  '[data-testid="identification_document__attach"]';
const BTN_CLIENT_KNOWLEDGE = '[data-testid="client_knowledge__attach"]';
const BTN_FILE_FINANCIAL_STATEMENTS =
  '[data-testid="financial_statements__attach"]';
const BTN_FILE_DATA_TREATMENT = '[data-testid="data_treatment__attach"]';
const BTN_FILE_OTHER_DOCUMENTS = '[data-testid="other_documents__attach"]';
const BTN_GUARANTEE_LETTER = '[data-testid="basc_guarantee_letter__attach"]';
const BTN_RUT = '[data-testid="basc_rut__attach"]';
const BTN_BASIC_CLIENT_KNOWLEDGE =
  '[data-testid="basc_client_knowledge__attach"]';
const BTN_BASIC_LEGAL_REPRESENTATIVE =
  '[data-testid="basc_legal_representative__attach"]';
const BTN_TREATMENT_AUTHORIZATION =
  '[data-testid="basc_data_treatment_authorization__attach"]';
const BTN_MANAGMENT_CERTIFICATION =
  '[data-testid="basc_management_certification__attach"]';
const BTN_SECURITY_AGREEMENT =
  '[data-testid="basc_security_agreement__attach"]';
const BTN_RATING_RESOLUTION =
  '[data-testid="basc_self_retaining_resolution__attach"]';
const BTN_CONFIDENTIALITY = '[data-testid="basc_nda__attach"]';
const BTN_COMMERCIAL_CERTIFICATION =
  '[data-testid="basc_commercial_certification__attach"]';
const BTN_CREDIT_APP = '[data-testid="basc_credit_application__attach"]';
const BTN_BANKING_CERTIFICATION =
  '[data-testid="basc_banking_certification__attach"]';
const BTN_COPI_CERTIFICATION = '[data-testid="basc_bascc__attach"]';
const BTN_SHAREHOLDING = '[data-testid="basc_shareholding_structure__attach"]';
const BTN_ISO = '[data-testid="basc_iso28000__attach"]';
const BTN_BASIC_FINANCIAL = '[data-testid="basc_financial_statements__attach"]';
const BTN_CERTIFICATE_CTPAT = '[data-testid="basc_ctpat__attach"]';
const BTN_SECURITY_VIST = '[data-testid="basc_security_visit__attach"]';
const BTN_CERTIFICATE_OEA = '[data-testid="basc_oea__attach"]';
const BTN_PLAFT_BACKGROUND = '[data-testid="basc_plaft_background__attach"]';
const BTN_BASIC_CHAMBER = '[data-testid="basc_chamber_of_commerce__attach"]';

class RegisterLeadColombiaExtension extends RegisterLeadPage {
  constructor() {
    super();

    this.elements = {
      ...this.elements,
      txtDepartament: () =>
        cy.get('[data-testid="tributary-information-department-default"]'),
      txtCity: () =>
        cy.get('[data-testid="tributary-information-city-default"]'),
      txtMunicipality: () =>
        cy.get(
          '[data-testid="tributary-information-municipality-postal-code"]',
        ),
      txtNit: () => cy.get('[data-testid="tributary-information-nit"]'),
      txtReciptDocumentType: () =>
        cy.get('[data-testid="tributary-information-recipient-document-type"]'),
      txtEconomicActivity: () =>
        cy.get('[data-testid="tributary-information-economic-activity"]'),
      txtbillingSchedule: () =>
        cy.get('#tributary-information-billing-closing'),
      BtnSchedule: () => cy.get('.ant-calendar-today-btn'),
      txtElectronicInvoice: () =>
        cy.get('[data-testid="business-electronic-invoice-contact-name"]'),
      txtInvoicePhone: () =>
        cy.get('[data-testid="business-electronic-invoice-contact-phone"]'),
      txtInvoiceEmail: () =>
        cy.get('[data-testid="business-electronic-invoice-contact-email"]'),
      txtCxcContactName: () =>
        cy.get('[data-testid="business-cxc-contact-name"]'),
      txtCxcPhone: () => cy.get('[data-testid="business-cxc-contact-phone"]'),
      txtCxcEmail: () => cy.get('[data-testid="business-cxc-contact-email"]'),
      btnChamberCommerce: () =>
        cy.get(BTN_FILE_CHAMBER_COMMERCE).find('input[type="file"]'),
      btnClientKnowledge: () =>
        cy.get(BTN_CLIENT_KNOWLEDGE).find('input[type="file"]'),
      btnDataTreatment: () =>
        cy.get(BTN_FILE_DATA_TREATMENT).find('input[type="file"]'),
      btnIdentificationDocument: () =>
        cy.get(BTN_FILE_IDENTIFICATION_DOCUMENT).find('input[type="file"]'),
      btnFinancialStatements: () =>
        cy.get(BTN_FILE_FINANCIAL_STATEMENTS).find('input[type="file"]'),
      btnOtherDocuments: () =>
        cy.get(BTN_FILE_OTHER_DOCUMENTS).find('input[type="file"]'),
      btnGuaranteeLetter: () =>
        cy.get(BTN_GUARANTEE_LETTER).find('input[type="file"]'),
      btnRut: () => cy.get(BTN_RUT).find('input[type="file"]'),
      btnBasicClientKnowledge: () =>
        cy.get(BTN_BASIC_CLIENT_KNOWLEDGE).find('input[type="file"]'),
      btnBasicLegalRepresentative: () =>
        cy.get(BTN_BASIC_LEGAL_REPRESENTATIVE).find('input[type="file"]'),
      btnTreatmentAuthorization: () =>
        cy.get(BTN_TREATMENT_AUTHORIZATION).find('input[type="file"]'),
      btnManagmentCertification: () =>
        cy.get(BTN_MANAGMENT_CERTIFICATION).find('input[type="file"]'),
      btnSecurityAgreement: () =>
        cy.get(BTN_SECURITY_AGREEMENT).find('input[type="file"]'),
      btnReatingResolution: () =>
        cy.get(BTN_RATING_RESOLUTION).find('input[type="file"]'),
      btnConfidentiality: () =>
        cy.get(BTN_CONFIDENTIALITY).find('input[type="file"]'),
      btnCommercialCertification: () =>
        cy.get(BTN_COMMERCIAL_CERTIFICATION).find('input[type="file"]'),
      btnCreditApp: () => cy.get(BTN_CREDIT_APP).find('input[type="file"]'),
      btnBankingCertification: () =>
        cy.get(BTN_BANKING_CERTIFICATION).find('input[type="file"]'),
      btnCopiCertification: () =>
        cy.get(BTN_COPI_CERTIFICATION).find('input[type="file"]'),
      btnShareholding: () =>
        cy.get(BTN_SHAREHOLDING).find('input[type="file"]'),
      btnIso: () => cy.get(BTN_ISO).find('input[type="file"]'),
      btnBasicFinancial: () =>
        cy.get(BTN_BASIC_FINANCIAL).find('input[type="file"]'),
      btnCertificateCtpat: () =>
        cy.get(BTN_CERTIFICATE_CTPAT).find('input[type="file"]'),
      btnSecurityVist: () =>
        cy.get(BTN_SECURITY_VIST).find('input[type="file"]'),
      btnCertificateOea: () =>
        cy.get(BTN_CERTIFICATE_OEA).find('input[type="file"]'),
      btnPlaftBackground: () =>
        cy.get(BTN_PLAFT_BACKGROUND).find('input[type="file"]'),
      btnBasicChamber: () =>
        cy.get(BTN_BASIC_CHAMBER).find('input[type="file"]'),
      txtVerificationDigit: () =>
        cy.get('[data-testid="tributary-information-verification-digit"]'),
      txtComplement: () =>
        cy.get('[data-testid="tributary-information-complement"]'),
      txtBillInfoDataBusinessPhone: () =>
        cy.get('[data-testid="tributary-information-business-phone"]'),
    };
  }

  colombiaTaxInformation(billingInformation) {
    this.elements.txtDepartament().then(($departament) => {
      const isDisabled = !!$departament.attr('disabled');
      if (!isDisabled)
        cy.wrap($departament)
          .type(billingInformation.departament)
          .type('{enter}');
      cy.wait(1000);
    });
    this.elements.txtCity().then(($city) => {
      const isDisabled = !!$city.attr('disabled');
      if (!isDisabled)
        cy.wrap($city).type(billingInformation.city).type('{enter}');
      cy.wait(800);
    });
    this.elements
      .txtBillInfoDataBusinessPhone()
      .clear()
      .type(faker.phone.number({ style: 'international' }));
    this.elements
      .txtNit()
      .type(faker.number.int({ min: 100000000, max: 999999999 }).toString());
    this.elements.txtReciptDocumentType().type(billingInformation.basicDate);
    this.elements.txtEconomicActivity().type(billingInformation.basicDate);
    this.elements.txtVerificationDigit().type(billingInformation.basicDate);
    this.elements.txtComplement().type(billingInformation.complement);
    this.elements.txtbillingSchedule().click();
    this.elements.BtnSchedule().click();
  }
  colombiainvoiceContact() {
    this.elements.txtElectronicInvoice().clear().type(faker.company.name());
    this.elements
      .txtInvoicePhone()
      .clear()
      .type(faker.phone.number({ style: 'international' }));
    this.elements
      .txtInvoiceEmail()
      .clear()
      .type(CommonsUtils.generateRabndomemail());
  }

  cxcContact() {
    this.elements.txtCxcContactName().clear().type(faker.company.name());
    this.elements.txtCxcEmail().type(CommonsUtils.generateRabndomemail());
    this.elements
      .txtCxcPhone()
      .type(faker.phone.number({ style: 'international' }));
  }

  attachFileIfExists(buttonElement, filePath, buttonDataTestId) {
    cy.get('body').then(($body) => {
      if ($body.find(buttonDataTestId).length) {
        buttonElement.attachFile({
          filePath: filePath,
          mimeType: 'application/pdf',
        });
      }
    });
  }

  uploadBusinessDocuments() {
    cy.log('before after option');
    const filePath = 'resources/pdfs/DGIfileRegisterLead.pdf';
    this.attachFileIfExists(
      this.elements.btnChamberCommerce(),
      filePath,
      BTN_FILE_CHAMBER_COMMERCE,
    );
    this.attachFileIfExists(
      this.elements.btnIdentificationDocument(),
      filePath,
      BTN_FILE_IDENTIFICATION_DOCUMENT,
    );
    this.attachFileIfExists(
      this.elements.btnClientKnowledge(),
      filePath,
      BTN_CLIENT_KNOWLEDGE,
    );
    this.attachFileIfExists(
      this.elements.btnFinancialStatements(),
      filePath,
      BTN_FILE_FINANCIAL_STATEMENTS,
    );
    this.attachFileIfExists(
      this.elements.btnDataTreatment(),
      filePath,
      BTN_FILE_DATA_TREATMENT,
    );
    this.attachFileIfExists(
      this.elements.btnOtherDocuments(),
      filePath,
      BTN_FILE_OTHER_DOCUMENTS,
    );
  }
  uploadBascCertificate() {
    const filePath = 'resources/pdfs/DGIfileRegisterLead.pdf';
    this.attachFileIfExists(
      this.elements.btnGuaranteeLetter(),
      filePath,
      BTN_GUARANTEE_LETTER,
    );
    this.attachFileIfExists(this.elements.btnRut(), filePath, BTN_RUT);
    this.attachFileIfExists(
      this.elements.btnBasicClientKnowledge(),
      filePath,
      BTN_BASIC_CLIENT_KNOWLEDGE,
    );
    this.attachFileIfExists(
      this.elements.btnBasicLegalRepresentative(),
      filePath,
      BTN_BASIC_LEGAL_REPRESENTATIVE,
    );
    this.attachFileIfExists(
      this.elements.btnTreatmentAuthorization(),
      filePath,
      BTN_TREATMENT_AUTHORIZATION,
    );
    this.attachFileIfExists(
      this.elements.btnManagmentCertification(),
      filePath,
      BTN_MANAGMENT_CERTIFICATION,
    );
    this.attachFileIfExists(
      this.elements.btnSecurityAgreement(),
      filePath,
      BTN_SECURITY_AGREEMENT,
    );
    this.attachFileIfExists(
      this.elements.btnReatingResolution(),
      filePath,
      BTN_RATING_RESOLUTION,
    );
    this.attachFileIfExists(
      this.elements.btnConfidentiality(),
      filePath,
      BTN_CONFIDENTIALITY,
    );
    this.attachFileIfExists(
      this.elements.btnCommercialCertification(),
      filePath,
      BTN_COMMERCIAL_CERTIFICATION,
    );
    this.attachFileIfExists(
      this.elements.btnCreditApp(),
      filePath,
      BTN_CREDIT_APP,
    );
    this.attachFileIfExists(
      this.elements.btnBankingCertification(),
      filePath,
      BTN_BANKING_CERTIFICATION,
    );
    this.attachFileIfExists(
      this.elements.btnCopiCertification(),
      filePath,
      BTN_COPI_CERTIFICATION,
    );
    this.attachFileIfExists(
      this.elements.btnShareholding(),
      filePath,
      BTN_SHAREHOLDING,
    );
    this.attachFileIfExists(this.elements.btnIso(), filePath, BTN_ISO);
    this.attachFileIfExists(
      this.elements.btnBasicFinancial(),
      filePath,
      BTN_BASIC_FINANCIAL,
    );
    this.attachFileIfExists(
      this.elements.btnCertificateCtpat(),
      filePath,
      BTN_CERTIFICATE_CTPAT,
    );
    this.attachFileIfExists(
      this.elements.btnSecurityVist(),
      filePath,
      BTN_SECURITY_VIST,
    );
    this.attachFileIfExists(
      this.elements.btnCertificateOea(),
      filePath,
      BTN_CERTIFICATE_OEA,
    );
    this.attachFileIfExists(
      this.elements.btnPlaftBackground(),
      filePath,
      BTN_PLAFT_BACKGROUND,
    );
    this.attachFileIfExists(
      this.elements.btnBasicChamber(),
      filePath,
      BTN_BASIC_CHAMBER,
    );
  }

  colombiaCompanyCreator(registerLeadColombia) {
    this.colombiaTaxInformation(registerLeadColombia.billingInformation);
    this.colombiainvoiceContact();
    this.cxcContact();
    this.uploadBusinessDocuments();
    this.uploadBascCertificate();
  }
}

module.exports = {
  page: RegisterLeadColombiaExtension,
  instance: new RegisterLeadColombiaExtension(),
};
