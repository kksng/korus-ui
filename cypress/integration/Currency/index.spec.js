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

  describe('Customization', () => {
    it('Сustom rendering of the currency sign (млн)', () => {
      cy.get('.custom-rub')
        .find('span')
        .should('contain', 'млн')
        .invoke('attr', 'class')
        .should('contain', 'txt-danger');
    });
    it('If there is no value (placeholder)', () => {
      cy.get('.placeholder-eur')
        .find('span')
        .should('contain', 'тут ничего нет');
    });
    it('Should trim fraction (false)', () => {
      cy.get('.trim-eur').find('span').should('contain', '.00');
    });
    it('Should display 3 decimal places', () => {
      cy.get('.prec').find('span').should('contain', '.000');
    });
  });
});
