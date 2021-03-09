describe('Textarea', () => {
  before(() => {
    cy.visit('/cypress/textarea');
  });

  describe('Interaction', () => {
    it('Empty area', () => {
      cy.get('#textarea')
        .focus()
        .blur()
        .parent()
        .find('.invalid-message-item')
        .should('contain', 'Обязательное');
    });

    it('Latin letters, сyrillic letters, numbers and special characters', () => {
      cy.get('#textarea')
        .type(
          'Speed of light was 140,000 miles per second. Ужасным в двухминутке ненависти было не то, что ты должен разыгрывать роль, а то, что ты просто не мог остаться в стороне. !@#$%^&*()_+`~Ёё'
        )
        .should('contain', 'light')
        .and('contain', '140')
        .and('contain', '!@#$%^&*()_+`~Ёё')
        .and('contain', 'двухминутке')
        .clear();
    });

    it('Inserting text', () => {
      cy.get('#textarea')
        .paste('Speed of light was 140,000 miles per second.')
        .should('contain', 'light')
        .and('contain', '140')
        .type('{selectall}')
        .paste('Скорость света составляет 300 000 километров в секунду')
        .should('contain', 'света')
        .and('contain', '300')
        .clear();
    });

    it('Should be disabled', () => {
      cy.get('#textarea-disabled')
        .should('have.class', 'disabled')
        .and('be.disabled');
    });
  });
});
