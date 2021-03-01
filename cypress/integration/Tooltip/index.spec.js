describe('ToolTip tests', () => {
  beforeEach(() => {
    cy.visit('http://localhost:9000/cypress/tooltip');
  });
  describe('Display', () => {
    it('Should choose right side correctly without positioning', () => {
      cy.get('#rightSide')
        .click()
        .get('.tooltip')
        .eq(6)
        .should('have.class', 'right');
    });
    it('Should choose left side correctly without positioning', () => {
      cy.get('#leftSide')
        .click()
        .get('.tooltip')
        .eq(7)
        .should('have.class', 'left');
    });
    it('Should choose top side by default, if enough space', () => {
      cy.get('#topSidePressedToLeft')
        .click()
        .get('.tooltip')
        .eq(8)
        .should('have.class', 'top');    
      cy.get('#topSidePressedToRight')
        .click()
        .get('.tooltip')
        .eq(9)
        .should('have.class', 'top');  
    });
    it('Should define corner position', () => {
      cy.get('#topLeftCorner')
        .click()
        .get('.tooltip')
        .first()
        .should('have.class', 'bottom-right');    
      cy.get('#topRightCorner')
        .click()
        .get('.tooltip')
        .eq(1)
        .should('have.class', 'bottom-left');  
    });
  });
});
