describe('DropDown', () => {
  before(() => {
    cy.visit('http://localhost:9000/cypress/dropdown');
  });

  describe('Interaction', () => {
    it('should open on mouseover and close on mouseout if wrapped in button', () => {
      cy.get('#DDButtonHover')
        .trigger('mouseover')
        .children('ul')
        .should('be.visible')
        .parent()
        .trigger('mouseout')
        .children('ul')
        .should('not.be.visible')
    });

    it('should open on mouseover and close on mouseout with default wrapper', () => {
      cy.get('#DDDivHover')
        .trigger('mouseover')
        .children('ul')
        .should('be.visible')
        .parent()
        .trigger('mouseout')
        .children('ul')
        .should('not.be.visible')
    });

    it('should open on click and close on click outside if wrapped in button', () => {
      cy.get('#DDButtonClick')
        .click()
        .children('ul')
        .should('be.visible')
        .document()
        .trigger('click')
        .get('#DDButtonClick')
        .children('ul')
        .should('not.be.visible')
    });

    it('should open on click and close on click outside with default wrapper', () => {
      cy.get('#DDDivClick')
        .click()
        .children('ul')
        .should('be.visible')
        .document()
        .trigger('click')
        .get('#DDDivClick')
        .children('ul')
        .should('not.be.visible')
    });
  });
});
