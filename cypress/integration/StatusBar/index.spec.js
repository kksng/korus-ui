describe('Statusbar', () => {
  before(() => {
    cy.visit('http://localhost:9000/cypress/statusbar')
  })

  describe('Interaction', () => {
    it('Previous step', () => {
      cy.get('button')
        .contains('Предыдущий')
        .click()
        .parent()
        .find('.progress')
        .contains('Оформление')
        .parent()
        .find('.statusbar-icon')
        .invoke('attr', 'class')
        .should('contain', 'progress')
    })

    it('Next step', () => {
      cy.get('button')
        .contains('Следующий')
        .click()
        .parent()
        .find('.progress')
        .contains('Подписание')
        .parent()
        .find('.statusbar-icon')
        .invoke('attr', 'class')
        .should('contain', 'progress')
    })

    it.only('Start animation progress', () => {
      cy.get('button').contains('Начать')
    })
  })
})
