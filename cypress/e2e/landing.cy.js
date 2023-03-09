describe('Landing Page', () => {
  it('Successfully loads Landing Page', () => {
    cy.visit('/');
    cy.get('.testComponentClass');
  });
});
