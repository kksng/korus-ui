describe('Wizard tests', () => {
  beforeEach(() => {
    cy.visit('http://localhost:9000/cypress/wizard');
  });

  describe('Display', () => {
    it('Labels should render', () => {
      cy.get('label.bottom')
        .first()
        .should('have.text', 'Согласование')
        .get('label.bottom')
        .eq(1)
        .should('have.text', 'Оформление')
        .get('label.bottom')
        .eq(2)
        .should('have.text', 'Подписание')
        .get('label.bottom')
        .eq(3)
        .should('have.text', 'Предоплата')
        .get('label.bottom')
        .eq(4)
        .should('have.text', 'Доставка')
        .get('label.bottom')
        .eq(5)
        .should('have.text', 'Оплата');
      });

    it('Current step should have classes "active" and "progress"', () => {
      cy.get('.wizard .step')
        .eq(2)
        .should('have.class', 'active')
        .and('have.class', 'progress');
      });

    it('Current step should have progress line', () => {
      cy.get('.wizard .line')
        .eq(2)
        .find('.progress-line')
        .should('have.attr', 'style', 'width: 50%;');
    });

    it('First step should have class "first"', () => {
      cy.get('.wizard .step')
        .first()
        .should('have.class', 'first');
      });

    it('Last step should have class "last"', () => {
      cy.get('.wizard .step')
        .last()
        .should('have.class', 'last')
      });
  });

  describe('Interaction', () => {
    it('Should switch to next step', () => {
      cy.get('#next')
        .click()
        .get('.wizard .step')
        .eq(3)
        .should('have.class', 'active')
        .and('have.class', 'progress');
    });

    it('Should switch to previous step', () => {
      cy.get('#prev')
        .click()
        .get('.wizard .step')
        .eq(1)
        .should('have.class', 'active')
        .and('have.class', 'progress');
    });
  });
});
