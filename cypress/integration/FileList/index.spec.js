describe('FileList', () => {
  before(() => {
    cy.visit('/cypress/filelist');
  });

  describe('Display', () => {
    it('Should render component filelist', () => {
      cy.get('.file-list')
        .should('be.visible')
        .contains('Успешно')
        .should('be.visible')
        .get('.file-list')
        .snapshot()
    });
  });
});
