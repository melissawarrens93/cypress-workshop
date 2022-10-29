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
   * Bonus: Make sure it matches the exact value, not just a part
   */
  it('should set the title of our application correctly', () => {
    // TODO: fill in the test
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
   */
  it('should load the default set of pokemons', () => {
    // TODO: fill in the test
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
   */
  describe('When searching for a pokemon', () => {
    it('should update the table', () => {
      // TODO: fill in the test
    });
  });
});
