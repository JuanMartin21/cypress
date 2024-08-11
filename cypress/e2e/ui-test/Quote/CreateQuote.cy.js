/// <reference types="cypress" />
import LoginPage from "../../../pages/HomePage/LoginPage";
import LoginData from "../../../fixtures/ui-testing-data/LoginData.json";
import quote from "../../../fixtures/ui-testing-data/QuoteData.json";
import CreateQuotePage from "../../../pages/CreateQuotePage/CreateQuotePage";
import JourneyDataPage from "../../../pages/CreateQuotePage/JourneyDataPage";
import MerchandiseDataPage from "../../../pages/CreateQuotePage/MerchandiseDataPage";

describe("When create fastquote maritime fcl", () => {
  beforeEach(() => {
    LoginPage.loginWithCredentials(
      LoginData.salesTinchoUser,
      LoginData.salesPass,
    );
  });
  it("quote fastquote FCL", () => {
    CreateQuotePage.fillGeneralInformation(quote.business);
    CreateQuotePage.fillQuoteGeneralInformation(quote.quote[0]);
    CreateQuotePage.fillQuoteProductInformation(quote.quote[0]);
    JourneyDataPage.fillRouteMaritime(quote.quote[0], quote.trayectos);
    MerchandiseDataPage.addContainerType(quote.quote[0]);
    MerchandiseDataPage.fillMerchandiseDateFcl(quote.quote[0]);
  });
  it("quote fastquote LCL", () => {
    cy.wait(600);
    CreateQuotePage.fillGeneralInformation(quote.business);
    CreateQuotePage.fillQuoteGeneralInformation(quote.quote[3]);
    CreateQuotePage.fillQuoteProductInformation(quote.quote[3]);
    JourneyDataPage.fillRouteDataOriginPort(quote.trayectos.originPortLCL);
    JourneyDataPage.fillRouteDataDestinationPort(
      quote.trayectos.destinationPortLCL,
    );
    MerchandiseDataPage.fillMerchandiseDate(quote.package);
  });
  afterEach(() => {
    CreateQuotePage.fillCommodity(
      quote.commodity,
      quote.productValue,
      quote.comment,
    );
    CreateQuotePage.searchRates();
  });
});
