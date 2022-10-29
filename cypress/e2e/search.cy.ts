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

describe('Pokemon application', () => {
  /**
   * * * * * * * *
   * Exercise 1  *
   * * * * * * * *
   *
   * The title of our application is set
   *
   * Exercise: Check that the title of our application is 'Welcome to hack your future'
   *
   * Improve this exercise by making use of your own custom command
   *
   */
  it('should set the title of our application correctly', () => {
    cy.visit('/');
    cy.getBySel('application_title').contains(/^Welcome to hack your future$/);
  });

  /**
   * * * * * * * *
   * Exercise 2  *
   * * * * * * * *
   *
   * A list of pokemons is loaded when our application is served
   *
   * Exercise: Check that our table is filled with 20 pokemons when starting our application
   *
   * Improve this exercise by making use of your own custom command
   *
   */
  it('should load the default set of pokemons', () => {
    cy.visit('/');
    cy.getBySel('pokemon-table_row').should('have.length', 20);
  });

  /**
   * * * * * * * *
   * Exercise 3  *
   * * * * * * * *
   *
   * The list of pokemons is filtered when using the search input and press enter
   *
   * Exercise: Check that our table is filtered when searching for a specific pokemon ( you can pick your favorite ;) )
   *
   * Improve this exercise by making use of your own custom command
   *
   */
  describe('When searching for a pokemon', () => {
    it('should update the table', () => {
      cy.visit('/');
      cy.getBySel('pokemon-table_search_input')
        .type('pikachu{enter}');
      cy.getBySel('pokemon-table_row')
        .should('have.length', 1);
    });
  });

  /**
   * * * * * * * *
   * Exercise 4  *
   * * * * * * * *
   *
   * A list of pokemons is loaded when our application is served
   *
   * Exercise: Fetch the next batch of pokemons when clicking the next page button
   * Note: Mock the api call with our own values when fetching the seconds page. Do not put the values in this file
   *
   * Improve this exercise by making use of your own custom command
   *
   */
  it('should fetch the next batch of pokemons', () => {
    cy.visit('/');

    cy.intercept(
      {
        method: 'GET',
        url: 'https://pokeapi.co/api/v2/pokemon*',
      }, {fixture: 'pokemons.json'}
    ).as('getPokemons');

    cy.getBySel('pokemon-table_next_button').click();

    cy.wait('@getPokemons');

    cy.getBySel('pokemon-table_row').should('have.length', 5);
  });

  /**
   * * * * * * * *
   * Exercise 5  *
   * * * * * * * *
   *
   * A list of pokemons is loaded when our application is served
   *
   * Exercise: We have a very slow backend, make sure we have the correct response before verifying the table
   *
   */
  it('should load the default set of pokemons in the table', () => {
    // This will fake a slow backend response
    cy.intercept(
      {
        method: 'GET',
        url: 'https://pokeapi.co/api/v2/pokemon*',
      },
      req => {
        // do nothing with the req, only call the response with a 5s delay.
        req.continue(res => {
          res.setDelay(5000)
          res.send();
        });
      },
    ).as('getPokemons');

    cy.visit('/');

    cy.wait('@getPokemons');

    cy.getBySel('pokemon-table_row').should('have.length', 20);
  });
});
