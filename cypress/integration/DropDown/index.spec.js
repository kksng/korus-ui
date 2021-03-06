describe('DropDown', () => {
  before(() => {
    cy.visit('/cypress/dropdown');
  });

  describe('Interaction', () => {
    describe('InteractionMode default', () => {
      it('Should open on mouseover and close on mouseout if wrapped in button', () => {
        cy.get('#DDButtonHover')
          .trigger('mouseover')
          .children('ul')
          .should('be.visible')
          .parent()
          .trigger('mouseout')
          .children('ul')
          .should('not.be.visible')
      });

      it('Should open on mouseover and close on mouseout with default wrapper', () => {
        cy.get('#DDDivHover')
          .trigger('mouseover')
          .children('ul')
          .should('be.visible')
          .parent()
          .trigger('mouseout')
          .children('ul')
          .should('not.be.visible')
      });

      it('Should close on list item click', () => {
        cy.get('#DDButtonHover')
          .trigger('mouseover')
          .children('ul')
          .children('li')
          .first()
          .click()
          .get('#DDButtonHover')
          .children('ul')
          .should('not.be.visible')
      });

      it('Should disable', () => {
        cy.get('#disableButton')
          .click()
          .get('#DDButtonHover')
          .trigger('mouseover')
          .children('ul')
          .should('not.be.visible')
          .get('#DDDivHover')
          .trigger('mouseover')
          .children('ul')
          .should('not.be.visible')
          .get('#disableButton')
          .click()
      });
    });

    describe('InteractionMode click', () => {
      it('Should open on click and close on click outside if wrapped in button', () => {
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

      it('Should open on click and close on click outside with default wrapper', () => {
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
      
      it('Should close on list item click', () => {
        cy.get('#DDButtonClick')
          .click()
          .children('ul')
          .should('be.visible')
          .children('li')
          .first()
          .click()
          .get('#DDButtonClick')
          .children('ul')
          .should('not.be.visible')
      });
  
      it('Should close on button click', () => {
        cy.get('#DDButtonClick')
          .click()
          .children('ul')
          .should('be.visible')
          .children('li')
          .first()
          .click()
          .get('#DDButtonClick')
          .children('ul')
          .should('not.be.visible')
      });
      it('Should disable', () => {
       cy.get('#disableButton')
         .click()
          .get('#DDButtonClick')
          .click()
          .children('ul')
          .should('not.be.visible')
          .get('#DDDivClick')
          .click()
          .children('ul')
          .should('not.be.visible')
          .get('#disableButton')
          .click()
      });
    });
  });
});
