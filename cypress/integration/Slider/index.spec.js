describe('Slider', () => {
  before(() => {
    cy.visit('/cypress/slider');
  });

  describe('Interaction', () => {
    it('Basic usage', () => {
      cy.get('.basic')
        .find('.slider-handle')
        .focus()
        .type('{rightArrow}')
        .should('have.attr', 'aria-valuenow', 11)
        .and('have.class', 'active')
        .parents('.basic')
        .find('.slider-label')
        .should('contain', '11')
        .parents()
        .find('button')
        .contains('Обновить')
        .click()
        .parents()
        .get('.basic')
        .find('.slider-handle')
        .should('have.attr', 'aria-valuenow', 10)
        .and('not.have.class', 'active')
        .parents('.basic')
        .find('.slider-label')
        .should('contain', '10');
    });
    it('The boundary values', () => {
      cy.get('.basic')
        .find('.slider-handle')
        .focus()
        .type('{end}')
        .should('have.attr', 'aria-valuenow', 20)
        .parents('.basic')
        .find('.slider-label')
        .should('contain', '20')
        .parents('.basic')
        .find('.slider-handle')
        .focus()
        .type('{home}')
        .should('have.attr', 'aria-valuenow', 0)
        .parents('.basic')
        .find('.slider-label')
        .should('contain', '0')
        .parents()
        .find('button')
        .contains('Обновить')
        .click();
    });
    it('Changing the value by clicking on the scale', () => {
      cy.get('.basic')
        .find('.slider-track.active')
        .click()
        .parent()
        .find('.slider-handle')
        .should('have.attr', 'aria-valuenow', 5)
        .parent()
        .find('.slider-track')
        .eq(1)
        .click()
        .parent()
        .find('.slider-handle')
        .should('have.attr', 'aria-valuenow', 12)
        .parents()
        .find('button')
        .contains('Обновить')
        .click();
    });
    it('Should be disable', () => {
      cy.get('.disable')
        .find('.slider-container')
        .should('have.class', 'disabled');
    });
    it('The use of multiple sliders', () => {
      cy.get('.multi')
        .find('.slider-handle')
        .each((sliderHandle) => {
          cy.wrap(sliderHandle).click().type('{leftArrow}');
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
          cy.wrap(clickOnSliderTrackActive).click();
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
