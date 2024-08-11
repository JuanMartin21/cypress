class CreateQuotePage {
  elements = {
    txtCompanyName: () => cy.get(".typeahead-input"),
    txtCustomerName: () => cy.get("#katalon-client-name").first(),
    optOpcionTable: () => cy.get("li"),
    txtTypeMoviment: () => cy.get("#type-of-movement"),
    btnAddQuote: () => cy.get("#katalon-add-quote"),
    txtTripType: () => cy.get("#trip-type"),
    optionlist: () => cy.get(".rotterdam__option"),
    txtService: () => cy.get("#nowports-select-multiple"),
    txtTypeProduct: () => cy.get("#load-type"),
    txtOffice: () => cy.get("#nowportsOffice"),
    txtIncoterm: () => cy.get("#incoterm"),
    txtCommodity: () => cy.get("#commodity"),
    txtProductValue: () => cy.get("#productValue"),
    txtComment: () => cy.get("#comments"),
    btnSearchRates: () => cy.get("#katalon-search-fare"),
    btnAcceptSelection: () => cy.get("button#katalon-accept-selection"),
    btnCreateQuote: () => cy.get("#katalon-create-quoteRequest"),
    btnManualQuote: () =>
      cy.get('[data-testid^="cq-af-switch_manual_quote_step_"]'),
    btnConfirmCreateQuote: () => cy.get('[data-testid="create-quote-button"]'),
    lblNotificationSuccess: () =>
      cy.get(".ant-notification-notice-description"),
    optRates: () => cy.xpath("(//*[@fill='#D9D9E3'])"),
    btnDetails: () => cy.contains("button", "Ver detalles"),
    txtSearchItems: () => cy.get(".create-quote-items__table .ant-input"),
    freehandCheck: () =>
      cy.get('[data-testid="checkbox-label"][for="Freehand"]'),
    optCompanyName: () => cy.get(".typeahead-selector"),
    txtClientName: () => cy.get("#katalon-client-name"),
  };
  fillfreehandInformation(quote) {
    this.fillAddQuote();
    this.elements.freehandCheck().click();
    this.elements.txtCompanyName().type(quote.agent);
    this.elements.optOpcionTable().contains(quote.agent).click();
    this.elements.txtCustomerName().type(quote.client);
  }
  fillGeneralInformation(
    business,
    { enableFillCrmItemsFields, crmItemId } = {
      enableFillCrmItemsFields: false,
      crmItemId: null,
    },
  ) {
    cy.wait(500);
    this.fillAddQuote();
    this.elements.txtCompanyName().type(business);
    this.elements.optOpcionTable().contains(business).click();
    if (enableFillCrmItemsFields) {
      this.elements.txtSearchItems().should("exist");
      this.elements.txtSearchItems().type(crmItemId);
    }
  }

  fillQuoteGeneralInformation(quote) {
    this.elements.txtTypeMoviment().type(quote.movementType);
    this.elements.optionlist().contains(quote.movementType).click();
    this.elements.txtTypeMoviment().click();
    this.elements.txtTripType().type(quote.tripType);
    this.elements.optionlist().contains(quote.tripType).click();
    this.elements.txtService().type(quote.service);
    this.elements.optionlist().contains(quote.service).click();
  }

  fillQuoteProductInformation(quote) {
    this.elements.txtTypeProduct().type(quote.productType);
    this.elements.optionlist().contains(quote.productType).click();
    this.elements.txtOffice().type(quote.office);
    this.elements.optionlist().contains(quote.office).click();
    this.elements.txtIncoterm().type(quote.incoterm);
    this.elements.optionlist().contains(quote.incoterm).click();
  }

  fillCommodity(commodity, productValue, comment) {
    this.elements.txtCommodity().type(commodity);
    this.elements.optCompanyName().find("li").contains(commodity).click();
    this.elements.txtProductValue().type(productValue);
    this.elements.txtComment().type(comment);
  }

  clickSearchRates() {
    this.elements.btnSearchRates().click();
  }

  searchRates() {
    this.elements.btnSearchRates().click();
    this.elements.optRates().eq(0).click();
    this.elements.btnAcceptSelection().click();
    this.elements.btnCreateQuote().click();
    this.elements.btnConfirmCreateQuote().click();
    this.elements.lblNotificationSuccess().should("be.visible");
    this.elements.btnDetails().click();
  }

  searchManualRates() {
    this.elements.btnSearchRates().click();
    this.elements
      .btnAcceptSelection()
      .should("exist")
      .each(($selector) => {
        if ($selector.prop("disabled")) {
          this.elements.btnManualQuote().first().click();
        }
        cy.wrap($selector).click();
      });
    this.elements.btnCreateQuote().click();
    this.elements.btnConfirmCreateQuote().click();
    this.elements.lblNotificationSuccess().should("be.visible");
    this.elements.btnDetails().click();
  }
  fillKatalonClientName() {
    cy.get("#katalon-client-name").first().type("1");
  }

  fillAddQuote() {
    this.elements.btnAddQuote().click();
  }
}

module.exports = new CreateQuotePage();
