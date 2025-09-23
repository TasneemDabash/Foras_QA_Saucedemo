describe('Cart & Checkout Flow', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.get('#user-name').type('standard_user');
    cy.get('#password').type('secret_sauce');
    cy.get('#login-button').click();

    cy.url().should('include', 'inventory.html');
    cy.get('.inventory_list').should('be.visible');
  });

  it('Add product to cart and checkout with missing postal code', () => {
    cy.contains('button', /add to cart/i).first().click();

    cy.get('.shopping_cart_link').click();
    cy.location('pathname').should('match', /\/(v1\/)?cart\.html$/);

    cy.get('.checkout_button').should('be.visible').click();
    cy.location('pathname').should('match', /\/(v1\/)?checkout-step-one\.html$/);

    cy.get('#checkout_info_container').should('be.visible');
    cy.get('#first-name').should('be.visible').type('John');
    cy.get('#last-name').should('be.visible').type('Doe');
    cy.get('#postal-code').should('be.visible');

    cy.get('#checkout_info_container form')
      .find('#continue, [data-test="continue"], input[type="submit"], input.btn_primary, input.cart_button')
      .filter(':visible')
      .first()
      .scrollIntoView()
      .should('be.enabled')
      .click({ force: true });

    cy.get('[data-test="error"]', { timeout: 10000 })
      .should('be.visible')
      .and('contain.text', 'Postal Code is required');
  });
});
