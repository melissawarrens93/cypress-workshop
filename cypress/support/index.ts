/// <reference types="cypress" />

declare namespace Cypress {
  interface Chainable {
    goToPage: (value: string) => Chainable<JQuery>;
  }
}
