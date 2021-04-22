import { defaultPasswordTheme as theme } from '../../../korus-ui/components/Password/theme';

describe('Password', () => {
  before(() => {
    cy.visit('/cypress/password')
  });

  describe('Display', () => {
    it('Should render the component', () => {
      cy.get('#Password')
        .parent()
        .should('be.visible')
        .snapshot();
    });

    it('Should render component with default value', () => {
      cy.get('#withDefaultValue')
        .should('have.value', 'Самый безопасный пароль')
        .parent()
        .should('be.visible')
        .snapshot();
    });

    it('Should render clear button', () => {
      cy.get('#lowercase')
        .type('Hello')
        .next()
        .should('be.visible')
        .parents(`.${theme.inputWrapper}`)
        .snapshot();
    });

    it('Should render disabled input', () => {
      cy.get('#isDisabled')
        .parent()
        .should('have.class', `${theme.inputWrapperDisabled}`)
        .and('be.visible')
        .children()
        .should('be.disabled')
        .and('have.attr', `${theme.inputWrapperDisabled}`);
    });
  });

  describe('Events', () => {
    beforeEach(() => {
      cy.visit('/cypress/password', {
        onBeforeLoad(win) {
          cy.stub(win.console, 'log').as('consoleLog');
        },
      });
    });

    it('onChange event', () => {
      cy.get('#Password')
        .type('Hello')
        .get('@consoleLog')
        .should('be.calledWith', 'Change');
    });

    it('onFocus event', () => {
      cy.get('#Password')
        .focus()
        .get('@consoleLog')
        .should('be.calledWith', 'Focus', '');
    });

    it('onBlur event', () => {
      cy.get('#Password')
        .focus()
        .blur()
        .get('@consoleLog')
        .should('be.calledWith', 'Blur', '');
    });

    it('onEnterPress event', () => {
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
        .find(`.${theme.messageWeak}`)
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
        .find(`.${theme.messageWeak}`)
        .should('contain', 'слабоват')
        .get('#Password')
        .clear()
        .type('1q2w3e4r5t')
        .parents()
        .find(`.${theme.messageWeak}`)
        .should('contain', 'слабоват')
        .get('#Password')
        .clear();
    });

    it('A medium password', () => {
      cy.get('#Password')
        .type('aQ12@#d#R!')
        .parents()
        .find(`.${theme.messageMedium}`)
        .should('contain', 'норм')
        .get('#Password')
        .clear()
        .type('123456Qwe')
        .parents()
        .find(`.${theme.messageMedium}`)
        .should('contain', 'норм')
        .get('#Password')
        .clear();
    });

    it('A strong password', () => {
      cy.get('#Password')
        .type('1Asd2789!23ew3r!@##@#d#R')
        .parents()
        .find(`.${theme.messageStrong}`)
        .should('contain', 'огонь')
        .get('#Password')
        .clear();
    });

    it('Visible/hidden password', () => {
      cy.get('#Password')
        .type('12345qwerty')
        .parent()
        .find(`.${theme.isHiddenIcon}`)
        .click()
        .parent()
        .get('#Password')
        .invoke('attr', 'type')
        .should('contain', 'text')
        .get(`.${theme.isVisibleIcon}`)
        .click()
        .parent()
        .get('#Password')
        .invoke('attr', 'type')
        .should('contain', 'password')
        .get('#Password')
        .clear();
    });
    
    it('Worling with lowerCase prop', () => {
      cy.get('#lowercase')
        .type('PASSWORD')
        .should('have.value', 'password')
        .clear();
    });

    it('Working with upperCase prop', () => {
      cy.get('#uppercase')
        .type('password')
        .should('have.value', 'PASSWORD')
        .clear();
    });

    it('Working with maxLength prop', () => {
      cy.get('#Password')
        .type('only 20 symbols ha-h')
        .should('have.value', 'only 20 symbols ha-h')
        .clear()
        .type('here is 21 symbols ))')
        .should('have.value', 'here is 21 symbols )')
        .clear();
    });

    it('Should accept only latin letter symbols (allowedSymbols prop) ',() => {
      cy.get('#withAllowedSymbols')
        .type('12345')
        .should('have.value', '')
        .type('!@#$%')
        .should('have.value', '')
        .type('Hello')
        .should('have.value', 'Hello')
        .clear();
    });

    it('Should not accept latin letter symbols (forbiddenSymbols prop)', () => {
      cy.get('#withForbiddenSymbols')
        .type('12345')
        .should('have.value', '12345')
        .clear()
        .type('!@#$%')
        .should('have.value', '!@#$%')
        .clear()
        .type('Привет')
        .should('have.value', 'Привет')
        .clear()
        .type('Hello')
        .should('have.value', '');
    });

    it('Working with minPasswordEvaluationLength prop (minPasswordEvaluationLength = {5})', () => {
      cy.get('#Password')
        .type('1')
        .parent()
        .next()
        .should('have.text', 'Задайте хороший пароль')
        .prev()
        .children('input')
        .clear()
        .type('1234')
        .parent()
        .next()
        .should('have.text', 'Задайте хороший пароль')
        .prev()
        .children('input')
        .clear()
        .type('12345')
        .parent()
        .next()
        .should('have.text', 'Пароль слабоват')
        .get('#Password')
        .clear();
    });
  });
});
