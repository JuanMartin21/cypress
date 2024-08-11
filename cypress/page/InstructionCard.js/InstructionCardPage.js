class InstructionsCardMariteme {
  elements = {
    txtBusinessName: () => cy.get(".typeahead-input"),
    txtReferenceNumber: () =>
      cy.get('.rott-input__field > [data-testid="single-input"]'),
    btnPaymentCondition: () => cy.get(".ant-select-selection__rendered"),
    txtDatePicker: () => cy.get("#date-picker"),
    optDatePicker: () => cy.get(".ant-picker-now-btn"),
    txtShipper: () =>
      cy.get('[data-testid="name-default"] > .ant-select-selection__rendered'),
    txtConsignee: () => cy.get('[data-testid="consigneeName-default"]'),
    btnShipperSection: () => cy.get(".ant-row"),
    btnSaveIntructionCard: () =>
      cy.xpath("(//button//span[text()='Guardar'])[1]"),
    btnLinkQuote: () => cy.get(".ant-breadcrumb-link", { timeout: 1500 }),
    typeOfFlight: () =>
      cy.get("[data-testid='instructions-header_flightType-input-default']"),
    typeOfService: () =>
      cy.get("[data-testid='instructions-header_typeService-input-default']"),
    optionTable: () => cy.get("li"),
    txtReceptionCapacity: () =>
      cy.get('[data-testid="container-input"] > .rott-input-container'),
    lblAlertSuccess: () => cy.get(".ant-notification-notice-message"),
  };

  fillGeneralInformation(bussinessInformation) {
    cy.wait(18000);
    this.elements.txtBusinessName().type(bussinessInformation.businessName);
    this.elements
      .txtReferenceNumber()
      .type(bussinessInformation.referenceNumber);
  }
  fillQuoteInformation() {
    this.elements.btnPaymentCondition().click();
    this.elements.txtDatePicker().click();
    this.elements.optDatePicker().click();
  }

  shipper(bussinessInfomation) {
    this.elements
      .btnShipperSection()
      .contains(bussinessInfomation.shipperSection)
      .click();
    this.elements
      .txtShipper()
      .type(bussinessInfomation.shipperName)
      .type("{enter}");
  }
  consignee(bussinessInfomation) {
    this.elements
      .btnShipperSection()
      .contains(bussinessInfomation.consigneeSection)
      .click();
    this.elements
      .txtConsignee()
      .type(bussinessInfomation.consigneeName)
      .type("{enter}");
    cy.wait(1500);
  }
  creationConfirmation() {
    this.elements.btnSaveIntructionCard().click();
    this.elements.lblAlertSuccess().contains("Listo");
    this.elements.btnLinkQuote().first().click();
  }
  fillGeneralInfomationArial(bussinessInformation) {
    cy.wait(18000);
    this.elements.txtBusinessName().type(bussinessInformation.businessName);
    this.elements
      .txtReferenceNumber()
      .type(bussinessInformation.referenceNumber);
  }
}

module.exports = new InstructionsCardMariteme();
