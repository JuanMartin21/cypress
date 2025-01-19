import Routes from '../../fixtures/ui-testing-data/Routes.json';

class Bussinesses {
  elements = {
    btnShipper: () => cy.contains('button', 'Shippers y consignatarios'),
    btnAddNew: () => cy.get('span[data-testid="add-report-request-click"]'),
    txtShipperName: () => cy.get('input[data-testid="single-input"]'),
    txtShipperAddress: () => cy.get('input[data-testid="single-input"]'),
    txtZipcode: () =>
      cy.get('div[data-testid="shipper-consignee-zipcode"] input'),
    txtCountry: () =>
      cy.get(
        '[data-testid="undefined-default"] > .ant-select-selection__rendered',
      ),
    txtShipperTaxId: () =>
      cy.get('div[data-testid="shipper-consignee-rfc"] input'),
    txtContact: () => cy.get('div.dsKMHb input'),
    btnMain: () => cy.get('span.ant-radio-inner'),
    btnAccept: () => cy.get('span[data-testid="accept-button-modal-click"]'),
    txtSerch: () => cy.get('input[themename="outbound"]'),
    btnTreeLine: () => cy.get('#more-vert'),
    optDelete: () => cy.get('button.dzGcuO span'),
    btnDelete: () => cy.get('button[data-testid="dialog-accept"]'),
    lblLoginSuccess: () =>
      cy
        .get('.ant-notification-notice-description')
        .contains('Se creó la información correctamente.'),
  };

  goToUrl(urlBussiness, urlProfile, urlIdCompany) {
    cy.visit(`${urlBussiness}${urlProfile}${urlIdCompany}`);
  }

  createShipper(ShipperInformationJson) {
    this.goToUrl(Routes.Business, Routes.Profile, Routes.idCompany);
    this.elements.btnShipper().click();
    this.elements.btnAddNew().click();
    this.elements
      .txtShipperName()
      .eq(0)
      .type(ShipperInformationJson.shipperName);
    this.elements
      .txtShipperAddress()
      .eq(1)
      .type(ShipperInformationJson.shipperAdress);
    this.elements.txtZipcode().type(ShipperInformationJson.zipCode);
    cy.wait(200);
    this.elements
      .txtCountry()
      .type(ShipperInformationJson.country)
      .type('{enter}');
    this.elements.txtShipperTaxId().type(ShipperInformationJson.shipperTaxId);
    this.elements.txtContact().eq(0).type(ShipperInformationJson.contacName);
    this.elements.txtContact().eq(1).type(ShipperInformationJson.contacNumber);
    this.elements.txtContact().eq(2).type(ShipperInformationJson.contacEmail);
    this.elements.btnMain().click();
    this.elements.btnAccept().click();
    this.elements.lblLoginSuccess().should('be.visible');
  }
  s;

  deleteShipper(ShipperInformationJson) {
    cy.wait(500);
    this.goToUrl(Routes.Business, Routes.Profile, Routes.idCompany);
    this.elements.btnShipper().click();
    this.elements.txtSerch().type(ShipperInformationJson.txtSerch);
    this.elements.btnTreeLine().click();
    this.elements.optDelete().eq(1).click();
    this.elements.btnDelete().click();
  }
}
module.exports = new Bussinesses();