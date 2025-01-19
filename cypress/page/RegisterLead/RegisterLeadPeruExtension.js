import { faker } from '@faker-js/faker';
import { page as RegisterLeadPage } from './RegisterLeadPage';
import CommonsUtils from '../../utils/CommonsUtils';

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
const BTN_CREDIT_APP = '[data-testid="basc_credit_application__attach"]';
const BTN_COPI_CERTIFICATION = '[data-testid="basc_bascc__attach"]';
const BTN_ISO = '[data-testid="basc_iso28000__attach"]';
const BTN_CERTIFICATE_CTPAT = '[data-testid="basc_ctpat__attach"]';
const BTN_SECURITY_VIST = '[data-testid="basc_security_visit__attach"]';
const BTN_CERTIFICATE_OEA = '[data-testid="basc_oea__attach"]';
const BTN_PLAFT_BACKGROUND = '[data-testid="basc_plaft_background__attach"]';
const BTN_RUT = '[data-testid="basc_rut__attach"]';

class RegisterLeadPeruExtension extends RegisterLeadPage {
  constructor() {
    super();

    this.elements = {
      ...this.elements,
      txtCxcContactName: () =>
        cy.get('[data-testid="business-cxc-contact-name"]'),
      txtCxcPhone: () => cy.get('[data-testid="business-cxc-contact-phone"]'),
      txtCxcEmail: () => cy.get('[data-testid="business-cxc-contact-email"]'),
      txtFinanceName: () =>
        cy.get('[data-testid="business-finance-legal-representative-name"]'),
      txtFinanceContact: () =>
        cy.get('[data-testid="business-finance-contact"]'),
      txtEstablishmentCode: () =>
        cy.get('[data-testid="tributary-information-establishment-code"]'),
      txtUbigeoCode: () =>
        cy.get('[data-testid="tributary-information-ubigeo-code"]'),
      txtLineCompany: () =>
        cy.get('[data-testid="tributary-information-line-company"]'),
      txtResponsabilityAccount: () =>
        cy.get('[data-testid="basc-responsibility-account-responsible"]'),
      txtLineCommercial: () =>
        cy.get('[data-testid="basc-responsibility-commercial-leader"]'),
      txtResponsabilityEvaluation: () =>
        cy.get('[data-testid="basc-responsibility-criteria-evaluation"]'),
      txtResponsabilityCredit: () =>
        cy.get('[data-testid="basc-responsibility-credit-quality-assessment"]'),
      ScheduleEvaluationDate: () =>
        cy.get(
          '[data-testid="basc-responsibility-evaluation-date__suffix-icon"]',
        ),
      ScheduleCertification: () =>
        cy.get(
          '[data-testid="basc-responsibility-certification-date__suffix-icon"]',
        ),
      ScheduleSignature: () =>
        cy.get(
          '[data-testid="basc-responsibility-signature-date__suffix-icon"]',
        ),
      ScheduleExpirationDate: () =>
        cy.get(
          '[data-testid="basc-responsibility-expiration-date__suffix-icon"]',
        ),
      TxtFileLink: () =>
        cy.get('[data-testid="basc-responsibility-link-to-the-file"]'),
      BtnSchedule: () => cy.get('.ant-calendar-today-btn'),
      btnWCA: () => cy.get('span.ant-radio-inner').eq(0),
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
      btnCreditApp: () => cy.get(BTN_CREDIT_APP).find('input[type="file"]'),
      btnCopiCertification: () =>
        cy.get(BTN_COPI_CERTIFICATION).find('input[type="file"]'),
      btnIso: () => cy.get(BTN_ISO).find('input[type="file"]'),
      btnCertificateCtpat: () =>
        cy.get(BTN_CERTIFICATE_CTPAT).find('input[type="file"]'),
      btnSecurityVist: () =>
        cy.get(BTN_SECURITY_VIST).find('input[type="file"]'),
      btnCertificateOea: () =>
        cy.get(BTN_CERTIFICATE_OEA).find('input[type="file"]'),
      btnCertificateCtpat: () =>
        cy.get(BTN_CERTIFICATE_CTPAT).find('input[type="file"]'),
      btnPlaftBackground: () =>
        cy.get(BTN_PLAFT_BACKGROUND).find('input[type="file"]'),
      txtRucOrTaxID: () =>
        cy.get('[data-testid="tributary-information-ruc-or-tax-id"]'),
      txtTributaryPhone: () =>
        cy.get('[data-testid="tributary-information-phone"]'),
      txtBillInfoDataSocialReazon: () =>
        cy.get('[data-testid="tributary-information-business-social-reason"]'),
    };
  }

  peruTaxInformation(billingInformation) {
    this.elements
      .txtEstablishmentCode()
      .clear()
      .type(billingInformation.establishmentCode);
    this.elements.txtUbigeoCode().clear().type(billingInformation.ubigeoCode);
    this.elements.txtLineCompany().clear().type(billingInformation.lineCode);
    this.elements
      .txtRucOrTaxID()
      .clear()
      .type(faker.number.int({ min: 1000000000, max: 9999999999 }).toString());
    this.elements
      .txtTributaryPhone()
      .clear()
      .type(faker.phone.number({ style: 'international' }));
    this.elements
      .txtBillInfoDataSocialReazon()
      .clear()
      .type(faker.company.name());
    this.elements.btnWCA().click();
  }

  financeSection() {
    this.elements.txtFinanceName().clear().type(faker.company.name());
    this.elements.txtFinanceContact().type(CommonsUtils.generateRabndomemail());
  }
  txtResponsabilitySection(billingInformation) {
    this.elements.txtResponsabilityAccount().clear().type(faker.company.name());
    this.elements.txtLineCommercial().clear().type(faker.company.name());
    this.elements
      .txtResponsabilityEvaluation()
      .clear()
      .type(faker.company.name());
    this.elements.txtResponsabilityCredit().clear().type(faker.company.name());
    this.elements.ScheduleEvaluationDate().click();
    this.elements.BtnSchedule().click();
    this.elements.ScheduleCertification().click();
    this.elements.BtnSchedule().click();
    this.elements.ScheduleSignature().click();
    this.elements.BtnSchedule().click();
    this.elements.ScheduleExpirationDate().click();
    this.elements.BtnSchedule().click();
    this.elements.TxtFileLink().type(billingInformation.LinkFile);
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

  uploadBascCertificate() {
    const filePath = 'resources/pdfs/DGIfileRegisterLead.pdf';
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
      this.elements.btnCreditApp(),
      filePath,
      BTN_CREDIT_APP,
    );
    this.attachFileIfExists(
      this.elements.btnCopiCertification(),
      filePath,
      BTN_COPI_CERTIFICATION,
    );
    this.attachFileIfExists(this.elements.btnIso(), filePath, BTN_ISO);
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
  }

  peruCompanyCreator(registerLeadPeru) {
    this.peruTaxInformation(registerLeadPeru.billingInformation);
    this.financeSection();
    this.txtResponsabilitySection(registerLeadPeru.billingInformation);
    this.uploadBascCertificate();
  }
}

module.exports = {
  page: RegisterLeadPeruExtension,
  instance: new RegisterLeadPeruExtension(),
};
