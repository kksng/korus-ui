describe('Currency', () => {
  before(() => {
    cy.visit('http://localhost:9000/cypress/currency');
  });

  describe('Display', () => {
    it('Should render rubles', () => {
      cy.name('rub')
        .should('contain', '₽');
    });

    it('Should render dollars', () => {
      cy.name('usd')
        .should('contain', '$');
    });

    it('Should render euros', () => {
      cy.name('eur')
        .should('contain', '€');
    });
  });

  describe('Customization', () => {
    it('Сustom rendering of the currency sign (млн)', () => {
      cy.name('customRub')
        .find('span')
        .should('contain', 'млн')
        .and('have.class', 'txt-danger');
    });

    it('If there is no value (placeholder)', () => {
      cy.name('placeholderEur')
        .should('contain', 'тут ничего нет');
    });

    it('Should trim fraction (false)', () => {
      cy.name('trimEur')
        .should('contain', '.00');
    });

    it.only('Should display 3 decimal places', () => {
      cy.name('prec')
        .should('contain', '.000');
    });
  });
});
