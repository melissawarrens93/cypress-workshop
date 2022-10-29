/// <reference types="cypress" />

declare namespace Cypress {
  interface Chainable {
    getBySel: (value: string) => Chainable<JQuery>;
    compareSnapshot: (value: string) => Chainable<JQuery>;
  }
}
