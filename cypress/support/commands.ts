const compareSnapshotCommand = require('cypress-image-diff-js/dist/command')
compareSnapshotCommand();

Cypress.Commands.add('getBySel', (selector, ...args) => {
  return cy.get(`[data-cy=${selector}]`, ...args);
});
