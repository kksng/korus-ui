// import { globalDefaultTheme } from '../../../korus-ui/components/LedaProvider';

// const theme = globalDefaultTheme.input;

// const wrapperInvalid = theme.inputWrapperInvalid;

// describe('Validation', () => {
//   beforeEach(() => {
//     cy.visit('http://localhost:9000/cypress/validation');
//   });

//   describe('Display', () => {
//     it('should add class danger if input is invalid', () => {
//       cy.name('Toggle')
//         .click()
//         .name('Input1')
//         .parent()
//         .should(($element) => {
//           expect($element).to.have.length(1);

//           const className = $element[0].className;

//           expect(className).to.contain(wrapperInvalid);
//         })
//         .name('Toggle')
//         .click();
//     });
//     it('should display invalidMessage', () => {
//       cy.name('Toggle')
//         .click()
//         .get('.invalid-message-item')
//         .should('exist')
//         .should(
//           'have.text',
//           'The app decides component to have invalid content'
//         )
//         .name('Toggle')
//         .click();
//     });
//   });

//   describe('Interaction', () => {
//     it('submit should fail if input field is set as invalid', () => {
//       cy.name('Toggle')
//         .click()
//         .name('Submit')
//         .click()
//         .name('Message')
//         .should('have.text', 'Submit failed');
//     });
//   });
// });

describe('Validation', () => {
  beforeEach(() => {
    cy.visit('http://localhost:9000/cypress/validation'),
      {
        onBeforeLoad(win) {
          cy.stub(win.console, 'log').as('consoleLog')
        },
      }
  })

  describe('Interaction', () => {
    it('should be validate onBlur', () => {
      cy.get('#ValidationRequiredBlur')
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
            .should('contain', 'required')
        })
        .get('textarea')
        .focus()
        .blur()
        .should('have.class', 'danger')
        .and('have.class', 'required')
        .parent()
        .find('.invalid-message-item')
        .should('contain', 'required')
    })

    it('should be validate onClick', () => {
      cy.get('.basic')
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
            .should('contain', 'required')
        })
        .get('textarea')
        .should('have.class', 'danger')
        .and('have.class', 'required')
        .parent()
        .find('.invalid-message-item')
        .should('contain', 'required')
    })
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
          .blur()
          .parent()
          .should('not.have.class', 'danger')
          .name('email')
          .clear()
      })
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
          .clear()
      })
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
          .should('not.have.class', 'danger')
      })
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
          .and('contain', 'Минимум 10 символов!')
      })
      it.only('submit onClick', () => {
        cy.get('#propsValidator')
          .name('submitButton')
          .click()
          .parents('#propsValidator')
          .find('input')
          .each((empyFieldValidation) => {
            cy.wrap(empyFieldValidation)
              .parent()
              .should('have.class', 'danger')
              .parent()
              .find('.invalid-message-list')
              .should('contain', 'Обязательное')
          })
          .get('@consoleLog')
          .should('be.calledWith', 'Click failed! Invalid fields')
      })
    })
  })
})
