describe('ToolTip tests', () => {
  beforeEach(() => {
    cy.visit('/cypress/tooltip');
  });
  describe('Display', () => {
    it('should choose right side correctly without positioning', () => {
      cy.name('rightSide')
        .click()
        .get('.tooltip')
        .eq(6)
        .should('have.class', 'right');
    });
    it('should choose left side correctly without positioning', () => {
      cy.name('leftSide')
        .click()
        .get('.tooltip')
        .eq(7)
        .should('have.class', 'left');
    });
    it('should choose top side by default, if enough space', () => {
      cy.name('topSidePressedToLeft')
        .click()
        .get('.tooltip')
        .eq(8)
        .should('have.class', 'top');    
      cy.name('topSidePressedToRight')
        .click()
        .get('.tooltip')
        .eq(9)
        .should('have.class', 'top');  
    });
    it('should define corner position', () => {
      cy.name('topLeftCorner')
        .click()
        .get('.tooltip')
        .first()
        .should('have.class', 'bottom-right');    
      cy.name('topRightCorner')
        .click()
        .get('.tooltip')
        .eq(1)
        .should('have.class', 'bottom-left');  
    });
  });
});
