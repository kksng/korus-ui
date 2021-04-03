/* eslint-disable no-unused-expressions,jest/valid-expect */
import { defaultButtonGroupTheme as theme } from '../../../korus-ui/components/ButtonGroup/theme';

describe('ButtonGroup', () => {
  beforeEach(() => {
    cy.visit('/cypress/button-group', {
      onBeforeLoad(win) {
        cy.stub(win.console, 'log').as('consoleLog');
      },
    });
  });

  describe('Display', () => {
    it('Should render all the buttons in the group', () => {
      cy.datatest('FourButtonGroup')
        .find('button')
        .should('have.length', 4)
        .datatest('TwoButtonGroup')
        .find('button')
        .should('have.length', 2)
        .datatest('ThreeButtonGroup')
        .find('button')
        .should('have.length', 3)
        .datatest('OneButtonGroup')
        .find('button')
        .should('have.length', 1);
    });

    it('Should render selected button with active class', () => {
      cy.datatest('FourButtonGroup')
        .contains('three')
        .should('have.length', 1)
        .and('have.class', 'active');
    });

    it('Disabled group should be disabled', () => {
      cy.datatest('TwoButtonGroup')
        .find(`.${theme.buttonsWrapper}`)
        .should('have.length', 1)
        .and('have.class', `${theme.wrapperDisabled}`);
    });

    describe('Rendering RadioType group', () => {
      it('Should render with string value', () => {
        cy.datatest('FourButtonGroup')
          .contains('one')
          .should('have.length', 1)
          .and('have.class', 'first')
          .parent()
          .contains('four')
          .should('have.length', 1)
          .and('have.class', 'last')
          .parent()
          .find('button')
          .each((radioTypeBtnRender) => {
            cy.wrap(radioTypeBtnRender)
            .should('have.length', 1)
            .and('have.class', 'button-wrapper')
          });
      });

      it('Should render with object value', () => {
        cy.datatest('ThreeButtonGroup')
          .contains('one')
          .should('have.length', 1)
          .and('have.class', 'first')
          .parent()
          .contains('three')
          .should('have.length', 1)
          .and('have.class', 'last')
          .parent()
          .find('button')
          .each((radioTypeBtnRender) => {
            cy.wrap(radioTypeBtnRender)
            .should('have.length', 1)
            .and('have.class', 'button-wrapper')
          });
      });
    
      it('Should render with number value', () => {
        cy.datatest('NumberButtonGroup')
          .contains('2')
          .should('have.length', 1)
          .and('have.class', 'first')
          .parent()
          .contains('3')
          .should('have.length', 1)
          .and('have.class', 'last')
          .parent()
          .find('button')
          .each((radioTypeBtnRender) => {
            cy.wrap(radioTypeBtnRender)
            .should('have.length', 1)
            .and('have.class', 'button-wrapper')
          });
      });

      it('Should render with default value is string', () => {
        cy.datatest('FourButtonGroup')
          .contains('three')
          .should('have.class', 'active');
      });

      it('Should render with default value is number', () => {
        cy.datatest('NumberButtonGroup')
          .contains('2')
          .should('have.class', 'active');
      });

      it('Should render with default walue is object', () => {
        cy.datatest('ThreeButtonGroup')
          .contains('one')
          .should('have.class', 'active');
      });
    });

    describe('Rendering Checkbox type group', () => {
      it('Should render with string value', () => {
        cy.datatest('StringCheckboxGroup')
        .contains('one')
          .should('have.length', 1)
          .and('have.class', 'first')
          .parent()
          .contains('four')
          .should('have.length', 1)
          .and('have.class', 'last')
          .parent()
          .find('button')
          .each((checkboxTypeBtnRender) => {
            cy.wrap(checkboxTypeBtnRender)
            .should('have.length', 1)
            .and('have.class', 'button-wrapper')
          });
      });

      it('Should render with number value', () => {
        cy.datatest('NumberCheckboxGroup')
          .contains('1')
          .should('have.length', 1)
          .and('have.class', 'first')
          .parent()
          .contains('3')
          .should('have.length', 1)
          .and('have.class', 'last')
          .parent()
          .find('button')
          .each((checkboxTypeBtnRender) => {
            cy.wrap(checkboxTypeBtnRender)
            .should('have.length', 1)
            .and('have.class', 'button-wrapper')
          });
      });

      it('Should render with object value', () => {
        cy.datatest('ObjectCheckboxGroup')
          .contains('one')
          .should('have.length', 1)
          .and('have.class', 'first')
          .parent()
          .contains('three')
          .should('have.length', 1)
          .and('have.class', 'last')
          .parent()
          .find('button')
          .each((checkboxTypeBtnRender) => {
            cy.wrap(checkboxTypeBtnRender)
            .should('have.length', 1)
            .and('have.class', 'button-wrapper')
          });
      });

      it('Should render with default value is string', () => {
        cy.datatest('StringCheckboxGroup')
          .contains('three')
          .should('have.class', 'active');
      });

      it('Should render with default value is number', () => {
        cy.datatest('NumberCheckboxGroup')
          .contains('2')
          .should('have.class', 'active');
      });

      it('Should render with default value is object', () => {
        cy.datatest('ObjectCheckboxGroup')
          .contains('one')
          .should('have.class', 'active');
      });
    });

    describe('Rendering with different attributes', () => {
      it('Primary', () => {
        cy.datatest('FourButtonGroup')
          .should('have.class', 'primary');
      });

      it('Secondary', () => {
        cy.datatest('NumberCheckboxGroup')
          .should('have.class', 'secondary');
      });

      it('Warning', () => {
        cy.datatest('ThreeButtonGroup')
          .should('have.class', 'warning');
      });

      it('Danger', () => {
        cy.datatest('OneButtonGroup')
          .should('have.class', 'danger');
      });

      it('Success', () => {
        cy.datatest('RadioButtonGroup')
          .should('have.class', 'success');
      });
    });
  });

  describe('Events', () => {
    describe('CheckBoxMode events', () => {
      it('onChange event', () => {
        cy.datatest('OneButtonGroup')
          .find('button')
          .click()
          .get('@consoleLog')
          .should('be.calledWith', 'Checkbox Click');
      });
  
      it('onClick event', () => {
        const stub = cy.stub();
        cy.on('window:alert', stub);
  
        cy.datatest('OneButtonGroup')
          .find('button')
          .click()
          .then(() => {
            expect(stub.getCall(0)).to.be.calledWith('Checkbox Alert!');
          });
      });
    });
    
    describe('RadioMode events', () => {
      it('onChange event', () => {
        cy.datatest('ThreeButtonGroup')
          .find('button')
          .first()
          .click()
          .get('@consoleLog')
          .should('be.calledWith', 'RadioClick');
      });
  
      it('onClick event', () => {
        const stub = cy.stub();
        cy.on('window:alert', stub);
  
        cy.datatest('ThreeButtonGroup')
          .find('button')
          .first()
          .click()
          .then(() => {
            expect(stub.getCall(0)).to.be.calledWith('RadioAlert!');
          });
      });
    })
  });

  describe('Interaction', () => {
    it('Should ignore clicks when isDisabled', () => {
      cy.datatest('TwoButtonGroup')
        .find(`.${theme.button}`)
        .last()
        .should('have.not.class', 'active')
        .click()
        .should('not.have.class', 'active');
    });

    it('Working in Checkbox mode', () => {
      cy.datatest('WithoutDefaultValueCheckboxGroup')
        .should('have.attr', 'type', 'checkbox')
        .find('button')
        .each((checkboxTypeCheck) => {
          cy.wrap(checkboxTypeCheck)
            .click()
            .should('have.class', 'active')
            .click()
            .should('not.have.class', 'active');
        });
    });

    it('Should allow only one pressed button in Radio mode', () => {
      cy.datatest('ThreeButtonGroup')
        .should('have.attr', 'type', 'radio')
        .find('button')
        .each((radioTypeCheck) => {
          cy.wrap(radioTypeCheck)
            .click()
            .should('have.class', 'active')
        })
        .then((notActiveCheck) => {
          cy.wrap(notActiveCheck)
            .prev()
            .should('not.have.class', 'active')
        });
    });
  });
});
