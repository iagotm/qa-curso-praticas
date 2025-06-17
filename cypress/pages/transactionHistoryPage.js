class TransactionHistoryPage {
  selectorsList() {
    const selectors = {
      mineTransationNavButton: "[data-test='nav-personal-tab']",
      noTransactionButton: "[data-test='transaction-list-empty-create-transaction-button']",
      transactionList: "[data-test='transaction-list']"
    }
    return selectors
  }

  mineTransationNavButton(){
    cy.get(this.selectorsList().mineTransationNavButton).click()
  }
  noTransactionStatus() {
    const selector = this.selectorsList().noTransactionButton;

   cy.get('body').then(($body) => {
     const element = $body.find(selector);

     if (element.length === 0) {
       cy.log('ℹ️ O botão de "Create a Transaction" **não existe** na página. Então há transações');
     } else if (!element.is(':visible')) {
       cy.log('ℹ️ O botão de "Create a Transaction" **existe, mas não está visível**.');
     } else {
       cy.log('✔️ O botão de "Create a Transaction" **existe então não há transações**.');
     }
    })
  }

  transactionListStatus() {
  const selector = this.selectorsList().transactionList;

  cy.get('body').then(($body) => {
    const element = $body.find(selector);

    if (element.length === 0) {
      cy.log('ℹ️ A lista de transações **não existe** na página.');
    } else if (!element.is(':visible')) {
      cy.log('ℹ️ A lista de transações **existe, mas não está visível**.');
    } else {
      cy.log('✔️ A lista de transações **existe e está visível**.');
    }
  });
}

  // noTransactionAlertPage() {
  //  cy.get(this.selectorsList().noTransactionButton).then(($el) => {
  //  if ($el.is(':exist')) {
  //    cy.log('✔️ Botão de "sem transações" está visível.');
  //  } else {
  //    throw new Error('❌ O botão de "sem transações" está presente, mas **não está visível** na tela!');
  //  }
  //});
}

export default TransactionHistoryPage
