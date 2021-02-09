import { globalDefaultTheme } from '../../../korus-ui/components/LedaProvider';

const theme = globalDefaultTheme.input;

const wrapperInvalid = theme.inputWrapperInvalid;

describe('Validation', () => {
  beforeEach(() => {
    cy.visit('http://localhost:9000/cypress/validation', {
      onBeforeLoad(win) {
        cy.stub(win.console, 'log').as('consoleLog');
      },
    });
  });

  describe('Display', () => {
    it('should add class danger if input is invalid', () => {
      cy.name('Toggle')
        .click()
        .name('InputCV')
        .parent()
        .should(($element) => {
          expect($element).to.have.length(1);

          const className = $element[0].className;

          expect(className).to.contain(wrapperInvalid);
        })
        .name('Toggle')
        .click();
    });
    it('should display invalidMessage', () => {
      cy.name('Toggle')
        .click()
        .get('.invalid-message-item')
        .should('exist')
        .should(
          'have.text',
          'The app decides component to have invalid content'
        )
        .name('Toggle')
        .click();
    });
  });

  describe('Interaction', () => {
    it('submit should fail if input field is set as invalid', () => {
      cy.name('Toggle')
        .click()
        .name('SubmitCV')
        .click()
        .get('@consoleLog')
        .should('be.calledWith', 'Submit failed');
    });

    it('Should scroll to invalid fields', () => {
      cy.name('SubmitScroll')
        .click()
        .get('@consoleLog')
        .should('be.calledWith', 'Submit failed')
        .get('.filedrop-content')
        .isAtTop()
        .name('fileDropScroll')
        .attachFile('example.json', { subjectType: 'drag-n-drop' })
        .name('SubmitScroll')
        .click()
        .get('.dropzone-content')
        .isAtTop()
    });

    it('should validate onBlur', () => {
      cy.get('#validationRequiredBlur')
        .find('input')
        .each((validationOnBlur) => {
          cy.wrap(validationOnBlur)
            .focus()
            .blur()
            .parent()
            .should('have.class', 'danger')
            .and('have.class', 'required')
            .parent()
            .find('.invalid-message-item')
            .should('contain', 'required');
        })
        .get('textarea')
        .focus()
        .blur()
        .should('have.class', 'danger')
        .and('have.class', 'required')
        .parent()
        .find('.invalid-message-item')
        .should('contain', 'required');
    });

    it('should validate onClick', () => {
      cy.get('#validationRequiredBlur')
        .find('button')
        .click()
        .parent()
        .find('input')
        .each((validationOnClick) => {
          cy.wrap(validationOnClick)
            .parent()
            .should('have.class', 'danger')
            .and('have.class', 'required')
            .parent()
            .find('.invalid-message-item')
            .should('contain', 'required');
        })
        .get('textarea')
        .should('have.class', 'danger')
        .and('have.class', 'required')
        .parent()
        .find('.invalid-message-item')
        .should('contain', 'required');
    });

    it('numericRange validation', () => {
      cy.get('#numericRange')
        .find('input')
        .each((numericRangeVal) => {
          cy.wrap(numericRangeVal)
            .focus()
            .blur()
            .parent()
            .should('have.class', 'danger')
            .find('input')
            .type('100500')
            .should('have.value', '100500')
            .parent()
            .should('not.have.class', 'danger');
        });
    });

    describe('using of types of validators', () => {
      it('e-mail validator', () => {
        cy.get('#propsValidator')
          .name('email')
          .type('1')
          .blur()
          .parent()
          .should('have.class', 'danger')
          .parent()
          .find('.invalid-message-list')
          .should('have.text', 'Введите e-mail')
          .name('email')
          .clear()
          .type('test@test')
          .blur()
          .parent()
          .should('have.class', 'danger')
          .parent()
          .find('.invalid-message-list')
          .should('have.text', 'Введите e-mail')
          .name('email')
          .clear()
          .type('test@test.test')
          .should('contain.value', '@')
          .and('contain.value', '.')
          .blur()
          .parent()
          .should('not.have.class', 'danger')
          .name('email')
          .clear();
      });

      it('RegExp validator', () => {
        cy.get('#propsValidator')
          .name('regexp')
          .type('11')
          .blur()
          .parent()
          .should('have.class', 'danger')
          .parent()
          .find('.invalid-message-list')
          .should('contain', 'заглавная латинская')
          .name('regexp')
          .clear()
          .type('aa11')
          .blur()
          .parent()
          .should('have.class', 'danger')
          .parent()
          .find('.invalid-message-list')
          .should('contain', 'заглавная латинская')
          .name('regexp')
          .clear()
          .type('Aa11')
          .blur()
          .parent()
          .should('not.have.class', 'danger')
          .name('regexp')
          .clear();
      });

      it('function validator', () => {
        cy.get('#propsValidator')
          .name('function')
          .type('1')
          .blur()
          .parent()
          .should('have.class', 'danger')
          .parent()
          .find('.invalid-message-list')
          .should('contain', 'Минимум 10')
          .name('function')
          .clear()
          .type('a1a1')
          .blur()
          .parent()
          .should('have.class', 'danger')
          .parent()
          .find('.invalid-message-list')
          .should('contain', 'Минимум 10')
          .name('function')
          .clear()
          .type('1q2/?#.$9-1')
          .blur()
          .parent()
          .should('not.have.class', 'danger');
      });

      it('array of validators', () => {
        cy.get('#propsValidator')
          .name('array-field')
          .focus()
          .blur()
          .parent()
          .should('have.class', 'danger')
          .parent()
          .find('.invalid-message-list')
          .should('have.text', 'Обязательное поле!')
          .name('array-field')
          .type('1')
          .blur()
          .parent()
          .should('have.class', 'danger')
          .parent()
          .find('.invalid-message-list')
          .should('contain', 'Введите e-mail')
          .and('contain', 'Должна быть хотя бы одна заглавная буква!')
          .and('contain', 'Минимум 10 символов!');
      });

      it('submit onClick', () => {
        cy.get('#propsValidator')
          .name('submitButton')
          .click()
          .parents('#propsValidator')
          .find('input')
          .each((emptyFieldValidation) => {
            cy.wrap(emptyFieldValidation)
              .parent()
              .should('have.class', 'danger')
              .parent()
              .find('.invalid-message-list')
              .should('contain', 'Обязательное');
          })
          .get('@consoleLog')
          .should('be.calledWith', 'Click failed! Invalid fields')
          .get('#propsValidator')
          .find('input')
          .each((completedFieldValidation) => {
            cy.wrap(completedFieldValidation)
              .type('1Test@test.test')
              .should('not.have.class', 'danger');
          })
          .name('submitButton')
          .click()
          .get('@consoleLog')
          .should('be.calledWith', 'Successful click!');
      });
    });

    describe('using of predefined validators', () => {
      it('validation of different values', () => {
        cy.get('#predefinedValidators')
          .find('input')
          .each((preVal) => {
            cy.wrap(preVal)
              .type('1q2w!@#?.')
              .blur()
              .parent()
              .should('have.class', 'danger')
              .parent()
              .find('.invalid-message-item')
              .should('contain', 'Введите');
          })
          .clear();
      });

      it('cadastralNumber validator', () => {
        cy.get('#predefinedValidators')
          .name('cadastralNumber')
          .type('47:14:1203001:814')
          .should('not.have.class', 'danger')
          .and('contain.value', ':')
          .and('have.value', '47:14:1203001:814')
          .clear();
      });

      it('inn validator', () => {
        cy.get('#predefinedValidators')
          .name('inn')
          .type('7801392271')
          .should('have.value', '7801392271')
          .and('not.have.class', 'danger')
          .clear();
      });

      it('innCorp validator', () => {
        cy.get('#predefinedValidators')
          .name('innCorp')
          .type('470707900932')
          .should('have.value', '470707900932')
          .and('not.have.class', 'danger')
          .clear();
      });

      it('innPrivate validator', () => {
        cy.get('#predefinedValidators')
          .name('innPrivate')
          .type('470707900932')
          .should('have.value', '470707900932')
          .and('not.have.class', 'danger')
          .clear();
      });

      it('ogrn validator', () => {
        cy.get('#predefinedValidators')
          .name('ogrn')
          .type('1037739169335')
          .should('have.value', '1037739169335')
          .and('not.have.class', 'danger')
          .clear();
      });

      it('ogrnIp validator', () => {
        cy.get('#predefinedValidators')
          .name('ogrnIp')
          .type('317798096945129')
          .should('have.value', '317798096945129')
          .and('not.have.class', 'danger')
          .clear();
      });

      it('snils validator', () => {
        cy.get('#predefinedValidators')
          .name('snils')
          .type('123-456-789 64')
          .should('have.value', '123-456-789 64')
          .and('contain.value', '-')
          .and('contain.value', ' ')
          .and('not.have.class', 'danger')
          .clear();
      });
    });
  });
});
