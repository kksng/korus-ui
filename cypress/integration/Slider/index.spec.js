import { defaultSliderTheme as theme } from '../../../korus-ui/components/Slider/theme'

describe('Slider', () => {
  before(() => {
    cy.visit('/cypress/slider');
  });

  describe('Display', () => {
    it('Should render the component', () => {
      cy.get('.basic')
        .find(`.${theme.container}`)
        .should('be.visible')
        .snapshot();
    });

    it('Should render disabled state', () => {
      cy.get('.disable')
        .find(`.${theme.container}`)
        .should('have.class', 'disabled')
        .and('be.visible')
        .snapshot();
    });

    it('Should render if set value', () => {
      cy.get('.multi')
        .find(`.${theme.handle}-0`)
        .should('have.attr', 'aria-valuenow', 2)
        .and('be.visible')
        .parent()
        .find(`.${theme.handle}-1`)
        .should('have.attr', 'aria-valuenow', 10)
        .and('be.visible')
        .parent()
        .find(`.${theme.handle}-2`)
        .should('have.attr', 'aria-valuenow', 15)
        .and('be.visible')
        .parent()
        .snapshot();
    });

    it('Should show tooltip on hover', () => {
      cy.get('.basic')
        .find(`.${theme.handle}`)
        .trigger('mouseover')
        .children()
        .invoke('show')  
        .should('be.visible')  
        .parent()
        .trigger('mouseout')
        .children()
        .invoke('hide')  
        .should('not.be.visible');
    });

    it('Should attach different classes by underlining', () => {
      cy.get('.basic')
        .should('have.class', 'width-50')
        .get('.disable')
        .should('have.class', 'width-50')
        .get('.default')
        .should('have.class', 'width-40');
    });

    it('Should render minmax label type', () => {
      cy.get('.minmax-label-type')
        .find(`.${theme.labelContainer}`)
        .should('be.visible');
    });

    it('Should render unitsRender values', () => {
      cy.get('.basic')
        .find(`.${theme.labelContainer}`)
        .children()
        .should('have.text', '10 млн.руб.')
        .and('be.visible');
    });
  });

  describe('Events', () => {
    beforeEach(() => {
      cy.visit('/cypress/slider', {
        onBeforeLoad(win) {
          cy.stub(win.console, 'log').as('consoleLog');
        },
      });
    });

    it('Should call onChange event and have correct event format', () => {
      const onChangeValue = {
        component: {
          name: 'Slider 1',
          value: 9,
        },
      };

      cy.get('.basic')
        .find(`.${theme.handle}`)
        .focus()
        .type('{leftArrow}')
        .name('reset')
        .click()
        .get('@consoleLog')
        .should('be.calledWith', 'Slider onChange', onChangeValue)
    });

    it('Should call onMove event and have correct event format', () => {
      const onMoveValue = {
        component: {
          name: 'Slider 1',
          value: 9,
        },
      };

      cy.get('.basic')
        .find(`.${theme.handle}`)
        .focus()
        .type('{leftArrow}')
        .get('@consoleLog')
        .should('be.calledWith', 'Slider onMove', onMoveValue)
        .get('.basic')
        .find(`.${theme.handle}`)
        .focus()
        .type('{rightArrow}');
    });
  });

  describe('Interaction', () => {
    it('Basic usage', () => {
      cy.get('.basic')
        .find(`.${theme.handle}`)
        .focus()
        .type('{rightArrow}')
        .should('have.attr', 'aria-valuenow', 11)
        .and('have.class', `${theme.trackActive}`)
        .parents('.basic')
        .find(`.${theme.label}`)
        .should('contain', '11')
        .parents()
        .name('reset')
        .click()
        .parents()
        .get('.basic')
        .find(`.${theme.handle}`)
        .should('have.attr', 'aria-valuenow', 10)
        .and('not.have.class', `${theme.trackActive}`)
        .parents('.basic')
        .find(`.${theme.label}`)
        .should('contain', '10');
    });

    it('Working with isDisabled prop', () => {
      cy.get('.disable')
        .find(`.${theme.handle}`)
        .focus()
        .type('{leftArrow}')
        .should('not.have.attr', 'aria-valuenow', 9)
        .and('be.focused');
    });

    it('Working with default value', () => {
      cy.get('.default')
        .should('be.visible')
        .find(`.${theme.handle}`)
        .should('have.attr', 'aria-valuenow', 40)
        .and('be.visible')
        .focus()
        .type('{rightArrow}')
        .should('have.attr', 'aria-valuenow', 41)
        .focus()
        .type('{leftArrow}');
    });

    it('Working with current label type', () => {
      cy.get('.default')
      .find(`.${theme.labelContainer}`)
      .children()
      .first()
      .should('have.text', '40 ')
      .next()
      .should('not.exist')
      .get('.default')
      .find(`.${theme.handle}`)
      .focus()
      .type('{leftArrow}')
      .parent()
      .next()
      .should('have.text', '39 ')
    });

    it('Working with min and max props', () => {
      cy.get('.minmax-label-type')
        .find(`.${theme.labelContainer}`)
        .children()
        .first()
        .should('have.text', '10 ')
        .next()
        .should('have.text', '90 ')
        .get('.minmax-label-type')
        .find(`.${theme.handle}`)
        .focus()
        .type('{leftArrow}')
        .parent()
        .next()
        .children()
        .first()
        .should('have.text', '10 ')
        .next()
        .should('have.text', '90 ');
    });

    it('The boundary values', () => {
      cy.get('.basic')
        .find(`.${theme.handle}`)
        .focus()
        .type('{end}')
        .should('have.attr', 'aria-valuenow', 20)
        .parents('.basic')
        .find(`.${theme.label}`)
        .should('contain', '20')
        .parents('.basic')
        .find(`.${theme.handle}`)
        .focus()
        .type('{home}')
        .should('have.attr', 'aria-valuenow', 0)
        .parents('.basic')
        .find(`.${theme.label}`)
        .should('contain', '0')
        .parents()
        .name('reset')
        .click();
    });

    it('Changing the value by clicking on the scale', () => {
      cy.get('.basic')
        .find(`.${theme.track}.${theme.trackActive}`)
        .click()
        .parent()
        .find(`.${theme.handle}`)
        .should('have.attr', 'aria-valuenow', 5)
        .parent()
        .find(`.${theme.track}`)
        .eq(1)
        .click()
        .parent()
        .find(`.${theme.handle}`)
        .should('have.attr', 'aria-valuenow', 12)
        .parents()
        .name('reset')
        .click();
    });

    it('The use of multiple sliders', () => {
      cy.get('.multi')
        .find(`.${theme.handle}`)
        .each((sliderHandle) => {
          cy.wrap(sliderHandle)
            .click()
            .type('{leftArrow}')
        })
        .parent()
        .find('.slider-handle-0')
        .should('have.attr', 'aria-valuenow', 1)
        .get('.slider-handle-1')
        .should('have.attr', 'aria-valuenow', 9)
        .get('.slider-handle-2')
        .should('have.attr', 'aria-valuenow', 14)
        .parent()
        .find('.slider-track.active')
        .each((clickOnSliderTrackActive) => {
          cy.wrap(clickOnSliderTrackActive)
            .click()
        })
        .parent()
        .find('.slider-handle-0')
        .should('have.attr', 'aria-valuenow', 4)
        .get('.slider-handle-1')
        .should('have.attr', 'aria-valuenow', 11)
        .get('.slider-handle-2')
        .should('have.attr', 'aria-valuenow', 14)
        .parent()
        .find('.slider-handle-1')
        .click()
        .type('{home}')
        .should('have.attr', 'aria-valuenow', 4)
        .click()
        .type('{end}')
        .should('have.attr', 'aria-valuenow', 14);
    });
  });
});
