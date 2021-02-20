describe('Password', () => {
  beforeEach(() => {
    cy.visit('http://localhost:9000/cypress/password', {
      onBeforeLoad(win) {
        cy.stub(win.console, 'log').as('consoleLog');
      },
    });
  });

  describe('Events', () => {
    it('Enter press event', () => {
      cy.name('Password')
        .type('12345qwerty{enter}')
        .get('@consoleLog')
        .should('be.calledWith', 'Password', '12345qwerty')
        .name('Password')
        .clear();
    });
  });
  
  describe('Interaction', () => {
    it('Empty password', () => {
      cy.name('Password')
        .focus()
        .blur()
        .parents()
        .find('.invalid-message-list')
        .should('contain', 'обязателен');
    });

    it('A weak password', () => {
      cy.name('Password')
        .type('12345')
        .parents()
        .find('.password-message-weak')
        .should('contain', 'слабоват')
        .name('Password')
        .blur()
        .parents()
        .find('.invalid-message-list')
        .should('contain', 'не менее')
        .name('Password')
        .clear()
        .type('qwerty')
        .parents()
        .find('.password-message-weak')
        .should('contain', 'слабоват')
        .name('Password')
        .clear()
        .type('1q2w3e4r5t')
        .parents()
        .find('.password-message-weak')
        .should('contain', 'слабоват')
        .name('Password')
        .clear();
    });

    it('A medium password', () => {
      cy.name('Password')
        .type('aQ12@#d#R!')
        .parents()
        .find('.password-message-medium')
        .should('contain', 'норм')
        .name('Password')
        .clear()
        .type('123456Qwe')
        .parents()
        .find('.password-message-medium')
        .should('contain', 'норм')
        .name('Password')
        .clear();
    });

    it('A strong password', () => {
      cy.name('Password')
        .type('1Asd2789!23ew3r!@##@#d#R')
        .parents()
        .find('.password-message-strong')
        .should('contain', 'огонь')
        .name('Password')
        .clear();
    });

    it('Visible/hidden password', () => {
      cy.name('Password')
        .type('12345qwerty')
        .parent()
        .find('.password-is-hidden')
        .click()
        .parent()
        .name('Password')
        .invoke('attr', 'type')
        .should('contain', 'text')
        .get('.password-is-visible')
        .click()
        .parent()
        .name('Password')
        .invoke('attr', 'type')
        .should('contain', 'password')
        .name('Password')
        .clear();
    });
    
    it('lowerCase', () => {
      cy.name('lowercase')
        .type('PASSWORD')
        .should('have.value', 'password')
        .clear();
    });

    it('upperCase', () => {
      cy.name('uppercase')
        .type('password')
        .should('have.value', 'PASSWORD')
        .clear();
    });

    it('Disable input', () => {
      cy.get('input[aria-invalid="false"]')
        .should('be.disabled');
    });
  });
});
