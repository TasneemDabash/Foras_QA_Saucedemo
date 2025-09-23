describe('Logout Test', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.get('#user-name').type('standard_user');
    cy.get('#password').type('secret_sauce');
    cy.get('#login-button').click();
  });

  it('Logs out successfully', () => {
    cy.get('#react-burger-menu-btn').click();
    cy.contains('Logout').click();
    cy.url().should('eq', 'https://www.saucedemo.com/v1/');
  });
});
