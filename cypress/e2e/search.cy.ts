/**
 * * * * * *
 *  NOTE   *
 * * * * * *
 *
 * You can make sure that only 1 test is being executed by adding .only to it
 * it.only('xxx', () => {});
 *
 * Link to cypress commands: https://docs.cypress.io/api/commands/and
 *
 *
 */

beforeEach(() => {
  cy.visit('/');
});

describe('Pokemon application', () => {
  /**
   * * * * * * * *
   * Exercise 1  *
   * * * * * * * *
   *
   * The title of our application is set
   *
   * Exercise: Check that the title of our application is 'Welcome to hack your future'
   * Improve the existing test by making use of data-cy
   *
   */
  it('should set the title of our application correctly', () => {
    cy.get('span').contains(/^Welcome to hack your future$/);
  });

  /**
   * * * * * * * *
   * Exercise 2  *
   * * * * * * * *
   *
   * A list of pokemons is loaded when our application is served
   *
   * Exercise: Check that our table is filled with 20 pokemons when starting our application
   * Improve the existing test by making use of data-cy
   *
   */
  it('should load the default set of pokemons', () => {
    cy.get('table').find('tbody').find('tr')
      .should('have.length', 20);
  });

  /**
   * * * * * * * *
   * Exercise 3  *
   * * * * * * * *
   *
   * The list of pokemons is filtered when using the search input and press enter
   *
   * Exercise: Check that our table is filtered when searching for a specific pokemon ( you can pick your favorite ;) )
   * Improve the existing test by making use of data-cy
   *
   */
  describe('When searching for a pokemon', () => {
    it('should update the table', () => {
      cy.get('input').type('pikachu{enter}');
      cy.get('table').find('tbody').find('tr')
        .should('have.length', 1);
    });
  });
});
