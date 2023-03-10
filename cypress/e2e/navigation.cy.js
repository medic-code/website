describe('Navigation testing', () => {
  it('User can go from home page to project page', () => {
    cy.visit('/');
    cy.get('.navtest').click();
    cy.url().should('include', '/iolassist');
    cy.contains('IOL Assist');
    cy.wait(1000);
  });

  it('User can go from project page to home page', () => {
    cy.visit('/iolassist');
    cy.get('.testbtn').click();
    cy.url().should('include', '/');
    cy.contains('Aaron Smith');
  });
});
