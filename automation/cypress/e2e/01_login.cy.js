describe('Login Tests', () => {
  it('Valid login with standard_user', () => {
    cy.visit('/');
    cy.get('#user-name').type('standard_user');
    cy.get('#password').type('secret_sauce');
    cy.get('#login-button').click();
    cy.url().should('include', 'inventory.html');
  });

  it('Locked_out_user should see error message', () => {
    cy.visit('/');
    cy.get('#user-name').type('locked_out_user');
    cy.get('#password').type('secret_sauce');
    cy.get('#login-button').click();
    cy.get('[data-test="error"]').should('be.visible');
  });
});
