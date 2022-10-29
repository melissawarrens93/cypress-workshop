describe('search pokemon', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  /** OK
   * * * * * * * *
   * Exercise X  *
   * * * * * * * *
   *
   * The title of our application is set
   *
   * Exercise: Check that the title of our application is 'Welcome to hack your future'
   * Bonus: Make sure it matches the exact value, not just a part
   */
  it('should set the title of our application correctly', () => {
    cy.get('span').contains(/^Welcome to hack your future$/);
  });

  /** OK
   * * * * * * * *
   * Exercise 1  *
   * * * * * * * *
   *
   * A list of pokemons is loaded when our application is served
   *
   * Exercise: Check that our table is filled with 20 pokemons when starting our application
   *
   */
  it('should load the default set of pokemons', () => {
    cy.getBySel('table_row').should('have.length', 20);
    // cy.get('[data-cy="table_row"]').should('have.length', 20);
    // cy.get('table').find('tbody').find('tr').should('have.length', 20);
  });

  /** OK
   * * * * * * * *
   * Exercise 2  *
   * * * * * * * *
   *
   * The list of pokemons is filtered when using the search input and press enter
   *
   * Exercise: Check that our table is filtered when searching for a specific pokemon ( you can pick your favorite ;) )
   *
   */
  describe('When searching for a pokemon', () => {
    it('should update the table', () => {
      cy.getBySel('table_search_input').type('pikachu{enter}');
      cy.getBySel('table_row').should('have.length', 1);
      // cy.get('input').type('pikachu{enter}');
      // cy.get('table').find('tbody').find('tr').should('have.length', 1);
      // cy.get('[data-cy="table_search_input"]').type('pikachu{enter}');
      // cy.get('[data-cy="table_row"]')
      //   .should('have.length', 1);
    });

    /** OK
     * * * * * * * *
     * Exercise 3  *
     * * * * * * * *
     *
     * The filtered list of pokemons is being reset when clicking the reset button
     *
     * Exercise: Reset our filtered table by clicking the reset button
     */
    it('should reset the search', () => {
      cy.getBySel('table_search_input').type('pikachu{enter}');
      cy.getBySel('table_row').should('have.length', 1);

      cy.getBySel('table_reset_search').type('pikachu{enter}');
      cy.getBySel('table_row').should('not.have.length', 1);

      // cy.get('[data-cy="table_search_input"]').type('pikachu{enter}');
      // cy.get('[data-cy="table_row"]').should('have.length', 1);
      // cy.get('[data-cy="table_reset_search"]').click();
      // cy.get('[data-cy="table_row"]').should('not.have.length', 1);
    });
  });

  /**
   *
   * ADVANCED TOPICS
   *
   * Use custom commands to reduce duplicate code
   * Mock API calls to not rely on backend services
   *
   * **/

  /** OK
   * * * * * * * *
   * Exercise 4  *
   * * * * * * * *
   *
   * A list of pokemons is loaded when our application is served
   *
   * Exercise: Fetch the next batch of pokemons when clicking the next page button
   * Note: Mock the api call with our own values when fetching the seconds page. Do not put the values in this file
   *
   * Extra: Make sure the first set of pokemons is also mocked out but with a different set
   */
  it.only('should fetch the next batch of pokemons', () => {
    cy.intercept(
      {
        method: 'GET',
        url: 'https://pokeapi.co/api/v2/pokemon*',
      }, {fixture: 'pokemons.json'}
    ).as('getPokemons');
    cy.getBySel('table_next').click();
    cy.wait('@getPokemons');
    cy.getBySel('table_row').should('have.length', 5);
  });
})


/**
 * * * * * * * *
 * Exercise 5  *
 * * * * * * * *
 *
 * A list of pokemons is loaded when our application is served
 *
 * Exercise: Visually check that our table is filled with 20 pokemons when starting our application
 * Note: cypress-image-diff-js is already configured to be used
 */
it('should load the default set of pokemons', () => {
  cy.get('mat-spinner').should('not.exist');
  cy.get('[data-cy="table"]').compareSnapshot('pokemon-table');
});



// TODO: hover on table row => verify hover
// TODO: click on pokemon => open new page => verify page
