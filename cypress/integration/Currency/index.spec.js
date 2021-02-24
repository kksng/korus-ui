describe('Currency', () => {
  before(() => {
    cy.visit('http://localhost:9000/cypress/currency');
  });

  describe('Display', () => {
    it('Should render rubles', () => {
      cy.get('#rub')
        .should('contain', '₽');
    });

    it('Should render dollars', () => {
      cy.get('#usd')
        .should('contain', '$');
    });

    it('Should render euros', () => {
      cy.get('#eur')
        .should('contain', '€');
    });
  });

  describe('Customization', () => {
    it('Сustom rendering of the currency sign (млн)', () => {
      cy.get('#customRub')
        .find('span')
        .should('contain', 'млн')
        .and('have.class', 'txt-danger');
    });

    it('If there is no value (placeholder)', () => {
      cy.get('#placeholderEur')
        .should('contain', 'тут ничего нет');
    });

    it('Should trim fraction (false)', () => {
      cy.get('#trimEur')
        .should('contain', '.00');
    });

    it('Should display 3 decimal places', () => {
      cy.get('#prec')
        .should('contain', '.000');
    });
  });
});
