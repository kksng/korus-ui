describe('Password', () => {
  before(() => {
    cy.visit('/cypress/password');
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

    it('A weak password', () => {
      cy.get('input[data-test="password"]')
        .type('12345')
        .parents()
        .find('.password-message-weak')
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
        .find('.password-message-weak')
        .should('contain', 'слабоват')
        .get('input[data-test="password"]')
        .clear()
        .type('1q2w3e4r5t')
        .parents()
        .find('.password-message-weak')
        .should('contain', 'слабоват')
        .get('input[data-test="password"]')
        .clear();
    });

    it('A medium password', () => {
      cy.get('input[data-test="password"]')
        .type('aQ12@#d#R!')
        .parents()
        .find('.password-message-medium')
        .should('contain', 'норм')
        .get('input[data-test="password"]')
        .clear()
        .type('123456Qwe')
        .parents()
        .find('.password-message-medium')
        .should('contain', 'норм')
        .get('input[data-test="password"]')
        .clear();
    });

    it('A strong password', () => {
      cy.get('input[data-test="password"]')
        .type('1Asd2789!23ew3r!@##@#d#R')
        .parents()
        .find('.password-message-strong')
        .should('contain', 'огонь')
        .get('input[data-test="password"]')
        .clear();
    });

    it('Visible/hide password', () => {
      cy.get('input[data-test="password"]')
        .type('12345qwerty')
        .parent()
        .find('.password-is-hidden')
        .click()
        .parent()
        .get('input[data-test="password"]')
        .invoke('attr', 'type')
        .should('contain', 'text')
        .get('.password-is-visible')
        .click()
        .parent()
        .get('input[data-test="password"]')
        .invoke('attr', 'type')
        .should('contain', 'password');
    });

    it('Disable input', () => {
      cy.get('input[aria-invalid="false"]').should('be.disabled');
    });
  });
});
