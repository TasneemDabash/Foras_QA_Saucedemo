describe('Sorting Tests', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.get('#user-name').type('standard_user');
    cy.get('#password').type('secret_sauce');
    cy.get('#login-button').click();
  });

  it('Sort products Z to A', () => {
    cy.get('.product_sort_container').select('za');
    cy.get('.inventory_item_name').then(items => {
      const names = [...items].map(el => el.innerText);
      const sorted = [...names].sort().reverse();
      expect(names).to.deep.equal(sorted);
    });
  });
});
