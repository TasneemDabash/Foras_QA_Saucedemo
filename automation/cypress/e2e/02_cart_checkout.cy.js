describe('Cart & Checkout Flow', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.get('#user-name').type('standard_user');
    cy.get('#password').type('secret_sauce');
    cy.get('#login-button').click();
  });

  it('Add product to cart and checkout with missing postal code', () => {
    cy.contains('Add to cart').first().click();
    cy.get('.shopping_cart_link').click();
    cy.get('.checkout_button').click();
    cy.get('#first-name').type('John');
    cy.get('#last-name').type('Doe');
    cy.get('#postal-code').clear();
    cy.get('#continue').click();
    cy.get('[data-test="error"]').should('contain', 'Postal Code is required');
  });
});
