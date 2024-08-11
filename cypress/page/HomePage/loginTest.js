class LoginPage {
  elements = {
    txtUsername: () => cy.get("[name=username]"),
    txtPassword: () => cy.get(".ant-input.rott-input__input[type=password]"),
    btnLogin: () => cy.get(".submit-button-login.full-width"),
  };

  open(windowVars = {}) {
    cy.visit("/", {
      onBeforeLoad(win) {
        win.vars = JSON.stringify(windowVars);
      },
    });
  }

  loginWithCredentials(userName, password, windowVars = {}) {
    this.open({ enableCrmItemsInQuote: false, ...windowVars });
    this.elements.txtUsername().type(userName);
    this.elements.txtPassword().type(password);
    this.elements.btnLogin().click();
    cy.wait(2000);
  }
}

module.exports = new LoginPage();
