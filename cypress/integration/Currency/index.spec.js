describe('Currency', () => {
  before(() => {
    cy.visit('http://localhost:9000/cypress/currency');
  });

  describe('Display', () => {
    it('Should render rubles', () => {
      cy.get('.rub').find('span').should('contain', '₽');
    });

    it('Should render dollars', () => {
      cy.get('.usd').find('span').should('contain', '$');
    });

    it('Should render euros', () => {
      cy.get('.eur').find('span').should('contain', '€');
    });
  });
});
