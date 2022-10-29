describe('Visual testing of button component', () => {
    it('should render default button', () => {
        goToComponentDefinition('default');
        // cy.get('con-button').should('be.visible');
        cy.wait(5000);
        getIframeBody().find('[data-cy="con-button"]').screenshot('button-default', {
            capture: 'viewport'
        });
        // cy.getBySel('con-button').screenshot('button-default');
    });
});

const BASE_URL = 'http://localhost:6006';
function goToComponentDefinition(componentDefinition: string) {
    // cy.visit(`${BASE_URL}/?path=/story/example-button--${componentDefinition}`)
    cy.visit(`/?path=/story/example-button--${componentDefinition}`);
}

const getIframeDocument = () => {
    return cy
        .get('iframe')
        .its('0.contentDocument').should('exist')
}

const getIframeBody = () => {
    return getIframeDocument()
        .its('body').should('not.be.undefined')
        .then(cy.wrap)
}
