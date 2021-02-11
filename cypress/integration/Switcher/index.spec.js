describe('Swithcer', () => {
  before(() => {
    cy.visit('http://localhost:9000/cypress/switcher');
  });

  describe('Display', () => {
    it('Should disabled when isDisabled', () => {
      cy.get('#disabledSwitcher')
        .find('.switcher-wrapper')
        .should('have.class', 'disabled');
    });
  });

  describe('Interacrion', () => {
    it('Uncontrolled mode', () => {
      cy.get('#uncontrolledSwitcher')
        .find('.switcher-wrapper')
        .click()
        .should('have.class', 'active')
        .click()
        .should('not.have.class', 'active');
    });

    it('Controlled mode', () => {
      const stub = cy.stub();
      cy.on('window:alert', stub);

      cy.get('#controlledSwitcher')
        .find('.switcher-wrapper')
        .click()
        .should('not.have.class', 'active')
        .then(() => {
          expect(stub.getCall(0)).to.be.calledWith('Alert');
        })
        .get('.controlled')
        .should('contain', 'false')
        .get('#controlledSwitcher')
        .find('.switcher-wrapper')
        .click()
        .should('have.class', 'active')
        .then(() => {
          expect(stub.getCall(0)).to.be.calledWith('Alert');
        })
        .get('.controlled')
        .should('contain', 'true');
    });
  });
});
