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
      cy.get('#Password')
        .type('12345qwerty{enter}')
        .get('@consoleLog')
        .should('be.calledWith', 'Password', '12345qwerty')
        .get('#Password')
        .clear();
    });
  });
  
  describe('Interaction', () => {
    it('Empty password', () => {
      cy.get('#Password')
        .focus()
        .blur()
        .parents()
        .find('.invalid-message-list')
        .should('contain', 'обязателен');
    });

    it('A weak password', () => {
      cy.get('#Password')
        .type('12345')
        .parents()
        .find('.password-message-weak')
        .should('contain', 'слабоват')
        .get('#Password')
        .blur()
        .parents()
        .find('.invalid-message-list')
        .should('contain', 'не менее')
        .get('#Password')
        .clear()
        .type('qwerty')
        .parents()
        .find('.password-message-weak')
        .should('contain', 'слабоват')
        .get('#Password')
        .clear()
        .type('1q2w3e4r5t')
        .parents()
        .find('.password-message-weak')
        .should('contain', 'слабоват')
        .get('#Password')
        .clear();
    });

    it('A medium password', () => {
      cy.get('#Password')
        .type('aQ12@#d#R!')
        .parents()
        .find('.password-message-medium')
        .should('contain', 'норм')
        .get('#Password')
        .clear()
        .type('123456Qwe')
        .parents()
        .find('.password-message-medium')
        .should('contain', 'норм')
        .get('#Password')
        .clear();
    });

    it('A strong password', () => {
      cy.get('#Password')
        .type('1Asd2789!23ew3r!@##@#d#R')
        .parents()
        .find('.password-message-strong')
        .should('contain', 'огонь')
        .get('#Password')
        .clear();
    });

    it('Visible/hidden password', () => {
      cy.get('#Password')
        .type('12345qwerty')
        .parent()
        .find('.password-is-hidden')
        .click()
        .parent()
        .get('#Password')
        .invoke('attr', 'type')
        .should('contain', 'text')
        .get('.password-is-visible')
        .click()
        .parent()
        .get('#Password')
        .invoke('attr', 'type')
        .should('contain', 'password')
        .get('#Password')
        .clear();
    });
    
    it('lowerCase', () => {
      cy.get('#lowercase')
        .type('PASSWORD')
        .should('have.value', 'password')
        .clear();
    });

    it('upperCase', () => {
      cy.get('#uppercase')
        .type('password')
        .should('have.value', 'PASSWORD')
        .clear();
    });

    it('Disable input', () => {
      cy.get('#isDisabled')
        .should('be.disabled');
    });
  });
});
