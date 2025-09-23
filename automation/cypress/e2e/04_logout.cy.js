describe('Logout Test', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.get('#user-name').type('standard_user');
    cy.get('#password').type('secret_sauce');
    cy.get('#login-button').click();

    cy.url().should('include', 'inventory.html');
    cy.get('.inventory_list').should('be.visible');
  });

  it('Logs out successfully', () => {
    cy.get('body').then($body => {
      if ($body.find('#react-burger-menu-btn').length) {
        cy.get('#react-burger-menu-btn').click();
      } else {
        cy.contains('button', /open menu/i).click();
      }
    });
    cy.get('#logout_sidebar_link', { timeout: 10000 })
      .should('be.visible')
      .click();
    cy.location('pathname', { timeout: 10000 }).should('match', /^\/(v1\/(index\.html)?)?$/);

    cy.get('#login-button').should('be.visible');
  });
});
