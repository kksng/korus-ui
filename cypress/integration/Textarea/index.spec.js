describe('Textarea', () => {
  before(() => {
    cy.visit('/cypress/textarea');
  });

  describe('Interaction', () => {
    it('Empty area', () => {
      cy.get('textarea[data-test="textarea"]')
        .focus()
        .blur()
        .parent()
        .find('.invalid-message-item')
        .should('contain', 'Обязательное');
    });
    it('Latin letters, сyrillic letters, numbers and special characters', () => {
      cy.get('textarea[data-test="textarea"]')
        .type(
          'Speed of light was 140,000 miles per second. Ужасным в двухминутке ненависти было не то, что ты должен разыгрывать роль, а то, что ты просто не мог остаться в стороне. !@#$%^&*()_+`~Ёё'
        )
        .should('contain', 'light')
        .should('contain', '140')
        .should('contain', '!@#$%^&*()_+`~Ёё')
        .should('contain', 'двухминутке')
        .clear();
    });
    it('Inserting text', () => {
      cy.get('textarea[data-test="textarea"]')
        .paste('Speed of light was 140,000 miles per second.')
        .should('contain', 'light')
        .should('contain', '140')
        .type('{selectall}')
        .paste('Скорость света составляет 300 000 километров в секунду')
        .should('contain', 'света')
        .should('contain', '300')
        .clear();
    });
    it('Should be disabled', () => {
      cy.get('textarea[data-test="textarea-disabled"]')
        .should('have.class', 'disabled')
        .should('be.disabled');
    });
  });
});
