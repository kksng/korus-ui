describe('TimeRange tests', () => {
  beforeEach(() => {
    cy.visit('/cypress/timerange');
  });

  describe('Interaction', () => {
    it('Should move cursor to next input on Tab click', () => {
      cy.name('TimeRange-from')
        .tab()
        .name('TimeRange-to')
        .should('be.focused');
    });

    it('Basic usage and entry of limit values', () => {
      cy.get('.active')
        .find('input')
        .each((basicUsage) => {
          cy.wrap(basicUsage)
            .clear()
            .type('12:30{enter}')
            .should('have.value', '12:30')
            .clear()
            .type('12:31{enter}')
            .should('have.value', '12:31')
            .clear()
            .type('14:08{enter}')
            .should('have.value', '14:08')
            .clear()
            .type('16:59{enter}')
            .should('have.value', '16:59')
            .clear()
            .type('17:00{enter}')
            .should('have.value', '17:00')
            .clear()
        });
    });

    it('Entering invalid values', () => {
      cy.get('.active')
        .find('input')
        .each((enterInvalidValues) => {
          cy.wrap(enterInvalidValues)
            .clear()
            .type('Hello')
            .should('have.value', '__:__')
            .type('Привет')
            .should('have.value', '__:__')
            .type('!@~`ёЁ')
            .should('have.value', '__:__')
            .type('    ')
            .should('have.value', '__:__')
            .clear();
        });
    });

    it('Entering values out of range', () => {
      cy.get('.active')
        .find('input')
        .each((enterOutOfRangeValues) => {
          cy.wrap(enterOutOfRangeValues)
            .clear()
            .type('00:00{enter}')
            .should('have.value', '12:30')
            .clear()
            .type('12:29{enter}')
            .should('have.value', '12:30')
            .clear()
            .type('23:00{enter}')
            .should('have.value', '17:00')
            .clear()
            .type('17:01{enter}')
            .should('have.value', '17:00')
            .clear()
        });
    });

    it('Should be disabled', () => {
      cy.get('.disabled-state')
        .find('input')
        .each((shouldBeDisabled) => {
          cy.wrap(shouldBeDisabled)
            .should('be.disabled')
            .and('have.attr', 'disabled');
        });
    });

    it('Should autocomplete time with 0', () => {
      cy.name('TimeRange-from')
        .clear()
        .type('1')
        .should('have.value', '10:00')
        .type('{enter}')
        .should('have.value', '12:30')
        .clear()
        .type('{rightArrow}9')
        .should('have.value', '09:00')
        .type('{enter}')
        .should('have.value', '12:30')
        .clear()
    });

    it('Should not be able to enter more than 23 hours', () => {
      cy.name('TimeRange-from')
        .clear()
        .type('1330{enter}')
        .type('{leftArrow}{leftArrow}{leftArrow}{leftArrow}{leftArrow}')
        .type('6{enter}')
        .should('have.value', '13:30')
        .clear()
        .type('6')
        .should('have.value', '00:00')
        .type('{enter}')
        .should('have.value', '12:30')
        .clear()
    });

    it('Should not be able to enter more than 59 minutes', () => {
      cy.name('TimeRange-from')
        .clear()
        .type('1230{enter}')
        .type('{leftArrow}{leftArrow}')
        .type('6{enter}')
        .should('have.value', '12:30')
        .clear()
    });
  });
});
