describe('Password', () => {
  before(() => {
    cy.visit('http://localhost:9000/cypress/password');
  });

  describe('Interaction', () => {
    it('Empty password', () => {
      cy.get('input[data-test="password"]')
        .focus()
        .blur()
        .parents()
        .find('.invalid-message-list')
        .should('contain', 'обязателен');
    });

    it.only('A weak password', () => {
      cy.get('input[data-test="password"]')
        .type('12345')
        .should('have.text', '')
        .parents()
        .find('.invalid-message-list')
        .should('contain', 'слабоват')
        .get('input[data-test="password"]')
        .blur()
        .parents()
        .find('.invalid-message-list')
        .should('contain', 'не менее')
        .get('input[data-test="password"]')
        .clear()
        .type('qwerty')
        .parents()
        .find('.invalid-message-list')
        .should('contain', 'слабоват')
        .get('input[data-test="password"]')
        .clear()
        .type('1q2w3e4r5t')
        .parents()
        .find('.invalid-message-list')
        .should('contain', 'слабоват');
    });
  });
});
