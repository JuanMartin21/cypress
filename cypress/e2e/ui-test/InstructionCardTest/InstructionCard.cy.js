/// <reference types="cypress" />
/*

All the data and information presented in this Cypress test are solely for illustrative purposes. 
These examples are designed to demonstrate my ability to implement automated tests and do not represent real data or production scenarios. 
My goal is to showcase a clear understanding of best practices in automated testing, which could be applied to real projects.



*/
import LoginPage from "../../../pages/HomePage/LoginPage";
import LoginData from "../../../fixtures/ui-testing-data/LoginData.json";
import quote from "../../../fixtures/ui-testing-data/QuoteData.json";
import CreateQuotePage, {
  fillGeneralInformation,
} from "../../../pages/CreateQuotePage/CreateQuotePage";
import JourneyDataPage from "../../../pages/CreateQuotePage/JourneyDataPage";
import MerchandiseDataPage from "../../../pages/CreateQuotePage/MerchandiseDataPage";
import InstructionCardData from "../../../fixtures/ui-testing-data/InstructionCardData.json";
import InstructionCardPage from "../../../pages/InstructionCardPage/InstructionCardPage";
import StatusChangeCiPage from "../../../pages/InstructionCardPage/StatusChangeCiPage";
describe("When create fastquote maritime fcl", () => {
  beforeEach(() => {
    LoginPage.loginWithCredentials(
      LoginData.salesTinchoUser,
      LoginData.salesPass
    );
  });
  it("quote fastquote and instruction card FCL", () => {
    CreateQuotePage.fillGeneralInformation(quote.business);
    CreateQuotePage.fillQuoteGeneralInformation(quote.quote[0]);
    CreateQuotePage.fillQuoteProductInformation(quote.quote[0]);
    JourneyDataPage.fillRouteMaritime(quote.quote[0], quote.trayectos);
    MerchandiseDataPage.addContainerType(quote.quote[0]);
    MerchandiseDataPage.fillMerchandiseDateFcl(quote.quote[0]);
    CreateQuotePage.fillCommodity(
      quote.commodity,
      quote.productValue,
      quote.comment
    );
    CreateQuotePage.searchRates();
    StatusChangeCiPage.statusChange();
    InstructionCardPage.fillGeneralInformation(
      InstructionCardData.businessInformation
    );
    InstructionCardPage.fillQuoteInformation();
    InstructionCardPage.shipper(InstructionCardData.businessInformation);
    InstructionCardPage.consignee(InstructionCardData.businessInformation);
    InstructionCardPage.creationConfirmation();
  });
});
